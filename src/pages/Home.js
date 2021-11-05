import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { theme } from "../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// Parallax Component

import Ends from "../components/Svgs/Ends";
import EndsTop from "../components/Svgs/EndsTop";

// Mui Icons
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// import ArrowForwardRoundedIcon from '@mui/icons/ArrowForwardRounded';

// Custom Components
import FooterSponsors from "../components/footersponsors/FooterSponsors";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { InfoBox } from "../components/infoBox/InfoBox";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import NewSponsors from "../components/newsponsors/NewSponsors";
// import TurboSvg from '../components/Svgs/Turbo';

// Scss
import "./style/home/app.scss";

// Assets
import Gear from "../assets/Home/gear.png";
import Car from "../assets/Home/cartwo.png";
import Vrf from "../assets/Home/right.png";
import Turbo from "../assets/Home/turbothree.png";
import Maya from "../assets/Home/three.png";
import RandD from "../assets/Home/four.png";
import Partner from "../assets/Home/partner-light.png";
// import Arrow from '../assets/Home/arrow.png'
import Clothes from "../assets/Home/clothes.png";
import Podcast from "../assets/Home/podcast.webp";
import Wall from "../assets/Home/wall.png";
import Robot from "../assets/Home/robot.png";
// import Aero from '../assets/Home/aero.png'
import Event from "../assets/Home/Val.jpg";
// import Image from '../assets/Home/home-cover.png'
// import ImageNews from '../assets/Home/News-cover.png'
import Apple from "../assets/Podcast/apple.svg";
import Google from "../assets/Podcast/google.svg";
import Beaker from "../assets/Podcast/beaker.png";
import Pocketcast from "../assets/Podcast/pocketcast.webp";
import Radiopublic from "../assets/Podcast/radiopublic.webp";
import Spotify from "../assets/Podcast/spotify.png";

