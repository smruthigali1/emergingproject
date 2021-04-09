import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    width: "20vw",
    fontWeight: 700,
  },
  link: {
    color: "red",
    marginTop: "40px!important",
    textDecoration: "none",
  },
  text: {
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "white",
  },
  p: {
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "white",
  },
  homeDiv: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    marginRight: 8,
  },
}));
export const useButtnStyles = makeStyles(() => ({
  style: {
    width: "15rem",
    color: "black",
  },
}));
export const HommeButtons = makeStyles(() => ({
  style: {
    marginRight: "1rem",
    width: "10vw",
  },
}));
