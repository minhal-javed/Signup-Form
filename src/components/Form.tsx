import React from "react";
import { Formik, Form,  Field ,FormikProps} from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const usestyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues:FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup: React.FC = () => {
  const classes = usestyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Signup
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            firstName: yup.string().required("This Field is required"),
            lastName: yup.string().required("This Field is required"),
            email: yup.string().email().required("This Field is required"),
            password: yup
              .string()
              .min(6, "Password is too short")
              .max(20, "Password is too long")
              .required("This Field is required"),
          })}
          
          onSubmit={(values) => {
            console.log(values)
            alert("Form Has Been Submitted Successfully");
          }}
        >
          {(props:FormikProps<FormValues>) => {const {errors,touched,handleChange,handleBlur}=props
            return (
            <Form className={classes.form}>
              <Grid container spacing={2}>
               
                <Grid item xs={12} sm={6}>
                  <Field
                    onBlur={handleBlur}
                    component={TextField}
                    
                    autoComplete="fname"
                    fullWidth
                    name="firstName"
                    onChange={handleChange}
                    variant="outlined"
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={errors.firstName && touched.firstName}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                   
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                  component={TextField}
                    autoComplete="lname"
                    onChange={handleChange}
                    name="lastName"
                    variant="outlined"
                    id="lastName"
                    label="Last Name"
                    fullWidth
                    error={errors.lastName && touched.lastName}
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                  component={TextField}
                    fullWidth
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    id="email"
                    onChange={handleChange}
                    label="Email Address"
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                  component={TextField}
                    fullWidth
                    autoComplete="current-password"
                    name="password"
                    variant="outlined"
                    onChange={handleChange}
                    id="password"
                    label="Password"
                    type="password"
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
            )} } 
  
          
        </Formik>
      </div>
    </Container>
  );
};

export default Signup;
