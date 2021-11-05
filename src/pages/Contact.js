import React, { useEffect } from "react";
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
import "./style/contact/contact.scss";
import Form from "../components/form/Form";
import FlatEnd from "../components/Svgs/FlatEnd";
import NavbarSecondary from "../components/navbar/NavbarSecondary";

const Contact = () => {
  return (
    <div>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-contact">
          {/* <div className="top-block"></div> */}
          {/* <FlatEnd /> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Contact -"} />
              <Typography variant="h1" className="section-title">
                Get in Touch
                <br />
                {/* <span className="change-color">Touch</span> */}
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                {/* <img className="arrow" src={ArrowMultiple} alt="" /> */}
                Ask us anything and we'll get back to you as soon as we can. You
                can also send us an email or dm through Instagram
              </Typography>
              <Typography variant="subtitle1" className="info">
                  Email : velocitaracing.rit@gmail.com
                  <br/>
                  Instagram : @officialvelocitaracing
              </Typography>
              {/* <InfoBox
                click="no-click"
                title="Registrations Open"
                info="You can now submit your applications for season 2022"
              /> */}
            </div>
            <div className="right">
              <div className="form-container">
                {/* <img className='plane' src={Plane} alt="" /> */}
                <span className="border-top-left"></span>
                <span className="border-top-right"></span>
                <span className="border-bottom-left"></span>
                <span className="border-bottom-right"></span>
                <Form />
              </div>
            </div>
          </div>
        </section>
        <section id="section-two-contact"></section>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
