import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Input from "./controls/Input";
import Select from "./controls/Select";
import AutocompleteInput from "./controls/Autocomplete";
import TextArea from "./controls/TextArea";
import "./style/registerform.scss";
import { Form, useForm } from "./useForm";
import SponsorSuccess from "./SponsorSuccess";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Details",
  "Roles",
  "Submit",
];

const Year = ()=>([
    {
        id: 1,
        title: 'First Year'
    },
    {
        id: 2,
        title: 'Second Year'
    }
])

const Branches = ()=>([
    { id: 1, title: 'Mechanical Engineering' },
    { id: 2, title: 'Electrical and Electronics Engineering' },
    { id: 3, title: 'Industrial Engineering and Management' },
    { id: 4, title: 'Electronics and Communication Engineering' },
    { id: 5, title: 'Information Science and Engineering' },
    { id: 6, title: 'Computer Science and Engineering' },
    { id: 7, title: 'Civil Engineering' },
    { id: 8, title: 'Biotechnology' },
    { id: 9, title: 'Medical Electronics' },
    { id: 10, title: 'Other' },
])

const Aio = () => ([
  { id: 1, title: 'Aerodynamics Engineer' },
  { id: 2, title: 'Chassis Design Engineer' },
  { id: 3, title: 'Electrical Engineer' },
  { id: 4, title: 'Powertrain Engineer' },
  { id: 5, title: 'Steering System Engineer' },
  { id: 6, title: 'Brakes Engineer' },
  { id: 7, title:  "Haven't yet decided",}
])

const AioNonTech = ()=>([
  { id: 1, title:  'Social Media Team',},
  { id: 2, title:  'Content Writer',},
  { id: 3, title:  'Graphic Designer',},
  { id: 4, title: 'Photography/ Videography',},
  { id: 5, title:  'Documenter',},
  { id: 6, title: 'Business Strategist',},
  { id: 7, title:  'Sponsorship Team',},
  { id: 8, title:  "Haven't yet decided",}
])


const initialFValues = {
  name: "",
  lastname: "",
  email: "",
  year: "",
  branch: "",
  mobile: "",
  techrole: "Haven't yet decided",
  nontechrole: "Haven't yet decided",
};

