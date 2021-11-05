import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can I apply for more than one role?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You can apply for for than one role.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do I need to stay back after college hours?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you might have to. Mostly once a week.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>I'm from ISE/CSE, can i apply for Aerodynamics Enginnner?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, anyone from any branch can apply for any role.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I'm from ECE, how hard will it be to work in Braking Systems?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It's not that hard, but you'll have to put in time and effort to understand Braking System. Also you'll get help from seniors working in that department.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How will I get the designing related softwares?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Don't worry, each team member will get a licensed software which will be arranged by the team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I apply for technical as well as non-technical role?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How many tasks will I have to complete if I apply for technical and non technical</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            One from technical and one from non technical  
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
