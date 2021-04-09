import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    border: "1px solid" + theme.palette.primary.main,
    fontSize: "1.15rem",
    borderRadius: "999px",
    padding: "16px 24px",
    marginTop: "30px",
    fontWeight: 600,
    textTransform: "capitalize",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 8px 15px rgba(0,0,0,0.25)",
      transform: "translateY(-2px)",
    },
  },
}));