export default function RegisterForm() {
  const FormOne = () => {
    return (
      <div>
        
      </div>
    );
  };

  const FormTwo = () => {
    return (
      <div>
        <div className="basic-details">
          <div className="name-wrapper">
           </div>
        </div>
      </div>
    );
  };

  const FormThree = () => {
    return (
      <div>
        <div className="basic-details">
          <div className="name-wrapper">            
          </div>
        </div>
      </div>
    );
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [submitted, setSubmitted] = React.useState(false);
  const [back, setback] = React.useState(false);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {

    // if(validate()){
        let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // }
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    resetForm();
    setback(false)
    setSubmitted(false)
  };

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("lastname" in fieldValues)
      temp.lastname = fieldValues.lastname
        ? ""
        : "This field is required.";
    if ("year" in fieldValues)
      temp.year = fieldValues.year ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email =
        fieldValues.email && /$^|.+@.+..+/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile && fieldValues.mobile.length > 9
          ? ""
          : "Minimum 10 numbers required.";
    if ("branch" in fieldValues)
        temp.branch = fieldValues.branch ? "" : "This field is required.";
    if ("techrole" in fieldValues)
      temp.techrole = fieldValues.techrole ? "" : "This field is required.";
    if ("nontechrole" in fieldValues)
      temp.nontechrole = fieldValues.nontechrole ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  function reRender() {
    setSuccess(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());

    if (validate()) {
      setLoading(true);
      setback(true)

      const scriptURL = 'https://script.google.com/macros/s/AKfycbwRReZ3YQDLQedV4WEhHKTf72E_YNqvx1wiecqSTqNciTso7Nm6pZAuPtGqBRJ0w3eb/exec'
      const form = document.forms['google-sheet-register']

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})

          .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
          .then(response => setLoading(false))
          .then(response => setSuccess(true))
          .then(response =>  setSubmitted(true))
          // .then(response => setback(true))
          .catch(error => console.error('Error!', error.message))

      
      resetForm();
    }

   
 
  };


  return (
    <div className="register-form">
     
        <Form
          method="post"
          name="google-sheet-register"
          onSubmit={handleSubmit}
          className="register-form"
        >
          <FormControl className="form-control">
            <Box className='form-stepper-wrapper' sx={{ width: "100%" }}>
              <Stepper className='form-stepper' activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel className='step-label' {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Box className='finish-box'>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  
                
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  
                  </Box>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
                    <Box className="step-form-box">
                      {activeStep === 2 ? (
                         loading ? (
                              <div className='circular-progress'><CircularProgress /></div>
                            ) : (
                        <div className='verify-details'>
                        {submitted ? <Typography className='sub-title' variant='subtitle1'>Click finish to end process</Typography> :  <Typography className='sub-title' variant='subtitle1'>Click on submit to send your application</Typography>}
                          <>
                          <Button variant= {submitted ? 'disabled' : 'text'} size='large' name="submit" type='submit' >Submit</Button>
                          </>

                          
                          <div className="verify-wrapper">
                          <div className="basic-details">
                          <div className="name-wrapper">
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="name"
                              label="First Name"
                              variant="outlined"
                              margin="normal"
                              value={values.name}
                              onChange={handleInputChange}
                              error={errors.name}
                            />
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="lastname"
                              label="Last Name"
                              variant="outlined"
                              margin="normal"
                              value={values.lastname}
                              onChange={handleInputChange}
                              error={errors.lastname}
                            />
                          </div>
                          <div className="email-wrapper">
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="email"
                              label="Email"
                              variant="outlined"
                              margin="normal"
                              value={values.email}
                              onChange={handleInputChange}
                              error={errors.email}
                            />
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="mobile"
                              label="Mobile"
                              variant="outlined"
                              margin="normal"
                              value={values.mobile}
                              onChange={handleInputChange}
                              error={errors.mobile}
                            />
                          </div>

                          <div className="study-wrapper">
                            <Select
                              className="text-field"
                              id="outlined-basic"
                              name="year"
                              label="Year of Study"
                              variant="outlined"
                              margin="normal"
                              options= {Year()}
                              value={values.year}
                              onChange={handleInputChange}
                              error={errors.year}
                            />
                            
                            <Select
                              className="text-field ext-long"
                              id="outlined-basic"
                              name="branch"
                              label="Branch"
                              variant="outlined"
                              margin="normal"
                              options ={Branches()}
                              value={values.branch}
                              onChange={handleInputChange}
                              error={errors.branch}
                            />
                          </div>
                        </div>
                          
                          <div className='aoi-select'>
                          <Typography className='sub-title' variant='subtitle1'>Choose your aera(s) of interest or leave it blank if you haven't decided yet</Typography>
                          <div className="aoi-wrapper">
                          <AutocompleteInput
                              className="text-field"
                              id="outlined-basic"
                              name="techrole"
                              label="Techical Roles"
                              variant="outlined"
                              margin="normal"
                              value={values.techrole}
                              onChange={handleInputChange}
                              error={errors.techrole}
                              options={Aio()}
                            />
                           
                           <AutocompleteInput
                              className="text-field"
                              id="outlined-basic"
                              name="nontechrole"
                              label="Non Techical Roles"
                              variant="outlined"
                              margin="normal"
                              value={values.nontechrole}
                              onChange={handleInputChange}
                              error={errors.nontechrole}
                              options={AioNonTech()}
                            />
                          </div>
                            
                        </div>
                          </div>
                            
                        </div>
                   )   ) : activeStep === 1 ? (
                        <div className='aoi-select'>
                          <Typography className='sub-title' variant='subtitle1'>Choose your aera(s) of interest or leave it blank if you haven't decided yet</Typography>
                          <div className="aoi-wrapper">
                          <AutocompleteInput
                              className="text-field"
                              id="outlined-basic"
                              name="techrole"
                              label="Techical Roles"
                              variant="outlined"
                              margin="normal"
                              value={values.techrole}
                              onChange={handleInputChange}
                              error={errors.techrole}
                              options={Aio()}
                            />
                           
                           <AutocompleteInput
                              className="text-field"
                              id="outlined-basic"
                              name="nontechrole"
                              label="Non Techical Roles"
                              variant="outlined"
                              margin="normal"
                              value={values.nontechrole}
                              onChange={handleInputChange}
                              error={errors.nontechrole}
                              options={AioNonTech()}
                            />
                          </div>
                            
                        </div>
                      ) : (
                        <div className="basic-details">
                          <div className="name-wrapper">
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="name"
                              label="First Name"
                              variant="outlined"
                              margin="normal"
                              value={values.name}
                              onChange={handleInputChange}
                              error={errors.name}
                            />
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="lastname"
                              label="Last Name"
                              variant="outlined"
                              margin="normal"
                              value={values.lastname}
                              onChange={handleInputChange}
                              error={errors.lastname}
                            />
                          </div>
                          <div className="email-wrapper">
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="email"
                              label="Email"
                              variant="outlined"
                              margin="normal"
                              value={values.email}
                              onChange={handleInputChange}
                              error={errors.email}
                            />
                            <Input
                              className="text-field"
                              id="outlined-basic"
                              name="mobile"
                              label="Mobile"
                              variant="outlined"
                              margin="normal"
                              value={values.mobile}
                              onChange={handleInputChange}
                              error={errors.mobile}
                            />
                          </div>

                          <div className="study-wrapper">
                            <Select
                              className="text-field"
                              id="outlined-basic"
                              name="year"
                              label="Year of Study"
                              variant="outlined"
                              margin="normal"
                              options= {Year()}
                              value={values.year}
                              onChange={handleInputChange}
                              error={errors.year}
                            />
                            
                            <Select
                              className="text-field ext-long"
                              id="outlined-basic"
                              name="branch"
                              label="Branch"
                              variant="outlined"
                              margin="normal"
                              options ={Branches()}
                              value={values.branch}
                              onChange={handleInputChange}
                              error={errors.branch}
                            />
                          </div>
                        </div>
                      )}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        variant = {back ? 'disabled' : 'text'}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {isStepOptional(activeStep) && (
                        <Button
                          color="inherit"
                          onClick={handleSkip}
                          sx={{ mr: 1 }}
                        >
                          Skip
                        </Button>
                      )}

                      

                      {activeStep === steps.length - 1  ?  <Button onClick={handleNext} variant={submitted ? 'text' : 'disabled'}  >Finish</Button> : <Button onClick={handleNext}>Next</Button>}
 
                    </Box>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </FormControl>
        </Form>
      
    </div>
  );
}
