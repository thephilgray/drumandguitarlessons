import React from "react"
import { Typography, Container } from "@material-ui/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledBackgroundSectionAbout from "../../components/StyledBackgroundSectionAbout"
import styled from "styled-components"

const FirstParagraph = styled(Typography)`
  &:first-letter {
    color: #d95141;
    float: left;
    font-family: Georgia;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    /* margin-top: 0.15em; */
  }
`

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <StyledBackgroundSectionAbout>
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          About Us
        </Typography>
      </StyledBackgroundSectionAbout>
      <Container maxWidth="md">
        <FirstParagraph variant="body1" paragraph>
          Our specialty is providing Professional Studio Musicians who are
          virtuosos at their instruments. These professionals are also uniquely
          successful in their ability to convey that knowledge through a proven
          teaching style, using techniques that our clients have come to enjoy
          and truly learn from, regardless of age or level of skill.
        </FirstParagraph>
        <Typography variant="body1" paragraph>
          Many of our customers prefer the convenience of our company traveling
          to their homes with the necessary tools. Moreover, you may choose
          in-studio instruction or mobile instruction.
        </Typography>
        <Typography variant="body1" paragraph>
          Both offer the same success yet you must decide which is the most
          convenient and money saving option. Our offices can explain the
          differences and you can decide on your ideal package, all of which are
          priced very affordably.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether it's guitar (acoustic, electric, 4-5 or 6 string bass,
          classical, rhythm or lead), a small trap set of jazz percussion drums
          to a Neil Pert of RUSH double bass, 10 TOM TOM extravaganza or
          somewhere in the middle, we guarantee you will show improvement with
          each session!
        </Typography>
      </Container>
    </Layout>
  )
}
