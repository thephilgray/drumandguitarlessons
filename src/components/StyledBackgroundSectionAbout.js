import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bassdrum.png" }) {
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
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#192550`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSectionAbout = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  margin-bottom: 2rem;
`

export default StyledBackgroundSectionAbout
