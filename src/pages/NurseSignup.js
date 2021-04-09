import React from "react";
import { Signup } from "../components";
import BackgroundImage from "../img/background.jpg";
import { Container } from "react-bootstrap";

const NurseSignup = () => {
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
        <Signup FormName={"Nurse"} type="nurse" bgimage={BackgroundImage} />
      </Container>
    </div>
  );
};

export default NurseSignup;
