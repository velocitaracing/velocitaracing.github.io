import React from 'react'

import { CardActionArea } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { height } from "@mui/system";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

// Assets

import Erubber from "../../assets/Partners/erubber.png";
import Smaash from "../../assets/Partners/smaash.png";
import Garrett from "../../assets/Partners/garrett.png";
import Kb from "../../assets/Partners/kb.png";
import SolidWorks from "../../assets/Partners/solidworks.png";
import Sea from "../../assets/Partners/sea.png";
import LionC from "../../assets/Partners/lionc.png";
import BP from "../../assets/Partners/bp.png";
import Anil from "../../assets/Partners/anil.png";
import Henkel from "../../assets/Partners/henkel.png";
import Ansys from "../../assets/Partners/ansys.jpg";
import Gei from "../../assets/Partners/gs.png";

import './style.scss'

const NewSponsors = () => {
    return (
        <div>
           <ThemeProvider theme={theme}>
           <div className="sponsor-card-container">
                <div className="row row-one">
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Gei} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          GE Industries{" "}
                          <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Automobile engineering Services
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Smaash} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Smaaash <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Gaming and entertainment centers
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <img className="sponsor-images" src={Erubber} alt="" />
                    <div className="card-text">
                      <Typography variant="h6" className="card-title">
                        Easter Rubber <OpenInNewRoundedIcon className="arrow" />
                      </Typography>
                      <Typography variant="subtitle2" className="card-subtitle">
                        Hi-tech Rubber Products
                      </Typography>
                    </div>
                  </Card>
                </div>

                <div className="row row-two">
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Garrett} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Gerrett <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Honeywell Turbo Technologies
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={SolidWorks} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Solid Works <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Solid modeling computer-aided design
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Anil} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Anil CNC <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Machinery Parts and Components
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                </div>

                <div className="row row-three">
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={BP} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Bharat Pertroleum{" "}
                          <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Government-owned oil and gas corporation
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={LionC} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Lion Circuits{" "}
                          <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Integrated PCB Manufacturing Platform
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Henkel} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Henkel <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Chemical and consumer goods
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                </div>

                <div className="row row-four">
                  <Card className="sponsor-card add-card action-area">
                    <Fab
                      className="add-button"
                      color="primary"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                    <div className="card-text">
                      <Typography variant="h6" className="card-title">
                        Become a sponsor
                      </Typography>
                      <Typography variant="subtitle2" className="card-subtitle">
                        To join us, know ways to contribute
                      </Typography>
                    </div>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Ansys} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Ansys <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Engineering simulation and 3D design
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Kb} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Knorr-Bremse{" "}
                          <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Braking systems for rail and commercial vehicles
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className="sponsor-card">
                    <CardActionArea className="action-area">
                      <img className="sponsor-images" src={Sea} alt="" />
                      <div className="card-text">
                        <Typography variant="h6" className="card-title">
                          Sea Rock <OpenInNewRoundedIcon className="arrow" />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="card-subtitle"
                        >
                          Engineering Precision Products
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
            </ThemeProvider>
        </div>
    )
}

export default NewSponsors
