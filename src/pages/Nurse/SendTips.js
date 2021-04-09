import React from "react";
import { NurseSideBar } from "../../components";
import { Form } from "react-bootstrap";
import Bg from "../../img/background.jpg";

import { TextField } from "@material-ui/core";
import { useStyles, useButtnStyles } from "../style";
import { Link } from "react-router-dom";
import FooterComponent from "../Footer";
import { MyBtn } from "../../components";

const SendTip = () => {
  const classes = useStyles();
  const SendTips = (e) => {};
  return (
    <div>
      <NurseSideBar SidebarName="Nurse" image={Bg}>
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
            <Form onSubmit={SendTips}>
              <h1 className={classes.text}>Send Tip</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Tip"
                  variant="outlined"
                  placeholder="Enter Tip here...."
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
                  Send Tip
                </MyBtn>

                <Link className={classes.link} to="/patient-dashboard">
                  <MyBtn>Back</MyBtn>
                </Link>
              </div>
            </Form>
            <FooterComponent color="black" />
          </div>
        </div>
      </NurseSideBar>
    </div>
  );
};

export default SendTip;
