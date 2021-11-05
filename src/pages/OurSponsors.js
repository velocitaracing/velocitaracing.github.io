import React from "react";
import "./style/sponsors/sponsors.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { InfoBox } from "../components/infoBox/InfoBox";

import Ends from "../components/Svgs/Ends";
import GoldOne from "../assets/Partners/Gold/Gowri-Shankar.webp";
import GoldTwo from "../assets/Partners/Gold/Juno.webp";
import Narkha from "../assets/Partners/narkha.png";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import SilverOne from "../assets/Partners/mipox.png";
import {
  SponsorTitle,
  SponsorPower,
  SponsorDriven,
  SponsorAssociation,
} from "../components/footersponsors/SponsorItems";
import { Button, Card, CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import { typography } from "@mui/system";
import { HashLink } from "react-router-hash-link";


const OurSponsors = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-our-sponsors">
  
          <div className="main-container">
          <StyledCharacter title="xx00340" />
            {/* <div className="neo-block">
              <ArrowLargeSvg />
            </div> */}

            <div className="left">
              <Typography variant="h2" className="section-title">
                Our <span className="change-color">Sponsors</span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                <img className="arrow-multiple" src={ArrowMultiple} alt="" />
                SEASON 2020
              </Typography>

              <Typography variant="subtitle1" className="section-text">
                Much gratitude to all the sponsors for supporting us this season.
                <br /> We had a good year, and more to come!
              </Typography>

            <HashLink className='page-link' smooth to={'#our-sponsors'}>
             <InfoBox
                title="View Sponsors"
                info="View all sponsors for season 2020. One of the best in their domain."
              />
            </HashLink>
            </div>
            <div className="right">
              <Card className="featured-card">
                <CardContent className="featured-card-container">
                  <div className="card-title-box">
                    <Typography className="card-title" variant="h6">
                      Featured Sponsor
                    </Typography>
                    <div className="underline-small"></div>
                  </div>
                  <img className="card-image" src={SilverOne} alt="" />
                  <Button className="button" variant="text">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="sponsor-container">
          <section
            id="our-sponsors"
            className="section-sponsor-details"
          >
            <Ends />

            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Title Sponsor
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                <Card className="sponsor-card-main card-large">
                  {/* <CardActionArea> */}
                    <CardContent className="sponsor-card">
                      <img className="image gold" src={GoldOne} alt="" />
                      <div className="about-sponsor">
                        <Typography
                          className="sponsor-name"
                          variant="subtitle1"
                        >
                          Gauri Shankar
                          <br />
                          Industries
                        </Typography>
                        <div className="underline-small"></div>
                      </div>
                      <Button className="link-button" size="small" variant="text">
                      Learn more
                    </Button>
                    </CardContent>
                  {/* </CardActionArea> */}
                </Card>
                <Card className="sponsor-card-main card-large">
                  {/* <CardActionArea> */}
                    <CardContent className="sponsor-card">
                      <img className="image gold" src={GoldTwo} alt="" />
                      <div className="about-sponsor">
                        <Typography
                          className="sponsor-name"
                          variant="subtitle1"
                        >
                          Juno Equipments
                        </Typography>
                        <div className="underline-small"></div>
                      </div>
                      <Button
                        className="link-button"
                        size="small"
                        variant="text"
                      >
                        Learn more
                      </Button>
                    </CardContent>
                  {/* </CardActionArea> */}
                </Card>
              </div>
            </div>
          </section>

          <section
            id="section-three-our-sponsors"
            className="section-sponsor-details"
          >
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Powered By
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorPower.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                        <span className="border-top-left"></span>
                        <span className="border-top-right"></span>
                        <span className="border-bottom-left"></span>
                        <span className="border-bottom-right"></span>
                        <CardContent className="sponsor-card">
                          <img className="image" src={item.image} alt="" />
                          <div className="about-sponsor">
                            <Typography
                              className="sponsor-name"
                              variant="subtitle1"
                            >
                              {item.title}
                            </Typography>
                            <div className="underline-small"></div>
                          </div>
                          <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                        </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="section-three-our-sponsors"
            className="section-sponsor-details"
          >
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Driven By
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorDriven.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                        <CardContent className="sponsor-card">
                          <img className="image" src={item.image} alt="" />
                          <div className="about-sponsor">
                            <Typography
                              className="sponsor-name"
                              variant="subtitle1"
                            >
                              {item.title}
                            </Typography>
                            <div className="underline-small"></div>
                          </div>
                          <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                        </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="section-four-our-sponsors"
            className="section-sponsor-details"
          >
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  In Association With
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorAssociation.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                        <CardContent className="sponsor-card">
                          <img className="image" src={item.image} alt="" />
                          <div className="about-sponsor">
                            <Typography
                              className="sponsor-name"
                              variant="subtitle1"
                            >
                              {item.title}
                            </Typography>
                            <div className="underline-small"></div>
                          </div>
                          <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                        </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="section-five-our-sponsors"
            className="section-sponsor-details"
          >
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Clothing Partner
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                <Card className="sponsor-card-main">
                  <CardActionArea>
                    <CardContent className="sponsor-card">
                      <img className="image" src={Narkha} alt="" />
                      <div className="about-sponsor">
                        <Typography
                          className="sponsor-name"
                          variant="subtitle1"
                        >
                          Narkha LLC
                        </Typography>
                        <div className="underline-small"></div>
                      </div>
                      {/* <Button className="link-button" size="small" variant="text">
                      Learn more
                    </Button> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default OurSponsors;
