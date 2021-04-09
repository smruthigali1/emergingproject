import React from "react";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

function InfoAlert({ color, title, body }) {
  return (
    <div>
      <Alert severity={color}>
        <AlertTitle>{title}</AlertTitle>
        {body}
      </Alert>
    </div>
  );
}

export default InfoAlert;
