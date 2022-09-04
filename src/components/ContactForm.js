import React from "react"
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: '800px',
    margin: `1.45rem auto`,
  },
}))

export default function ContactForm() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Send us a message
      </Typography>
      <NetlifyForm
        name='contact'
        action='/contact/success'
        honeypotName='bot-field'
        enableRecaptcha
        onSuccess={(response, context) => {
          console.log('Successfully submitted form.')
          context.formRef.current.reset()
          navigate('/contact/success')
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            <Recaptcha siteKey={process.env.GATSBY_SITE_RECAPTCHA_KEY} invisible />
            {success && <p>Sending....</p>}
            {error && (
              <p>Sorry, we could not reach our servers. Please try again later.</p>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone"
                  type="tel"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div data-netlify-recaptcha="true"></div>
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
          </>
        )}
      </NetlifyForm>
    </Container>
  )
}
