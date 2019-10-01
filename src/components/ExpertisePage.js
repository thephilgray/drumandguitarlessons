import React from "react"
import { Typography, Container } from "@material-ui/core"
import Layout from "./layout"
import StyledBackgroundSection from "./StyledBackgroundSection"
import SEO from "./seo"
import CTA from "./CTA"

export default function ExpertisePage({ pageContext }) {
  const { title, html } = pageContext
  return (
    <Layout>
      <SEO title={title} />
      <StyledBackgroundSection height="200px">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          {title}
        </Typography>
      </StyledBackgroundSection>
      <Container maxWidth="md">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ fontSize: "1rem" }}
        ></div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <CTA style={{ margin: "0 auto" }} />
        </div>
      </Container>
    </Layout>
  )
}
