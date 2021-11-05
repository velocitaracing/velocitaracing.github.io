import { Button } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";

import './style/subscribeform.scss'

const FormSubscribeSuccess = (props) => {
  return (
    <div className='contact-form'>
      <div id='success-subscribe-form' className="container">
        <Typography variant='subtitle1'>Thank you for subscribing to Ignition times.</Typography>
        <Button className='form-reset-button' onClick={props.functionName}>submit another query</Button>
      </div>
    </div>
  );
};

export default FormSubscribeSuccess;
