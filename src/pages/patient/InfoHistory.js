import React from "react";
import { SideBar } from "../../components";
import Bg from "../../img/wall3.jpg";
import { useStyles } from "./style";
import FooterComponent from "../Footer";
import { InfoHistorytab } from "../../components";

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
              width: "50vw",
              height: "70vh",
            }}
          >
            <div>
              {" "}
              <InfoHistorytab />
            </div>
            <div className={classes.table}>
              <InfoHistorytab />
            </div>
            <FooterComponent color="black" />
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default InfoHistory;
