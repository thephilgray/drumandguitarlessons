import React from "react"
import { Formik } from "formik"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

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
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2))
          //     setSubmitting(false)
          //   }, 400)
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
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
            >
              Contact
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  )
}
