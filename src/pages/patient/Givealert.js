import React from "react";
import { SideBar } from "../../components";
import { Form } from "react-bootstrap";
import Bg from "../../img/wall3.jpg";
import Bg2 from "../../img/plain.jpg";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { useStyles, useButtnStyles } from "./style";
import { Link } from "react-router-dom";
import FooterComponent from "../Footer";
import { MyBtn } from "../../components";

const GiveAlert = () => {
  const classes = useStyles();
  const SignupSubmit = (e) => {};
  return (
    <div>
      <SideBar SidebarName="patient" image={Bg}>
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
              height: "40vh",
              border: "1px solid",
            }}
          >
            <Form onSubmit={SignupSubmit}>
              <h1 className={classes.text}>Send an Alert</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Alert"
                  variant="outlined"
                  placeholder="Enter your Alert here...."
                  name="pulseRate"
                  margin="normal"
                  type="text"
                  color="secondary"
                  as="textarea"
                  className={classes.textField}
                />
              </div>

              <div>
                <MyBtn
                  style={{ marginRight: "10px" }}
                  Stylings={useButtnStyles}
                  type="submit"
                >
                  Send Alert
                </MyBtn>

                <Link className={classes.link} to="/patient-dashboard">
                  <MyBtn>Back</MyBtn>
                </Link>
              </div>
            </Form>
            <FooterComponent color="black" />
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default GiveAlert;
