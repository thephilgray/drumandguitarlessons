import React, { useState } from "react"
import { Formik } from "formik"
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Loader from "../components/Loader"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: `1.45rem 0`,
  },
}))

export default function ContactForm() {
  const classes = useStyles()
  const [submitted, setSubmitted] = useState(false)

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   console.log(JSON.stringify(values, null, 2))
        // }, 4000)
          setSubmitting(false)
          setSubmitted(true)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,

        /* and other goodies */
      }) => {
        return (
          <Container className={classes.root}>
            <Typography variant="h4" align="center" gutterBottom>
              {submitted && `Got it! Talk to you soon.`}
              {isSubmitting && `Sending...`}
              {!submitted && !isSubmitting && `Send us a message`}
            </Typography>
            {isSubmitting && <Loader />}
            {!isSubmitting && !submitted && (
              <form onSubmit={handleSubmit} data-netlify="true">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Name"
                      type="text"
                      name="name"
                      variant="outlined"
                      required
                      onChange={handleChange}
                      value={values.name}
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
                      onChange={handleChange}
                      value={values.email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Phone"
                      type="tel"
                      name="phone"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.phone}
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
                      onChange={handleChange}
                      value={values.message}
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
                  size="large"
                  disabled={!isValid}
                >
                  Contact
                </Button>
              </form>
            )}
          </Container>
        )
      }}
    </Formik>
  )
}
