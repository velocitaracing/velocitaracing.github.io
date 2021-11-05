import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Logo from '../../assets/Logo/logo-beta.png';

import './style/navsec.scss';
import { cleanup } from '@testing-library/react';

const NavbarSecondary = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [colorChange, setColorchange] = useState(false);
  const [heightChange, setHeightchange] = useState(false);

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 10) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };

//   const changeNavbarHeight = () => {
//     if (window.scrollY >= 80) {
//       setHeightchange(true);
//     } else {
//       setHeightchange(false);
//     }
//   };

  useEffect(() => {
    // if (window.innerWidth > 600) {
    //   var prevScrollpos = window.pageYOffset;
    //   window.onscroll = function () {
    //     // var currentScrollPos = window.pageYOffset;
    //     // if (prevScrollpos > currentScrollPos) {
    //     //     document.getElementById("nav").style.top = "0";
    //     // } else {
    //     //     document.getElementById("nav").style.top = "-100px";
    //     // }
    //     //     prevScrollpos = currentScrollPos;
    //   };

    // //   window.addEventListener("scroll", changeNavbarColor);
    // //   window.addEventListener("scroll", changeNavbarHeight);
    // }

    const burger = document.getElementById("burger");
    const navUl = document.getElementById("nav-ul");
    // const body = document.querySelector('body');

    document.onclick = function (e) {
      if (
        e.target.id !== "burger" &&
        e.target.id !== "nav-ul" &&
        (e.target.className !== "sub-nav") &
          (e.target.className !== "nav-link") &
          (e.target.className !== "nav-ul")
      ) {
        navUl.classList.remove("nav-active");
        burger.classList.remove("toggle");
        // body.classList.remove('nav-body-active');
      }
    };

    burger.onclick = function () {
      navUl.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
      // body.classList.toggle('nav-body-active');
    };

  });

  return (
    <div>
      <nav id="secnav" className={colorChange ? "secnavbar colorChange" : "secnavbar"}>
        <NavLink to="/" className="logo">
          <img className="logo-img" src={Logo} alt="velocita racing logo" />
        </NavLink>

        <div id="nav-ul" className="nav-container">
          <ul className="nav-ul">
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className="sub-nav">
                  <span className="nav-link">
                    {item.title}{" "}
                    <ArrowForwardIosRoundedIcon className="nav-arrow" />
                  </span>
                  <ul
                    className={
                      heightChange ? "dropdown" : "dropdown heightChange"
                    }
                  >
                    <span className="sub-nav-heading">{item.heading}</span>
                    <span className="underline"></span>
                    {item.dropdown.map((sub) => (
                      <li key={sub.title}>
                        <NavLink to={sub.path} className="sub-nav-link">
                          <sub.icon className="nav-icon" />
                          <span className="sub-nav-name">
                            <span>
                              {sub.title}{" "}
                              <ArrowForwardIosRoundedIcon className="arrow" />{" "}
                            </span>
                            <span className="sub-nav-info">{sub.info}</span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="burger">
          <div id="burger" className="burger" onClick={handleClick}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSecondary;
