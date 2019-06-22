import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Gallery from "../../components/GatsbyGallery"
import StyledBackgroundFooter from "../../components/StyledBackgroundFooter"

export default function GalleryPage() {
  const data = useStaticQuery(graphql`
    query GalleryImages {
      allGalleryYaml {
        edges {
          node {
            title
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
      <StyledBackgroundFooter height="200px">
        <Typography variant="h3" align="center" color="secondary" gutterBottom>
          Gallery
        </Typography>
      </StyledBackgroundFooter>
      <Container maxWidth="xl">
        <Gallery
          images={data.allGalleryYaml.edges.map(({ node }) => ({
            id: node.image.id,
            ...node.image.childImageSharp.fluid,
            caption: `${node.title}`,
          }))}
          itemsPerRow={[2, 3]}
        />
      </Container>
    </Layout>
  )
}
