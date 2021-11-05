import React from "react";
import { Link } from "react-router-dom";

import { FooterSocialItems } from "./FooterSocialItems";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterMoreLinks } from "./FooterMoreLinks";

import Button from "@mui/material/Button";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import Logo from "../../assets/Logo/vr-new-logo-white.webp";

import ArrowMultiple from "../../assets/Home/arrow-multiple-new.png";

import "./style/footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="content-top">
          <div className="footer-svg">
            {" "}
            <div className="block">
              <span></span>
            </div>
            <img src={ArrowMultiple} alt="" className="arrow-multiple" />
          </div>

          <div className="box-one">
            <div className="footer-logo">
              <img src={Logo} alt="" />
              <div className="underline"></div>
              <p className="footer-about">
                Velocita Racing is an exclusive Combustion Class Formula Student
                Team from Ramaiah Institute of Technology, Bangalore, Karnataka
                IN
              </p>
            </div>
            <ul className="footer-social-links">
              {FooterSocialItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a target='_blank' href={item.path} className="footer-social-icons">
                      <item.icon className="footer-icon" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="address-box">
              <span className="footer-heading">address</span>
              <div className="underline"></div>
              <p className="address">
                Ramaiah Institute of Technology <br />M S Ramaiah Nagar,
                Mathikere,
                <br /> Bengaluru, Karnataka IN
                <br /> 560054
              </p>
              <a target="_blank" href="https://g.page/velocita-racing?share" className="view-map">
                view on map <OpenInNewRoundedIcon className="link-icon" />
              </a>
            </div>
          </div>
          <div className="box-two">
            <div className="link-box left-box">
              <span className="footer-heading">quick links</span>
              <div className="underline"></div>
              <ul>
                {FooterQuickLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path} className="footer-links">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="link-box">
              <span className="footer-heading">more</span>
              <div className="underline"></div>
              <ul>
                {FooterMoreLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path} className="footer-links">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="box-three">
            <div className="user-action">
              <span className="footer-heading">stay connected</span>
              <div className="underline"></div>
              <Link to={'/connect/newsletter/'}>
              <Button variant="outlined" className="footer-button">
                subscribe
              </Button>
              </Link>
            </div>
            <div className="user-action">
              <span className="footer-heading">support us</span>
              <div className="underline"></div>
              <Link to ={''} >
              <Button variant="outlined" className="footer-button">
                donate now
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-bottom">
          <p className="copy-right">
            COPYRIGHT &copy; 2021 <span className="dark">VELOCITA RACING</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;ALL RIGHTS RESERVED
          </p>
          <p className="terms">
            <Link to={"/privacy"}>PRIVACY</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/terms-of-use"}>TERMS OF USE</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
