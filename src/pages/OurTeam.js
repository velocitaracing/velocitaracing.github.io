import React from "react";
import { theme } from "../components/theme";
import "./style/team/team.scss";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { InfoBox } from "../components/infoBox/InfoBox";
import { Members } from "../components/teamcard/TeamDetails.js";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import EmailIcon from "@mui/icons-material/Email";
import Team from "../components/teamcard/Team";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import TeamImage from "../assets/Home/team.png";
import Ends from '../components/Svgs/Ends'

const OurTeam = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-team">
          <div className="main-container">
            <div className="left">
              <StyledHeading title={"Know -"} />
              <Typography variant="h1">The Team</Typography>

              <Typography variant="subtitle1" className="sub-heading">
                Velocita has a team of excellent engineers who work with
                complete dedication to keep velocita ahead in every aspect!
              </Typography>

              <div className="div-box-two"></div>

              <StyledCharacter title={"xx00xx"} />
              <InfoBox
                click="no-click"
                title="Recruitment News"
                info="35 New Joinees from the recent recruitment drive"
              />

              {/* <div className="neo-block">
                <ArrowLargeSvg />
              </div> */}
            </div>
            <div className="right">
            <StyledCharacter title={"xx00xx"} />
              {/* <img src={TeamImage} alt="" className='team-image'/> */}
              <div className="sub-container">
                <div className="link-block">
                  <HashLink
                    smooth
                    to={"/our-team/#section-two-team"}
                    className="in-page-link"
                  >
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Team 2021
                      </Typography>
                      {/* <Typography variant="subtitle1" className="sub-title">
                      Graphic Designer I
                    </Typography> */}
                      <Typography variant="subtitle2">
                        Current Season
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </HashLink>
                </div>

                <div className="link-block">
                  <Link to={"/our-team/2020"} className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Team 2020
                      </Typography>
                      <Typography variant="subtitle2">Last season</Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </Link>
                </div>

                <div className="link-block">
                  <Link to={"/our-team/2019"} className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Previous Seasons
                      </Typography>
                      <Typography variant="subtitle2">
                        Upto season 2015-16
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
           
          </div>

        </section>

        <section id="section-two-team">
        <Ends />
          <div className="main-container">
            <div className="card-container">
              <Team year={"2021"} />
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default OurTeam;
