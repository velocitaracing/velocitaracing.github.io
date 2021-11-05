import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";

import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import "./style/recruit/recruit.scss";
import { InfoBox } from "../components/infoBox/InfoBox";

import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import Ends from "../components/Svgs/Ends";
import EndsTop from "../components/Svgs/EndsTop";

import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { ArrowRight, ArrowRightAltRounded } from "@mui/icons-material";
import SimpleAccordion from "../components/accordion/Accordion";
import CustomizedTimeline from "../components/timeline/Timeline";
import { Link } from "react-router-dom";

const Recruit = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-recruit">
          {/* <div className="nav-cover"></div> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              {/* <StyledHeading title={'Recruitment -'} /> */}
              <Typography variant="h1" className="section-title">
                We<span className="change-color">'</span>re looking
                <br />
                for <span className="change-color">you !</span>
              </Typography>
              <Typography variant="h4" className="section-subtitle">
                <img className="arrow" src={ArrowMultiple} alt="" />
                Annual Recruitment Drive<br></br>
                Season 2022
              </Typography>
              <InfoBox
                click="no-click"
                title="Registrations Open"
                info="You can now submit your applications for season 2022"
              />
            </div>

            <div className="right">
              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    18 <br />
                    JUN
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Tentative start of registrations
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    21 <br />
                    JUN
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Tentative close of registrations
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    25 <br />
                    JUN
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Tentative Orientaion
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Link className='page-link' to={'/careers/recruitment/2022/register/'}>
              <Button className="register-button" variant="outlined">
                Register now <ArrowRightAltRounded className="arrow" />
              </Button>
              </Link>
            </div>
          </div>

        </section>


        <section id="section-two-recruit">
        <Ends />
          <div className="main-container">
            <div className="sec-navbar">
              <ul>
                <HashLink smooth to={'#overview'} className='page-link'>Overview</HashLink>
                <HashLink smooth to={'#orientation'} className='page-link'>Orientation</HashLink>
                <HashLink smooth to={'#registration'} className='page-link'>Registration</HashLink>
                <HashLink smooth to={'#task'} className='page-link'>Task/Test</HashLink>
                <HashLink smooth to={'#interview'} className='page-link'>Interview</HashLink>
                <HashLink smooth to={'#roles'} className='page-link'>roles &amp; responsibilities</HashLink>
                <HashLink smooth to={'#faqs'} className='page-link'>faq's</HashLink>
              </ul>
            </div>

            <div className="wrapper">

            <div id='overview' className="sub-section section-overview">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  Overview
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
                Velocita Racing is an exclusive combustion class Formula Student
                team of Ramaiah Institue of Technology. The team participates in
                Formula Bharat where student teams from around India design,
                build, test, and race a small-scale formula style racing car.
                The cars are judged on a number of criterias. 
                {/* <br /><br /> */}
                
                &nbsp;Velocita has multi-desciplinary students working on the various subsystems.
                <br/><br/>
                Annual recruitment drive is where we find new talents who have the capacity to innovate and take the team further in coming years.
                <br /><br />
                These subsystems are categorised under Technical, Non Technical roles.
                <br />
                Technical Roles: (Roles that will require the learning and application of technical skills and knowledge eg: Aerodynamics Engineer, Electronics Engineer etc.)
                <br/>
                Non Technical Roles: (Roles such as Content Creator, Social Media Handler, UI/UX Designer, Graphic Designer etc.)
                <br/>
                Learn more about roles here.

                <br/><br/>
                <strong>Note: Fresher applicants are not expected to have any prior knowledge for applying. Once you are a part of the team, you will be learning through the journey.</strong>
               
              </Typography>
            </div>

            <div id='registration' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                 Registration
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
              <Button className='apply-button' variant='outlined'>register now</Button>
              </Typography>
            </div>

            <div id='orientation' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  Orientation
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
              The event where we all join in to interact with eachother.
              <br/>
              Get to know more about Velocita, interact with team seniors, ask out qustions and much more.
              <br/><br/>
              After orientation you will have a rough idea how the team works and what you choose to work on.
              <br/>If you can't decide yet, dont worry! You can reach out to us anytime during the recruitment drive.
              {/* <br></br>
              <br></br> */}
              
              </Typography>
            </div>

            <div id='task' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  Task / Test
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
               After the orientaion you will be assigned a task or have to attend a general test or both depending on the number of applicants.
               <br /><br />
               Task : A task may be
                Report writing / Research Work / Design work
                , which you will have to submit in desired format within a given time.
                {/* <br /><br /> */}
                <strong> Task questions will be given from all subsystem. You can pick any one task from the given and submit the same.</strong>
                <br /><br/>
                Test : A test will be MCQ type based consisting of 15 questions separate for technial and non-technical subsystems.
                <br /><br/>
                {/* <strong>Note: Task questions will be given from all the subsystem. You can pick any one task from the given and submit the same.</strong> */}
              
              </Typography>
            </div>

            <div id='interview' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  Interview
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
              We'd like to know you better. You'll have to attend an interaction session/ interview after you're shortlisted.
              Interaction session / Interview will be based on the task / test undertaken.
               
               <br /><br />
               What will we be looking for?
              </Typography>
              <ul>
                <li>Understanding of task given</li>
               <li>Determination to learn</li>
               <li>Creativity</li>
              </ul>
              <Typography className='section-content-non'>
               <br />
               <strong> Date and time of interaction session / interview will be sent via email</strong>
              </Typography>
            </div>

            <div id='roles' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  Roles &amp; Responsibilities
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
                Congratulation and welcome to the team!
                <br/><br/>
                You're now a member of Velocita's family. As a team member we expect you to 
              </Typography>
              <ul>
                {/* <li>Follow instructions given from Team Captain/ Subsystem lead</li> */}
                <li>Actively participate</li>
                <li>Work collaboratively</li>
                <li>Attend team meets regularly</li>
                <li>Attend Learning sessions regularly ( for freshers )</li>
                <li>Complete given taks/research work within time frame</li>
                <li>Report any unethical behaviour/activity to team captain</li>
                <li>Wear safety equipments before working on machines</li>
              </ul>
            </div>

            <div id='faqs' className="sub-section section-orientaion">
              <div className="sticky-header">
                <Typography variant="h3" className="section-title">
                  FAQ's
                </Typography>
                <div className="underline"></div>
              </div>

              <Typography className='section-content'>
              We've answered most of them. Did't find what you're looking for? Get in touch right away!
               <br /><br />
               
              
              </Typography>
            </div>
            <div className="faq-accordion">
            <SimpleAccordion />
            </div>
                
            </div>
          </div>
        </section>

        <section id='section-three-recruit'>
          <EndsTop />
          <div className="main-container">
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Recruit;
