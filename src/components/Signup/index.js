import React from "react";
//Component
import FooterComponent from "../../pages/Footer";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { TextField } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

import { MyBtn } from "../index";
import { useStyles, useButtnStyles } from "./style";

const Signup = (props) => {
  let sw = "";

  if (props.type === "patient") {
    sw = "Nurse";
  } else if (props.type === "nurse") {
    sw = "Patient";
  }

  //Signup patient.
  const classes = useStyles();
  const SignupSubmit = (e) => {
    props.history.push("/patient-dashboard");
  };
  //
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: ` url(${props.bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <div style={{}}>
            <Form
              style={{
                border: "1px solid",
                padding: "20px",
                width: "100%",
                maxWidth: "80ch",
              }}
              onSubmit={SignupSubmit}
            >
              <h1 className={classes.text}>{`${props.FormName} SignUp`}</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  margin="normal"
                  type="text"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  margin="normal"
                  type="text"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  name="userName"
                  margin="normal"
                  type="text"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  style={{
                    marginTop: 20,
                  }}
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                  name="Password"
                  fullwidth
                  type="password"
                  color="secondary"
                  className={classes.textField}
                />
              </div>

              <div>
                <MyBtn Stylings={useButtnStyles} type="submit">
                  {`Signup as ${props.FormName} `}
                </MyBtn>
              </div>

              <p className={classes.p}>
                {`Switch to ${sw}?`}{" "}
                <Link className={classes.link} to={`/${sw}-signup`}>
                  Signup
                </Link>
              </p>
            </Form>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
