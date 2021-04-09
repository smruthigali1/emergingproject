import React from "react";
import { SideBar } from "../../components";
import Bg from "../../img/wall3.jpg";
import { useStyles } from "./style";
import FooterComponent from "../Footer";
import { TipAlert } from "../../components";

const InfoHistory = () => {
  const classes = useStyles();
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
              width: "100%",
              maxWidth: "74ch",
              marginTop: "60px",
            }}
          >
            <div
              style={{
                padding: "20px",
                width: "100%",
                maxWidth: "74ch",
              }}
            ></div>
            <div>
              <TipAlert
                color="success"
                title="blood pressure"
                body="High blood pressure causing head ace"
              />
            </div>
            <div className={classes.alert}>
              <TipAlert
                color="info"
                title="Temperature"
                body="High blood pressure causing head ace"
              />
            </div>
            <div className={classes.alert}>
              <TipAlert
                color="warning"
                title="sugar level "
                body="High temperature  "
              />
            </div>
            <FooterComponent color="black" />
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default InfoHistory;
