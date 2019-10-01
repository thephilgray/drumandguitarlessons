import React from "react"
import { Link } from "gatsby"
import { Typography, Button } from "@material-ui/core"

export default function CTA() {
  return (
    <Link to="/contact/" style={{ textDecoration: "none", marginTop: "1rem" }}>
      <Button variant="contained" color="primary" size="large">
        <Typography variant="h5">Enroll</Typography>
      </Button>
    </Link>
  )
}
