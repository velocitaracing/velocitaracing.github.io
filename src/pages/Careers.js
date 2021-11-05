import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { InfoBox } from "../components/infoBox/InfoBox";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Robot from "../assets/Home/robot.png";
import { HashLink } from "react-router-hash-link";
import Button from '@mui/material/Button';

import "./style/careers/careers.scss";
import "./style/careers/section-two-careers.scss";
import "./style/careers/section-three-careers.scss";

import {
  TechnicalOptions,
  NonTechnical,
  CreativeRoles,
} from "../data/CareerOptions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Careers = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-careers">
          <div className="main-container">
            <StyledCharacter title={"careers"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Career Options<br />
                at Velocita
              </Typography>
              <span className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </span>
              <InfoBox
                click="no-click"
                title="FSAE"
                info="There are over 600+ combustion class teams and 200+ electric teams over the world! That makes over 25,000 members."
              />
            </div>
            <div className="right">
              {/* <div className="neo-block">
                <ArrowLargeSvg />
              </div> */}
              <img src={Robot} className="turbo" alt="" />
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/careers/#creative-roles"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Creative Roles
                    </Typography>
                    {/* <Typography variant="subtitle2">
                    Click here to apply for the role of Graphic Designer I for
                    current season
                  </Typography> */}
                  </div>

                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/careers/#finance-and-marketing"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Finance and Marketing
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>

              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/careers/#core-technical-roles"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Core Technical
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>

              <InfoBox title='Recruitment drive' info='Register here for recruitment drive 2022' />
            </div>
          </div>
        </section>

        <section id="section-two-careers">
          <div className="main-container">
            <div id="creative-roles" className="role-container">
              <StyledHeading title={"explore -"} />
              <Typography variant="h3" className="section-title">
                Creative Roles
              </Typography>
              <div className="underline"></div>
              {/* <Typography variant="subtitle1" className="section-subtitle">
                Technical roles usually include Research work, Designing and
                Analysis.
              </Typography> */}
              <div className="card-container">
                {CreativeRoles.map((item, index) => (
                  <Card key={item.title} className="career-card">
                    <img src={item.image} alt="" className="card-image" />
                    <div className="card-content">
                      <Typography variant="h6" className="card-title">
                        {item.title}
                      </Typography>
                      <div className="underline-small"></div>
                      <Typography variant="subtitle2" className="card-subtitle">
                        {item.about}
                      </Typography>
                    </div>
                    <Button className='link-button' variant="outlined">apply now</Button>
                  </Card>
                ))}
              </div>
            </div>

            <div id="finance-and-marketing" className="role-container">
              <StyledHeading title={"explore -"} />
              <Typography variant="h3" className="section-title">
                Finace and Marketing
              </Typography>
              <div className="underline"></div>
              {/* <Typography variant="subtitle1" className="section-subtitle">
                Technical roles usually include Research work, Designing and
                Analysis.
              </Typography> */}
              <div className="card-container">
                {NonTechnical.map((item, index) => (
                  <Card key={item.title} className="career-card">
                    <img src={item.image} alt="" className="card-image" />
                    <div className="card-content">
                      <Typography variant="h6" className="card-title">
                        {item.title}
                      </Typography>
                      <div className="underline-small"></div>
                      <Typography variant="subtitle2" className="card-subtitle">
                        {item.about}
                      </Typography>
                    </div>
                    <Button className='link-button' variant="outlined">apply now</Button>
                  </Card>
                ))}
              </div>
            </div>

            <div id="core-technical-roles" className="role-container">
              <StyledHeading title={"explore -"} />
              <Typography variant="h3" className="section-title">
                Core Technical Roles
              </Typography>
              <div className="underline"></div>
              <Typography variant="subtitle1" className="section-subtitle">
                Technical roles usually include Research work, Designing and
                Analysis.
              </Typography>
              <div className="card-container">
                {TechnicalOptions.map((item, index) => (
                  <Card key={item.title} className="career-card">
                    <img src={item.image} alt="" className="card-image" />
                    <div className="card-content">
                      <Typography variant="h6" className="card-title">
                        {item.title}
                      </Typography>
                      <div className="underline-small"></div>
                      <Typography variant="subtitle2" className="card-subtitle">
                        {item.about}
                      </Typography>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section id="section-three-careers">
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                How to <br></br> Apply ?
              </Typography>
              <span className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </span>
            </div>
            <div className="right">
              <img src={Robot} className="turbo" alt="" />

            </div>
          </div>
        </section> */}

      </ThemeProvider>
    </div>
  );
};

export default Careers;
