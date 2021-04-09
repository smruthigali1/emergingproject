import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { SideBar } from "../components";
import Bg from "../img/wall3.jpg";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  return (
    <>
      <SideBar SidebarName="patient" image={Bg}>
        <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
          <Grid item>
            <CustomCard
              classes={styles}
              title={"have a checkup"}
              subtitle={"Stay monitored!"}
              image={
                "http://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_desktop_2x/public/image/2020/04/Coronavirus_healthcare.jpg"
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles2}
              title={"have Insurance"}
              subtitle={"Time to choose side!"}
              image={
                "https://cornellsun.com/wp-content/uploads/2020/11/Health-Insurance-Graphic-1.png"
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles3}
              title={"check your BP"}
              subtitle={"What are you waiting?"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRveKN2R54x_7_lm-oi3Fw1_AAa_AYA0jkw&usqp=CAU"
              }
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={"Eat healthy "}
              subtitle={"Food is the best medicne?"}
              image={
                "https://laserpiles.com/wp-content/uploads/2019/09/self-help-tips-for-piles.png"
              }
            />
          </Grid>
        </Grid>
      </SideBar>
    </>
  );
});
export default SolidGameCardDemo;
