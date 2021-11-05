import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";

import { StyledHeading } from '../components/styledHeading/StyledHeading'
import { StyledCharacter } from '../components/styledCharacter/StyledCharacter'


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import "./style/faculty/faculty.scss";

function createData(degree, year, university) {
  return { degree, year, university };
}

const rows = [
  createData("M.Tech", 2007, "IIT, Delhi"),
  createData("B.E.", 2000, "Gulbarga University"),
];

const Faculty = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-faculty">
          <div className="main-container">
          <StyledCharacter title={'xx00xx'} />
            <div className="left">
              <Typography variant="h4" className="section-title">
                Dr. Rajeesh S.
              </Typography>
              <div className="underline"></div>
              <Typography variant="h6" className="section-title">
                Faculty Advisor | Velocita Racing
              </Typography>

              <Typography variant="body1" className="section-info">
                Rajeesh S. is an assistant professor in the{" "}
                {/* <a href="" className='external-link'>
                  Mechanical Engineering Department of RIT.{" "}
                  <OpenInNewRoundedIcon className='arrow'/>{" "}
                </a> */}
                Mechanical Engineering Department of RIT. His areas of interests
                include subjects like IC Engines, Biofuels, CFD, Renewable
                Energy Sources and Fluid Dynamics
              </Typography>

              <div className="education-info">
                <Typography variant="h5" className="section-title">
                  Education Details
                </Typography>
                <div className="underline-small"></div>
                <Typography variant="h6" className="section-title"></Typography>

                <Typography
                  variant="body1"
                  className="section-info"
                ></Typography>

                <TableContainer className="paper" component={Paper}>
                  <Table className="table" aria-label="simple table">
                    <TableHead className="table-head">
                      <TableRow>
                        <TableCell className="cell">Degree</TableCell>
                        <TableCell className="cell" align="right">
                          Year
                        </TableCell>
                        <TableCell className="cell" align="right">
                          University
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="table-body">
                      {rows.map((row) => (
                        <TableRow
                          key={row.degree}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            className="cell"
                            component="th"
                            scope="row"
                          >
                            {row.degree}
                          </TableCell>
                          <TableCell className="cell" align="right">
                            {row.year}
                          </TableCell>
                          <TableCell className="cell" align="right">
                            {row.university}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </section>

        <section id="section-two-faculty">
          <div className="main-container">
            <Typography variant="h5" className="section-title">
              Research Publication
            </Typography>
            <div className="underline-small"></div>

            <p>
              Paper titled “CFD Analysis of biofuel (CNSL blended with diesel)
              run diesel engine ” published in 2nd International Conference on
              Research and Engineering Science held on 8th &amp; 9th September,
              2016 at MSRIT, Bangalore
            </p>
            <p>
              Paper titled “Influence of Post Heat Treatment Temperatures on
              Wear Properties of MWCNTs Reinforced Epoxy Composites” in American
              Journal of Materials Science 2015, 5(3C): 183-187
            </p>
            <p>
              Paper titled “Experiment based Mathematical Modeling of a CNSL
              Biofuel Run Diesel Engine in TheEnergy and Materials Research
              International Conference (EMR2015), 25-27 February 2015, Madrid
              (Spain)
            </p>
            <p>
              Paper titled “Experimental And Mathematical Analysis Of Bio fuel
              (CNSL Blended With Diesel) Run Diesel Engine” selected for
              publishing in the 2 nd IEEE Conference on Power Engineering and
              Renewable Energy ICPERE 2014 will be held on 09 - 11 December 2014
              at Indonesia, Bali
            </p>
            <p>
              Paper titled “Performance Analysis of Diesel Engine Using Cashew
              Nut Shell Liquid (CNSL) Biodiesel and Cashew Nut Shell Liquid
              (CNSL) blended with ethanol As a Alternative Fuel” published in
              International Conference on Research and Engineering Science held
              on 4th &amp; 5th September, 2014 at MSRIT, Bangalore
            </p>
            <p>
              Paper titled “Performance Analysis of Diesel Engine Using Cashew
              Nut Shell Liquid (CNSL) Biodiesel and Cashew Nut Shell Liquid
              (CNSL) blended with ethanol As a Alternative Fuel” published in
              National Journal of Mechanical Engineering Research &amp;
              Technology of Volume 2, Issue-1, 2014
            </p>
            <p>
              Paper titled “Performance characteristics Analysis of Diesel
              Engine Using Biodiesel derived from Cashew Nut Shell Liquid (CNSL)
              As a Alternative Fuel” published in International Journal on
              RecentAdvent Technologies - IJRAT of Volume 2 Issue 8, 2014
            </p>
            <p>
              Paper titled “ Modular automated workstations – sequential
              controlling by using programmable logic controllers” published in
              International conference on challenges and opportunities in
              Mechanical engineering, Industrial engineering and Management
              studies (ICCOMIM-2012) held on 11th to 13th July 2012 at MSRIT,
              Bangalore
            </p>
            <p>
              Paper titled “Sequential controlling by using programmable logic
              controllers for modular automated workstation” published in
              National conference on Developments and opportunities in civil
              engineering, applied sciences and mechanical engineering
              (DOCAM-2012) held on 18th to 19th May 2012 at East West Institute
              of Technology, Bangalore
            </p>
            <p>
              National paper titled “Generation of power by wind and
              identification of locations in India” on Integration of energy
              from conventional &amp; nonconventional sources held on 7th – 9th
              October 2006 at L.N.C.T, Bhopal.
            </p>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Faculty;
