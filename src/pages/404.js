import React from "react"

import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Typography variant="h2" align="center">
      Sorry that page doesn't exist!
    </Typography>
  </Layout>
)

export default NotFoundPage
