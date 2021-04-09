import React from "react";
import { NurseSideBar } from "../components";
import Bg from "../img/background.jpg";

const NurseDashboard = () => {
  return (
    <div>
      <NurseSideBar SidebarName="nurse" image={Bg}></NurseSideBar>
    </div>
  );
};

export default NurseDashboard;
