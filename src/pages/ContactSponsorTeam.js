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
import "./style/contact/contactsponsor.scss";
import SponsorForm from "../components/form/SponsorForm";
import FlatEnd from "../components/Svgs/FlatEnd";
import NavbarSecondary from "../components/navbar/NavbarSecondary";

const ContactSponsoraTeam = () => {
  return (
    <div>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-contact-sponsor">
          {/* <div className="top-block"></div> */}
          {/* <FlatEnd /> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Sponsor Query -"} />
              <Typography variant="h1" className="section-title">
                Contact our
                <br />
                <span className="change-color">Sponsorship</span> Team
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                Get in touch with our sponsorship team and learn more about
                sponsorship and programs. Send us a message and we'll get back
                to you as soon as possible. You can also send us an email or dm
                through Instagram
              </Typography>
              <Typography variant="subtitle1" className="info">
                Email : velocitaracing.rit@gmail.com
                <br />
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
                <SponsorForm />
              </div>
            </div>
          </div>
        </section>
        <section id="section-two-contact"></section>
      </ThemeProvider>
    </div>
  );
};

export default ContactSponsoraTeam;