import { height } from "@mui/system";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* Landing Page | Section One */}

        <section id="section-one">
          <div className="main-container">
            <div className="sub-container left">
              <StyledHeading title={"explore -"} />
              <Typography variant="h1">
                Beyond<br></br>Engineering
              </Typography>
              <Typography variant="subtitle1" className="sub-heading">
                Bringing revolutionary changes in several key sectors <br></br>{" "}
                including Climate, Defence, Motorsport and Transportation.
              </Typography>

              <div className="div-box-two"></div>

              <StyledCharacter title={"xx00xx"} />
              <InfoBox
                click="no-click"
                title="What's new?"
                info="Our Crowdfunding campaign has started! Contribute today"
              />
            </div>

            <div className="sub-container right">
              <img src={Vrf} alt="" className="vrf-image" />
              <Link to="/series/F/" className="page-link">
                <InfoBox
                  title="F Series"
                  info="Gets better and better with advanced engineering and technology"
                />
              </Link>
              <StyledCharacter title={"xx00xx"} />
            </div>
          </div>
        </section>

        {/* Home Page - Section Two */}

        <section id="section-two">
          <div className="main-container">
            <div className="block">
              <span></span>
            </div>
            <img src={Gear} className="gear-image-small" alt="" />
            <img src={Gear} className="gear-image-large" alt="" />
            <div className="circle"></div>
            <div className="left">
              <Typography variant="h3" className="heading">
                velocita
                <br /> racing
              </Typography>
              <Typography variant="subtitle1" className="sub-title">
                Official combustion class FSAE team of <br></br>Ramaiah
                Institute of Technology
              </Typography>
            </div>
            <div className="right">
              <div className="side-line"></div>
              <Typography variant="body1" className="section-information">
                Velocita Racing came to life around a small table at the MSRIT
                canteen, where a group of students from the first year found
                themselves in the midst of fellow automobile enthusiasts. Since
                then, we’ve come a long way. Having designed and fabricated a
                race kart while we were still freshers, we came among the top
                teams in the country.
              </Typography>
            </div>
          </div>
        </section>

        {/* Home Page | Section Three */}

        <section id="section-three">
          <div className="main-container">
            <StyledCharacter title={"maya xx vrf2"} />
            <img src={Maya} className="maya" alt="" />

            <div className="left">
              <img src={Car} className="car-image" alt="" />
              <a
                target="_blank"
                href={"https://www.youtube.com/watch?v=IAXib4TBBrE"}
              >
                <InfoBox
                  title="Watch her in action!"
                  info="Watch Maya perform some doughnuts from sponsor unveil 2021"
                />
              </a>
            </div>
            <div className="right">
              <InfoBox
                click="no-click"
                title="MAYA | VRF 2"
                info='"MAYA" or VRF2 is the latest creation of Velocita Racing for the season 2020-21. It&apos;s compact, lighter and faster than ever.'
              />
              {/* <div className="neo-block"><img src={Arrow} alt="" className='arrow-large'/></div> */}
            </div>
          </div>
        </section>

        {/* Home Page | Section Four One */}

        <section id="section-four-one">
          <div className="main-container">
            <StyledCharacter title={"XX - team - XX"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                The Turbocharged <br />
                team
              </Typography>
              <Typography variant="subtitle1" className="section-title">
                Get started with your career at velocita racing. <br></br> Work
                with us as a powertrain engineer
              </Typography>
              <Link to={"/our-team/2021/"} className="sub-info">
                Current Season Team <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              {/* <InfoBox click='no-click'  title='FSAE' info='There are over 600+ combustion class teams and 200+ electric teams over the world! That makes over 25,000 members.' /> */}
            </div>
            <div className="right">
              {/* <div className="block"><span className="side-line"></span></div> */}
              <img src={Turbo} className="turbo" alt="" />

              <InfoBox
                click="no-click"
                title="Did you know?"
                info="Did you know that VRF 2 is Turbocharged?"
              />
            </div>
          </div>
        </section>

        {/* Home Page | Section Four */}

        <section id="section-four">
          <div className="main-container">
            <StyledCharacter title={"XX - careers - XX"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Student Careers <br />
                at Velocita
              </Typography>
              <Link to={"/careers/"} className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
              <InfoBox
                click="no-click"
                title="FSAE"
                info="There are over 600+ combustion class teams and 200+ electric teams over the world! That makes over 25,000 members."
              />
            </div>
            <div className="right">
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              <img src={Robot} className="turbo" alt="" />
              <Link to={"/careers/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Open Position
                  </Typography>
                  {/* <Typography variant="subtitle1" className="sub-title">
                    Graphic Designer I
                  </Typography> */}
                  <Typography variant="subtitle2">
                    Click here to apply for the role of Graphic Designer I for
                    current season
                  </Typography>
                </div>

                <ArrowForwardIosRoundedIcon className="arrow" />
              </Link>
              <Link to={"/careers/recruitment/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Recruitment Drive 2022
                  </Typography>
                  {/* <Typography variant="subtitle1" className="sub-title">
                    Recruitment Drive 2022
                  </Typography> */}
                  <Typography variant="subtitle2">
                    Register here for participating in the recruitment drive for
                    season 2022
                  </Typography>
                </div>
                <ArrowForwardIosRoundedIcon className="arrow" />
              </Link>
              {/* <InfoBox click='no-click' title='Did you know?' info='Did you know that VRF 2 is Turbocharged?' /> */}
            </div>
          </div>
        </section>

        {/* Home Page | Section Five */}

        <section id="home-five">
          <div className="main-container">
            <img src={RandD} className="rnd-image" alt="" />
            <div className="left">
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              <StyledCharacter title={"XX - R & D - XX"} />
              <InfoBox
                click="no-click"
                title="R &amp; D at Velocita"
                info="Introducing R&amp;D segment of Velocita Racing, focused on innovating and finding possibilities and developing new products and processes to create competitive advantage, better environmental performance and enhanced sustainability."
              />
            </div>
            <div className="right">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Research &amp; <br></br>Development
              </Typography>
              <Link to={"/research-and-development/"} className="sub-info">
                Learn More <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>

              <StyledCharacter title={"xx - new - xx"} />
              <Link to={"/research-and-development/"}>
                <InfoBox
                  title="Explore Projects"
                  info="R and D projects at Velocita, find a career possibility with velocita."
                />
              </Link>
            </div>
          </div>

          <Ends className="end-bottom" />
        </section>

        {/* Home Page | Section Six */}

        <section id="section-six">
          <div className="main-container">
            <div className="left">
              <StyledCharacter title={"XX - partner - XX"} />
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"explore-"} />
              <Typography variant="h2" className="section-title">
                Partner programs
              </Typography>
              <Typography variant="subtitle1" className="section-subtitle">
                Programs to enable you grow with us
              </Typography>
              <Link to={"/partner-with-us/"} className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
              <Link to={"/partner-with-us/"}>
                <InfoBox
                  title="Learn more"
                  info="Want to support our projects? Here's how you can."
                />
              </Link>
            </div>
            <div className="right">
              <div className="block"></div>
              <img src={Partner} className="partner-image" alt="" />
            </div>
          </div>
        </section>

        {/* Home Page | Section Seven */}

        <section id="section-seven">
          <div className="main-container">
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"sponsors -"} />
              <Typography variant="h2" className="section-title">
                Join Our Racing <br />
                Community
              </Typography>
              <Typography variant="subtitle1" className="section-subtitle">
                Become a part of Velocita Racing's journey
              </Typography>
              <Link to={"/sponsors/"} className="sub-info">
                View Sponsors <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
            </div>

            <div className="right">
              <NewSponsors />
            </div>
          </div>
        </section>

        {/* Home Page | Section Eight */}

        <section id="section-eight">
          <EndsTop className="end-top" />
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="also explore -" />
              <Typography variant="h2" className="section-title">
                The Official Store
              </Typography>
              <span className="sub-title">Created with life in mind</span>
              <span className="sub-title-info">
                Velocita X Narkha brings you premium quality apparels. The
                awesome designs makes them ideal for casual wear, outdoors, and
                parties. New Summer Collection out ! Shop now on Narkha and
                avail a flat 20% off on our merchandise.
              </span>
              {/* <Button variant='outlined'>VELOCITA50</Button> */}
              <a target='_blank' href='https://narkha.com/collections/velocita-racing/' className="sub-info">
                Shop Now <OpenInNewRoundedIcon className="arrow" />{" "}
              </a>
            </div>
            <div className="right">
              <div className="sub-container">
                <div className="link-block">
                  <a target='_blank' href='https://narkha.com/collections/velocita-racing/' className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="link-title">
                        Shop on Narkha
                      </Typography>
                      <Typography variant='subtitle2' className='sub-title'>
                        Grab your summer collection now!
                      </Typography>
                    </div>

                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </a>
                </div>
                <div className="link-block">
                  <a className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="link-title">
                        Bumper Stickers
                      </Typography>
                      <Typography variant='subtitle2' className='sub-title'>
                        I'll be back in stock soon
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </a>
                </div>

                {/* <div className="link-block">
                  <a className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="link-title">
                        Wall Papers
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </a>
                </div> */}
                {/* <img src={Clothes} className="clothes" alt="" /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Home Page | Section Nine  */}

        <section id="section-nine">
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="explore -" />
              <Typography variant="h3" className="section-title">
                The Racing Journey podcast
              </Typography>
              <Typography variant="h6" className="section-subtitle">
                Hey Automotive enthusiasts!
              </Typography>
              <span className="sub-title-info">
                Racing Journey is a podcast that talks about everything in the
                world of racing and specifically, Formula Student. Here, we
                bring you all the stories, experiences and science that makes
                working in an FSAE or Formula Student team so exciting.
              </span>
              <a target='_blank' href="https://anchor.fm/pranay-ketineni" className="sub-info">
                Listen Now <OpenInNewRoundedIcon className="arrow" />{" "}
              </a>
            </div>
            <div className="right">
              <Card className="podcast-card">
                <iframe
                  className="podcast-spotify"
                  src="https://open.spotify.com/embed/episode/6jZCvz4UCbBXkK4zaFi9jx?theme=0"
                  width=""
                  height="232"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </Card>

              <Card className="link-card">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <a target='_blank' href="https://podcasts.apple.com/us/podcast/racing-journey-formula-student/id1538823215">
                  <Button>
                    <img className="podcast-logo" src={Apple} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zYzkwYmZhMC9wb2RjYXN0L3Jzcw==">
                  <Button>
                    <img className="podcast-logo" src={Google} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://open.spotify.com/show/0QOz83KZmGgEZM395NqANE">
                  <Button>
                    <img className="podcast-logo" src={Spotify} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://www.breaker.audio/racing-journey-formula-student">
                  <Button>
                    <img className="podcast-logo" src={Beaker} alt="" />
                  </Button>
                  </a>
                  {/* <Button>
                    <img className="podcast-logo" src={Pocketcast} alt="" />
                  </Button> */}
                  <a target='_blank' href="https://radiopublic.com/racing-journey-formula-student-WoLjkm">
                  <Button>
                    <img className="podcast-logo" src={Radiopublic} alt="" />
                  </Button>
                  </a>
                </ButtonGroup>
              </Card>
              {/* <img src={Podcast} className="podcast" alt="" /> */}
            </div>
          </div>
        </section>

        {/* Home Page | Section Ten */}

        <section id="section-ten">
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="explore -" />
              <Typography variant="h2" className="section-title">
                Events &amp; More
              </Typography>
              <span className="sub-title">Fun activities every month!</span>
              <span className="sub-title-info">
                Participate in quizes, gaming and more and win exciting prizes!
              </span>
              <Link to={'/events/'} className="sub-info">
                Explore Events <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
            </div>
            <div className="right">
              <Card className="event-box">
                <CardMedia
                  className="event-image"
                  component="img"
                  height="170"
                  image={Event}
                  alt=""
                />
                <div className="event-info">
                  <Typography variant="h5" className="section-title">
                    12th<br></br> JUN
                  </Typography>
                  <Typography variant="subtitle1" className="section-subtitle">
                    The Motorsport Quiz in association with QC Msrit
                  </Typography>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Home;
