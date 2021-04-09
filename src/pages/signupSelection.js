import React from "react";
//Component
import FooterComponent from "./Footer";
//Load hero heroBackground image
import heroBackground from "../img/wallpaper.jpg";
//Load @material-ui/core package
//Load react-router-dom package
import { Link } from "react-router-dom";
import { useStyles, signupSelection } from "./style";
import { MyBtn } from "../components";
const SignupSelection = () => {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          width: "80",
          height: "99.5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4.5em",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            “Health is not valued till sickness comes”
          </h1>
          {/* Login In */}
          <div className={classes.homeDiv}>
            <Link to="/patient-signup" style={{ textDecoration: "none" }}>
              <MyBtn Stylings={signupSelection} variant="contained">
                Patient Signup
              </MyBtn>
            </Link>
            {""}
            {/* Sign up */}

            <Link to="/nurse-signup" style={{ textDecoration: "none" }}>
              <MyBtn Stylings={signupSelection} variant="contained">
                Nurse Signup
              </MyBtn>
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent color="white" />
    </>
  );
};

export default SignupSelection;
