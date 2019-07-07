import React from "react"
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: `1.45rem 0`,
  },
}))

export default function ContactForm() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Send us a message
      </Typography>
      <form
        name="contact"
        action="/contact/success"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              name="email"
              label="Email Address"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone"
              type="tel"
              name="phone"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              rows="4"
              multiline
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          style={{ marginTop: "1em" }}
          color="primary"
          variant="contained"
          type="submit"
          name="submit"
          value="Send"
          size="large"
        >
          Contact
        </Button>
      </form>
    </Container>
  )
}
