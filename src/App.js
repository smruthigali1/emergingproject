import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  NurseLogin,
  PatientSignup,
  SignupSelection,
  NurseSignup,
  PatientDashboard,
  Login,
  NurseDashboard,
} from "./pages";
import Game from "./components/Game/start";

import {
  Addinfo,
  GiveAlert,
  InfoHistory,
  AlertHistroy,
  CheckList,
} from "./pages/patient";
import { AddSigns, SendTips, ShowPrevious } from "./pages/Nurse";
import "./CSS/styles.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* Main */}
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup-selection" component={SignupSelection} exact />
          <Route path="/nurse-login" component={NurseLogin} exact />
          <Route path="/patient-signup" component={PatientSignup} exact />
          <Route path="/nurse-signup" component={NurseSignup} exact />

          {/* Patient Dashboard Router  */}
          <Route path="/patient-dashboard" component={PatientDashboard} exact />
          <Route path="/patient-give-alert" component={GiveAlert} exact />
          <Route path="/patient-add-info" component={Addinfo} exact />
          <Route path="/patient-info-history" component={InfoHistory} exact />
          <Route path="/patient-alert-history" component={AlertHistroy} exact />
          <Route path="/patient-checklist" component={CheckList} exact />
          <Route path="/patient-Game" component={Game} exact />

          {/* Nurse Dashboard Router  */}
          <Route path="/nurse-dashboard" component={NurseDashboard} exact />
          <Route path="/nusre-add-signs" component={AddSigns} exact />
          <Route path="/previous-visits" component={ShowPrevious} exact />
          <Route path="/nurse-send-tips" component={SendTips} exact />
        </Switch>
      </BrowserRouter>
      ,
    </div>
  );
};

export default App;
