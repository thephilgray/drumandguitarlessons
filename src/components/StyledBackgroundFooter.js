import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundFooter = ({ className, children, height }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "stars.png" }) {
        childImageSharp {
          fluid(
            quality: 90
            maxWidth: 4160
            duotone: { highlight: "#D95141", shadow: "#192550" }
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
      Tag="footer"
      height={height}
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundFooter = styled(BackgroundFooter)`
  width: 100%;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.height};
  margin-bottom: 2rem;
`

export default StyledBackgroundFooter
