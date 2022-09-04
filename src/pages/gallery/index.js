import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Gallery from "../../components/GatsbyGallery"
import StyledBackgroundSection from "../../components/StyledBackgroundSection"

export default function GalleryPage() {
  const data = useStaticQuery(graphql`
    query GalleryImages {
      allGalleryYaml {
        edges {
          node {
            title
            youtubeId
            image {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Gallery" />
      <StyledBackgroundSection height="400px">
        <Typography variant="h3" align="center" color="secondary" gutterBottom>
          Gallery
        </Typography>
      </StyledBackgroundSection>
      <Container maxWidth="xl" style={{ marginTop: "1rem" }}>
        <Gallery
          images={data.allGalleryYaml.edges.map(({ node }) => ({
            id: node.image.id,
            ...node.image.childImageSharp.fluid,
            youtubeId: node.youtubeId,
            caption: `${node.title}`,
          }))}
          itemsPerRow={[2, 3]}
        />
      </Container>
    </Layout>
  )
}
