import React from "react";
import "./style/newsletter/newsletter.scss";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { InfoBox } from "../components/infoBox/InfoBox";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import TextField from "@mui/material/TextField";
import ContactForm from "../components/form/ContactForm";
import { Button } from "@mui/material";
import Plane from "../assets/Home/plane.png";
import Form from "../components/form/Form";
import FlatEnd from "../components/Svgs/FlatEnd";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import SubscribeForm from "../components/form/SubscribeForm";
import NavbarSecondary from "../components/navbar/NavbarSecondary";

const Newsletter = () => {
  return (
    <div>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-newsletter">
          {/* <div className="top-block"></div> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Newsletter -"} />
              <Typography variant="h1" className="section-title">
                For latest updates
                <br />
                <span className="change-color">Subscribe</span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                Subscribe to the " Ignition Times " and don't miss the latest
                updates. October edition out now ! Subscribe to get your
                copy.
              </Typography>
              <Typography variant="subtitle1" className="info"></Typography>

              <div className="form-container">
                <span className="border-top-left"></span>
                <span className="border-top-right"></span>
                <span className="border-bottom-left"></span>
                <span className="border-bottom-right"></span>
                <SubscribeForm />
              </div>
            </div>

            <div className="right">
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h5" className="card-title">
                    How does subscribing benifit me?
                  </Typography>
                  <div className="underline-small"></div>
                  <Typography
                    variant="subtitle1"
                    className="card-info"
                  ></Typography>
                  <ul>
                    <li className="card-info">
                      Get updates on latest research work
                    </li>
                    <li className="card-info">
                      Learn about Technological advances
                    </li>
                    <li className="card-info">
                      Updates on Racing Journey Podcast
                    </li>
                    <li className="card-info">
                      Get exclusive offers on new clothing and accessories
                    </li>
                    <li className="card-info">
                      Updates on Industry talks and workshops
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Newsletter;
