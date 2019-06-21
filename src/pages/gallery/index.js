import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Gallery from "../../components/GatsbyGallery"

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
      <Gallery
        images={data.allGalleryYaml.edges.map(({ node }) => ({
          id: node.image.id,
          ...node.image.childImageSharp.fluid,
          caption: `${node.title}`,
        }))}
        itemsPerRow={[2, 3]}
      />
    </Layout>
  )
}
