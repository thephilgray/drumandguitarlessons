import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "justdrums.png" }) {
        childImageSharp {
          fluid(
            quality: 90
            maxWidth: 4160
            duotone: { highlight: "#BC7AFF", shadow: "#192550" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#094FFF`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSectionContact = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  margin-bottom: 2rem;
`

export default StyledBackgroundSectionContact
