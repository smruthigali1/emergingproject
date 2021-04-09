import React from "react";
import { SideBar } from "../../components";
import { Form } from "react-bootstrap";
import Bg from "../../img/wall3.jpg";
import Bg2 from "../../img/plain.jpg";
import { TextField } from "@material-ui/core";
import { useStyles, useButtnStyles } from "./style";
import { Link } from "react-router-dom";
import FooterComponent from "../Footer";
import { MyBtn } from "../../components";

const Addinfo = () => {
  const classes = useStyles();
  const SignupSubmit = (e) => {};
  return (
    <div>
      <SideBar SidebarName="patient" image={Bg}>
        <div className="text-center">
          <div>
            <Form
              style={{
                border: "1px solid",
                padding: "20px",
                width: "100%",
                maxWidth: "74ch",
              }}
              onSubmit={SignupSubmit}
            >
              <h1 className={classes.text}>Add info</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Pulse Rate "
                  variant="outlined"
                  name="pulseRate"
                  margin="normal"
                  type="text"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="blood pressure"
                  variant="outlined"
                  name="bloodPressure"
                  margin="normal"
                  type="text"
                  color="secondary"
                  className={classes.textField}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="weight"
                  variant="outlined"
                  name="userName"
                  margin="normal"
                  type="number"
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
                  label="temperature"
                  variant="outlined"
                  name="temperature"
                  fullwidth
                  type="number"
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
                  label="respiratory rate"
                  variant="outlined"
                  name="respiratory rate"
                  fullwidth
                  type="number"
                  color="secondary"
                  className={classes.textField}
                />
              </div>

              <div>
                <MyBtn
                  style={{ marginRight: "10px" }}
                  Stylings={useButtnStyles}
                  type="submit"
                >
                  Add info
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

export default Addinfo;
