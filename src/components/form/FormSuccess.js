import { Button } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";

import './style/style.scss'

const FormSuccess = (props) => {
  return (
    <div className='contact-form'>
      <div id='success-form' className="container">
        <Typography variant='subtitle1'>Thank you for contacting us, we'll get back to you soon!</Typography>
        <Button className='form-reset-button' onClick={props.functionName}>submit another query</Button>
      </div>
    </div>
  );
};

export default FormSuccess;
