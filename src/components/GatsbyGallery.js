import React, { useState } from "react"
import Img from "gatsby-image"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box, Link } from "rebass"
import styled from "styled-components"
import { chunk, sum } from "../utils/array"
import carouselFormatters from "../utils/carouselFormatters"
import ReactPlayer from 'react-player';

// type Props = {
//   images: {
//     id: string,
//     aspectRatio: number,
//     src: string,
//     srcSet: string,
//     sizes: string,
//     originalImg: string,
//     caption: string,
//   }[],
//   itemsPerRow?: number[],
// }

const StyledBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  transition: filter 0.3s;
  :hover {
    filter: brightness(87.5%);
  }
`

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer
      url={url}
      playing={isSelected}
      style={{ margin: '0 auto', maxWidth: '100vw' }}
    />
  );

  const CustomView = ({ data }) => {
    return <div className="customView" style={{ display: 'flex', justifyContent: "center" }}>
      {data.youtubeId ?
        <YoutubeSlide url={`https://www.youtube.com/embed/${data.youtubeId}`} /> :
        (<img
          className="viewImage"
          src={data.source}
          alt={data.caption}
          width="auto"
          style={{
            height: 'auto',
            maxHeight: '100vh',
            maxWidth: '100%',
            userSelect: 'none',
          }}
        />
        )}
    </div>
  }

  return (
    <Box>
      {images.map((image, i) => (
        <Link
          key={image.id}
          href={image.originalImg}
          onClick={e => {
            e.preventDefault()
            openModal(i)
          }}
        >
          <StyledBox width={rowAspectRatioSumsByBreakpoints.map(
            (rowAspectRatioSums, j) => {
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex]
              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
            }
          )}>
            <Img
              fluid={image}
              title={image.caption}
            />
          </StyledBox>
        </Link>
      ))}

      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map(({ originalImg, caption, youtubeId }) => ({
                  source: originalImg,
                  caption,
                  youtubeId
                }))}
                currentIndex={modalCurrentIndex}
                formatters={carouselFormatters}
                components={{
                  FooterCount: () => null,
                  View: CustomView
                }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Box>
  )
}

export default Gallery
