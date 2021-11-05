import { Button } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";

import './style/sponsorform.scss'

const FormSponsorSuccess = (props) => {
  return (
    <div className='sponsor-form'>
      <div id='success-sponsor-form' className="container">
        <Typography variant='subtitle1'>Thank you for conatcting. Our team will get back to you as soon as possible.</Typography>
        <Button className='form-reset-button' onClick={props.functionName}>submit another query</Button>
      </div>
    </div>
  );
};

export default FormSponsorSuccess;
