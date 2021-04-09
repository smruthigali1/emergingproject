import React from "react";
import { NurseSideBar } from "../../components";
import Bg from "../../img/background.jpg";

import { useStyles } from "../style";
import FooterComponent from "../Footer";
import { MyBtn, ShowPreviousVisits } from "../../components";

const ShowPrevious = () => {
  const classes = useStyles();
  const SendTips = (e) => {};
  return (
    <div>
      <NurseSideBar SidebarName="Nurse" image={Bg}>
        <div className="text-center">
          <ShowPreviousVisits />
          <FooterComponent color="black" />
        </div>
      </NurseSideBar>
    </div>
  );
};

export default ShowPrevious;
