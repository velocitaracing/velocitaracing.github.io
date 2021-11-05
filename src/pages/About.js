import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";

import "./style/about/section1.scss";

const About = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-about">
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <Typography variant="h3" className="section-title">
              About Us
            </Typography>
            <div className="underline"></div>
            <Typography variant="body1" className="section-info">
              Velocita Racing is the exclusive combustion class formula student
              team of Ramaiah Institute of Technology, Bengaluru, Karnataka.
              This team comprises of 35 passionate and enthusiastic
              undergraduate students from various departments, who are
              continuously working on the development of racing grade vehicles
              for various competitions across India. The racing platforms such
              as Formula Bharat has given our students a chance to explore
              various engineering practices which play a vital role in the
              development of our country. Our finish line is more than just a
              place on the track; our mission is and has always been to
              innovate, to broaden the frontiers of young professionals through
              their creativity, ingenuity, and dexterity.
              <br />
              <br />
              Came to life around a small table at the MSRIT canteen, where a
              group of students from the first year found themselves in the
              midst of fellow automobile enthusiasts. Since then, we’ve come a
              long way. Having designed and fabricated a race kart while we were
              still freshers, we came among the top teams in the country. This
              year, we have divided ourselves into 2 subdivisions. One,consists
              of a team entirely focused on National level competitions. The
              second division consists of a senior team working on PROJECT
              SURGE- a project aimed at designing cars of the future.
              <br />
              <br />
              Having taken its baby steps to becoming a startup, Velocita is on
              the look out for beneficiaries and sponsors for our projects.
            </Typography>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default About;
