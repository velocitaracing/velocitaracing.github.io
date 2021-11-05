import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import { HashLink } from "react-router-hash-link";
import "./style/waystosponsor/waystosponsor.scss";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { InfoBox } from "../components/infoBox/InfoBox";
import CardMedia from "@mui/material/CardMedia";
import Ends from "../components/Svgs/Ends";
import EndsTop from "../components/Svgs/EndsTop";
import Fb from "../assets/Home/fb.jpg";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Car from "../assets/Home/car.png";
import Money from "../assets/Home/money.png";
import Parts from "../assets/Home/parts.png";
import Tool from "../assets/Home/arm.png";
import Truck from "../assets/Home/truck.png";
import Contrib from "../assets/Home/contribute.png";
import Team from "../assets/Home/team.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Waystosponsor = () => {
  return (
    <div className="ways-to-sponsor-container">
      <ThemeProvider theme={theme}>
        <section id="ways-to-contribute">
          <StyledCharacter title="xx00340" />
          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Ways to <span className="change-color">Contribute</span>
              </Typography>
              {/* <div className="underline"></div> */}
              <Typography variant="h5" className="section-subtitle">
                Learn about ways to contribute. Feel free to get in touch with our sponsorship
                team anytime.
              </Typography>
              {/* <div className="underline"></div> */}
              {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
              <HashLink
                className="page-link"
                smooth
                to={"#contact-sponsorship-team"}
              >
                <InfoBox
                  // click="no-click"
                  title="Become a Sponsor"
                  info="Get in touch with our sponsorship team today"
                />
              </HashLink>
            </div>
            <div className="right">
              <img src={Contrib} alt="" className="turbo" />
            </div>
          </div>
        </section>

        <section id="" className="section-left">
          <Ends />
          <div className="main-container">
            <StyledCharacter title="Monetary" />
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">Financial</span> Support
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Provide us financial support. This will help us undergo the
                different phases of manufacturing our vehicle.
              </Typography>
            </div>
            <div className="right">
              <img className="crowd content-image" src={Money} alt="" />
            </div>
          </div>
        </section>

        <section id="section-four-ways" className="section-right">
          <div className="main-container">
            <StyledCharacter title="Materials" />
            <div className="left">
              <img className="social content-image" src={Tool} alt="" />
            </div>
            <div className="right">
              <Typography variant="h2" className="section-title">
                <span className="change-color">Materials</span> and
                <br /> Manufacturing
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Provide us necessary parts, tools or the work environment
                required for the manufacturing phase.
              </Typography>
            </div>
          </div>
        </section>

        <section id="section-three-ways" className="section-left">
          {/* <img className='marker' src={Marker} alt="" /> */}
          <div className="main-container">
            <StyledCharacter title="Components" />
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color"> Components </span> and Parts
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Provide us with the necessary materials, components and parts to
                build a formula student car.
              </Typography>
            </div>
            <div className="right">
              <img className="connect content-image" src={Parts} alt="" />
            </div>
          </div>
        </section>

        <section id="section-five-ways" className="section-right">
          <div className="main-container">
            <StyledCharacter title="Logistics" />
            <div className="left">
              <img className="success content-image" src={Truck} alt="" />
            </div>
            <div className="right">
              <Typography variant="h2" className="section-title">
                {" "}
                <span className="change-color">Logistics</span>
                {/* <br />  */} and Transportation
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Aid us by shipping our parts from our manufacturers to us. Also
                help us with transporting our car and equipments to the event
              </Typography>
              <div className="page-link">
                <Typography variant="subtitle1" className="page-link-text">
                  View our Sponsorship Plans{" "}
                  <OpenInNewRoundedIcon className="arrow" />
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <section className="section-six-ways">
          <EndsTop />
          <div id="contact-sponsorship-team" className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Become a
                <br />{" "}
                <span className="change-color">
                  Sponsor
                  <br />
                </span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Together, we can shape the world. Let’s jointly move forward by
                leading innovation, helping to achieve key technical milestones,
                opening pathways to real commercial applications and future
                growth opportunities.
              
              </Typography>
              <Link className='page-link' to={'/partner-with-us/contact-team/'}>
              <InfoBox
                title="Contact our team"
                info="learn about the sponsorship scheme and ways you can contribute"
              />
              </Link>

              {/* <Button className='button' variant='outlined'>Learn more</Button> */}
            </div>
            <div className="right">
            <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Contact Team
                    </Typography>
                    <Typography variant='subtitle2'>Get in touch with our sponsorship team and learn more</Typography>
                  </div>

                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Request Brochure
                    </Typography>
                    <Typography variant='subtitle2'>Get a copy of our sponsorship brochure for season 2021 </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>

              {/* <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Core Technical
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div> */}

            </div>
          </div>
          {/* <Ends /> */}
        </section>

        <section id="section-seven-ways">
          <div className="main-container">
            <StyledCharacter title="xx -R and D- xx" />

            <div className="left">
              <StyledHeading title="New -" />
              <Typography variant="h2" className="section-title">
                Contribute to our
                <br />
                <span className="change-color"> R &amp; D </span>
                <br />
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Learn more about r &amp; d and ways to contribute
              </Typography>

              {/* <InfoBox
                title="Ways to contribute"
                info="Learn about the sponsorship scheme and ways you can contribute"
              /> */}
            </div>
            <div className="right">
              <div className="block"></div>
              <img src={Team} alt="" className="turbo" />
              <Typography variant="h5" className="section-subtitle">
                R and D at Velocita is primarily focused on the next generation
                of the automotive industry. Alongside working on innovative
                ideas and finding possibilities to develop new products and
                processes to create competitive advantage, better environmental
                performance and enhanced sustainability.
              </Typography>

              <Button className="button" variant="outlined">
                Learn more
              </Button>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Waystosponsor;
