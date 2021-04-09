import React from "react";
//Component
import FooterComponent from "./Footer";
//Load hero heroBackground image
import heroBackground from "../img/wallpaper.jpg";
//Load @material-ui/core package
//Load react-router-dom package
import { Link } from "react-router-dom";

import { useStyles, HommeButtons } from "./style";
import { MyBtn } from "../components";
const App = () => {
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
            “It is health that is the real wealth”
          </h1>
          {/* Login In */}
          <div className={classes.homeDiv}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MyBtn Stylings={HommeButtons} variant="contained">
                LOGIN
              </MyBtn>
            </Link>
            {""}
            {/* Sign up */}

            <Link to="/signup-selection" style={{ textDecoration: "none" }}>
              <MyBtn Stylings={HommeButtons} variant="contained">
                SIGNUP
              </MyBtn>
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent color="white" />
    </>
  );
};

export default App;
