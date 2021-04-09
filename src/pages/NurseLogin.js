import React from "react";
//Component
import FooterComponent from "../pages/Footer";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { TextField } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

import { MyBtn } from "../components";
import { useStyles, useButtnStyles } from "./style";

import BackgroundImage from "../img/wallpaper.jpg";
const Login = (props) => {
  //Login patient.
  const classes = useStyles();
  const loginSubmit = (e) => {
    props.history.push("/nurse-dashboard");
  };
  //
  return (
    <>
      <Container
        style={{
          width: "80",
          height: "99.5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "30vw",
              height: "60vh",
              border: "1px solid",
            }}
          >
            <Form onSubmit={loginSubmit}>
              <h1 className={classes.text}>Login</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  margin="normal"
                  type="email"
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
                  Nurse Login
                </MyBtn>
              </div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <MyBtn
                  style={{
                    color: "#0d6efd",
                    padding: "10px 30px",
                    fontSize: "16px",
                    margin: "10px 10px",
                    backgroundColor: "#fff",
                    border: "2px solid #0d6efd",
                  }}
                  variant="contained"
                >
                  CANCEL
                </MyBtn>
              </Link>
              <p className={classes.p}>
                Switch to Patient Login?{" "}
                <Link
                  className={classes.link}
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  Login here.
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

export default Login;
