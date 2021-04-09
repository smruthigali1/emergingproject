import React from "react";
import { Signup } from "../components";
import BackgroundImage from "../img/wallpaper.jpg";
import { Container } from "react-bootstrap";
const PatientSignup = () => {
  return (
    <div>
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
        {" "}
        <Signup FormName={"Patient"} type="patient" bgimage={BackgroundImage} />
      </Container>
    </div>
  );
};

export default PatientSignup;
