import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import { InfoBox } from "../components/infoBox/InfoBox";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import Partner from "../assets/Home/partner-light.png";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { HashLink } from "react-router-hash-link";
import EndsTop from "../components/Svgs/EndsTop";
import Ends from "../components/Svgs/Ends";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Razorpay from "../assets/Home/razorpay.webp";
import Upi from "../assets/Home/upi.webp";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

import "./style/crowdfunding/crowdfunding.scss";
import { Link } from "react-router-dom";

function createData(name, amount, pay) {
  return { name, amount, pay };
}

const Crowdfunding = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const rows = [
    createData(
      "Twin Cylinder | V2",
      "500.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "Inline 3 | I3",
      "1,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "Inline 4 | I4",
      "1,500.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V6 Engine",
      "3,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V8 Engine",
      "5,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V12 Engine",
      "10,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "Rotary Engine | Open Slab",
      "ANY",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
  ];

  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-crowd">
          <div className="main-container">
            <StyledCharacter title="xx00340" />
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">Crowdfunding</span> <br />
                Season 2021-22
              </Typography>
              {/* <div className="underline"></div> */}
              <Typography variant="h5" className="section-subtitle">
                Help us grow! Every contribution means a lot to us, so we've got
                exciting goodies for every contribution you make.
              </Typography>
              {/* <div className="underline"></div> */}
              {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
              {/* <HashLink className='page-link' smooth to ={'#ways-to-contribute'}> */}
              <InfoBox
                // click="no-click"
                title="Know the Slabs"
                info="Learn about the slabs and payment methods"
              />
              {/* </HashLink> */}
            </div>
            <div className="right">
              <div className="link-block">
                <HashLink smooth className="in-page-link" to={""}>
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Why Velocita ?
                    </Typography>
                    <Typography variant="subtitle2">
                      Learn why fund Velocita Racing and how your support helps
                      us
                    </Typography>
                  </div>

                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
              <div className="link-block">
                <HashLink smooth className="in-page-link" to={""}>
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Request Brochure
                    </Typography>
                    <Typography variant="subtitle2">
                      Get a copy of our sponsorship brochure for season 2021{" "}
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
            </div>
          </div>
        </section>

        <section id="section-two-crowd">
          <div className="main-container">
            <div className="box-data">
              <span>Stats</span>
              {/* <div className="underline-small"></div> */}
            </div>
            <div className="data">
              <Typography variant="h4">
                <span className="text-small">₹ </span> 1000{" "}
                <span className="text-small">Raised</span>
              </Typography>
              <Typography variant="h4">
                100 <span className="text-small">Contributors</span>
              </Typography>
              <Typography variant="h4">
                5 <span className="text-small">Days up</span>
              </Typography>
            </div>
          </div>
        </section>

        <section id="section-three-crowd">
          <EndsTop />
          <div className="main-container">
            <div className="left">
              <div className="header heading">
                <Typography variant="h2" className="section-title">
                  Know the <br /> <span className="change-color">Slabs</span>{" "}
                  <br />
                </Typography>
                {/* <div className="underline"></div> */}
                <Typography variant="h5" className="section-subtitle">
                  Slabs are named based on engine types. They start from INR
                  500. You can also pay any amount by paying through 'Open
                  Slab'. Also, there are exciting goodies associated to each
                  slab.
                </Typography>
              </div>
            </div>
            <div className="right">
              <TableContainer className="paper" component={Paper}>
                <Table className="table" aria-label="simple table">
                  <TableHead className="table-head">
                    <TableRow>
                      <TableCell className="cell">Slab Name</TableCell>
                      <TableCell className="cell" align="right">
                        Amount (INR)
                      </TableCell>
                      <TableCell className="cell" align="right">
                        Checkout
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table-body">
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="cell" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell className="cell" align="right">
                          {row.amount}
                        </TableCell>
                        <TableCell className="cell" align="right">
                          {row.pay}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <Ends />
        </section>

        <section id="section-four-crowd">
          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Every contribution
                <br /> <span className="change-color">Counts</span>
              </Typography>
              <Typography variant="h5" className="section-subtitle">
                Every little contribution you make, brings us a step closer to
                our dream vehicle.
              </Typography>
              <InfoBox
                // click="no-click"
                title="Know the Slabs"
                info="Learn about the slabs and payment methods"
              />
            </div>
            <div className="right">
              <Typography variant="h5" className="section-title">
                Why <span className="change-color">Velocita?</span> <br />
              </Typography>
              <div className="underline-small"></div>
              <Typography variant="subtitle1" className="section-subtitle">
                Over the past decades, there has been substantial headway in the
                automobile industry, automobiles have become an integral part of
                the world’s development. They have become a necessity rather
                than a commodity, and there is always room for more growth.
                Stagnation in the automobile industry will guarantee stagnation
                in every other field or industry. Your support can help us
                create a better future where millions of ingenious ideas can be
                turned into a magnificent reality that can inspire a generation
                of youth. We believe in being the innovator rather than being
                the imitator which drives us to work on our ideas and make them
                a reality that is near perfect. Oursss Vision is to develop a
                well-engineered car that will provide the ultimate driving
                experience with top-notch creativity and innovation which is
                cost-efficient with an advanced manufacturing process and
                modular design.
              </Typography>
            </div>
          </div>
        </section>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="payment-dialogue"
        >
          <DialogTitle id="alert-dialog-title">
            {"Make Payment using"}
          </DialogTitle>
          <DialogContent className="content" id="alert-dialog-description">
            <div className="buttons">
              <Button onClick={handleClickAlert}>
                <img className="payment-image" src={Razorpay} alt="" />
              </Button>
              <Link to = {'/crowdfunding/upi/checkout/'}>
              <Button>
                <img className="payment-image" src={Upi} alt="" />
              </Button>
              </Link>
            </div>
            <div className="text">
              <Typography>What's the difference ?</Typography>
              <Typography variant="subtitle2">
                Paying through UPI, sends money directly to our bank account by
                which we save on transaction charges charged by the payment
                platforms
              </Typography>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Sorry we're not accepting payments through Razorpay due to some
            issues.
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
};

export default Crowdfunding;
