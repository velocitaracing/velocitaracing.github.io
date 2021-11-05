import React from "react";
import { Typography } from "@mui/material";
import { theme } from "../components/theme";
import { ThemeProvider } from "@mui/material";
import "./style/dev.scss";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: '"Ubuntu", sans-serif',
    minHeight: "100vh",
    backgroundColor: "#1a1a1a",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "175px 60px 60px 60px",
    color: "rgb(180,180,180)",
  },

  sectionTitle: {
    color: "rgb(180,180,180)",
    fontWeight: "700",
  },

  underline: {
    height: ".15rem",
    width: "60px",
    backgroundColor: "tomato",
    margin: "5px 0",
  },

  underlineSmall: {
    height: ".12rem",
    width: "30px",
    backgroundColor: "tomato",
    margin: "5px 0",
  },
});

const Development = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-development">
          <div className="main-container">
            <Typography
              variant="h3"
              className={[classes.sectionTitle, "section-heading"].join(" ")}
            >
              Under Maintenance
            </Typography>
            <div className={classes.underline}></div>
            <p className="paragraph-top">
              This page is under maintenance and will be back soon ! <br />
              So, hang around :)
            </p>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Development;
