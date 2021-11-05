import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";
import Input from "./controls/Input";
import TextArea from "./controls/TextArea";
import ControlledInput from "./controls/ControlledInput";
import Select from "./controls/Select";
import AutocompleteInput from "./controls/Autocomplete";
import RadioGroup from "./controls/Radio";
import "./style/paymentdetails.scss";
import { Form, useForm } from "./useForm";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CodeTwoTone } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

import GPay from "../../assets/Home/googlepay.svg";
import PhonePe from "../../assets/Home/phonepe.svg";
import AmazonPay from "../../assets/Home/amazonpay.svg";
import Paytm from "../../assets/Home/paytm.svg";


import { QRCode } from "react-qr-svg";

const steps = ["Details", "Slab", "Pay", "Finish"];

const address = () => [
  {
    id: 1,
    title: "First address",
  },
  {
    id: 2,
    title: "Second address",
  },
];

const pincodees = () => [
  { id: 1, title: "Mechanical Engineering" },
  { id: 2, title: "Electrical and Electronics Engineering" },
  { id: 3, title: "Industrial Engineering and Management" },
  { id: 4, title: "Electronics and Communication Engineering" },
  { id: 5, title: "Information Science and Engineering" },
  { id: 6, title: "Computer Science and Engineering" },
  { id: 7, title: "Civil Engineering" },
  { id: 8, title: "Biotechnology" },
  { id: 9, title: "Medical Electronics" },
  { id: 10, title: "Other" },
];

const Aio = () => [
  { id: 1, title: "Twin Cylinder | V2" },
  { id: 2, title: "Inline 3 | I3" },
  { id: 3, title: "Inline 4 | I4" },
  { id: 4, title: "V6 Engine" },
  { id: 5, title: "V8 Engine" },
  { id: 6, title: "V12 Engine" },
  // { id: 7, title:  "Rotary Engine | Open Slab"}
];

const AioNonTech = () => [
  { id: 1, title: "Social Media Team" },
  { id: 2, title: "Content Writer" },
  { id: 3, title: "Graphic Designer" },
  { id: 4, title: "Photography/ Videography" },
  { id: 5, title: "Documenter" },
  { id: 6, title: "Business Strategist" },
  { id: 7, title: "Sponsorship Team" },
  { id: 8, title: "Haven't yet decided" },
];

const paymentItems = [
  {
    id: "GPay",
    title: (
      <div className="button" variant="text">
        <img src={GPay} alt="" />
        {/* Google Pay */}
      </div>
    ),
  },
  {
    id: "PhonePe",
    title: (
      <div className="button" variant="text">
        <img src={PhonePe} alt="" />
        {/* Phone Pe */}
      </div>
    ),
    
  },
  {
    id: "AmazonPay",
    title: (
      <div className="button" variant="text">
        <img className='disabled' src={AmazonPay} alt="" />
        {/* Amazon pe */}
      </div>
    ),
    type: true
  },

  // {
  //   id: "Paytm",
  //   title: (
  //     <div className="button" variant="text">
  //       <img  className='disabled' src={Paytm} alt="" />
  //       {/* Amazon pe */}
  //     </div>
  //   ),
  //   type: true
  // },
];

const radioItems = [
  {
    id: "Yes",
    title: "Yes",
  },
  {
    id: "No",
    title: "No",
  },
];

const initialFValues = {
  name: "",
  lastname: "",
  email: "",
  address: "",
  pincode: "",
  mobile: "",
  state: "",
  city: "",
  slabname: "",
  slabamount: "Choose a slab",
  payment: "GPay",
  success: "Yes",
};

export default function PaymentDetailsForm() {
  // const handlePin = (props) => {
  // fetchPinCode(props);
  // }
  // let newpin = '560001'

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
    setback(false);
    setSubmitted(false);
  };

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("lastname" in fieldValues)
      temp.lastname = fieldValues.lastname ? "" : "This field is required.";
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
    if ("slabname" in fieldValues)
      temp.slabname = fieldValues.slabname ? "" : "This field is required.";
    if ("slabamount" in fieldValues)
      temp.slabamount = fieldValues.slabamount ? "" : "Enter valid amount";

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

  const HandleInputChangePinApi = (e) => {
    const { name, value } = e.target;
    const validateOnChange = false;
    let stateIndia = "kar";
    setValues({
      ...values,
      [name]: value,
    });
    // fetchPinCode(value, stateIndia);
    const stateValue = fetchPinCode(value, stateIndia);
    // console.log(a)
    // console.log(stateIndia)

    if (validateOnChange) validate({ [name]: value });
  };

  function CallTwoFunctions(e) {
    handleInputChange(e);
  }

  values.slabamount = getValue(values.slabname);
  // console.log(values.slabamount)

  const [textdisabled, settextdisabled] = useState(true);

  function getValue(valuesRole) {
    // console.log(valuesRole)
    if (valuesRole == "Twin Cylinder | V2") {
      // console.log('1')
      // values.slabamount = '500.00'
      return "500.00";
    } else if (valuesRole == "Inline 3 | I3") {
      // console.log('1')
      values.slabamount = "1,000.00";
      return values.slabamount;
    } else if (valuesRole == "Inline 4 | I4") {
      return "1,500.00";
    } else if (valuesRole == "V6 Engine") {
      return "3,000.00";
    } else if (valuesRole == "V8 Engine") {
      return "5,000.00";
    } else if (valuesRole == "V12 Engine") {
      return "10,000.00";
    } else if (valuesRole == "Rotary Engine | Open Slab") {
      return 0;
    } else {
      return "Choose a slab";
    }
    // else if (values.slabname == 'Powertrain Engineer')
    // values.slabamount = '500'

    // else if (values.slabname == 'Electrical Engineer'){
    //   values.slabamount = '1500'
    //   settextdisabled(false)
    // }
  }

  // console.log(values.payment)
  const qrValue = getQrValue(values.payment);

  function getQrValue(codeValue) {
    const amount = values.slabamount.toString().replace(",", "");

    if (codeValue == "GPay") {
      return (
        "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S&am=" +
        amount +
        "&tn=" +
        values.slabname
      );

    } 

    else if (codeValue == "PhonePe") {
      return (
        "upi://pay?cu=INR&pa=9482701589@ibl&pn=Satvik%20S&am=" +
        amount +
        "&tn=" +
        values.slabname
      );
    }
    
    else return "";
  }

  const Uid = generateUid(values.slabamount)
  
  function generateUid(getAmount) {
    const newAmount = getAmount.toString().replace(",", "").replace(".", "");
    const newName = values.name.toString().replace(" ", "")

    // console.log(newName)
    // console.log(newAmount)

    const uniqueId = "VRCF21" + newAmount + newName
    const newUniqueId = uniqueId.substring(0,16);

    return  newUniqueId.toUpperCase()
  }
  // console.log(values.slabamount)

  const [pinCode, setpinCode] = useState([]);

  const fetchPinCode = async (code, stateInd) => {
    if (code.length == 6) {
      const data = await fetch("https://api.postalpincode.in/pincode/" + code);

      const pinCode = await data.json();
      // console.log(pinCode[0].PostOffice[0].State)
      setpinCode(pinCode);
      stateInd = pinCode[0].PostOffice[0].State;
      // console.log(stateInd)
    }

    console.log(stateInd);

    return stateInd;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());

    if (validate()) {
      setLoading(true);
      setback(true);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyjycQsXs7GLFD8_QmzgyYGiic85LnK9pAI762OxU3bLa6cW9Kbt96qs2HbwLdy3Rj8Wg/exec";
      const form = document.forms["google-sheet-payment"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) =>
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .then((response) => setLoading(false))
        .then((response) => setSuccess(true))
        .then((response) => setSubmitted(true))
        .catch((error) => console.error("Error!", error.message));

      resetForm();
    }
  };

  return (
    <div className="payment-form">
      <Form
        method="post"
        name="google-sheet-payment"
        onSubmit={handleSubmit}
        className="payment-form"
      >
        <FormControl className="form-control">
          <Box className="form-stepper-wrapper" sx={{ width: "100%" }}>
            <Stepper className="form-stepper" activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption"></Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel className="step-label" {...labelProps}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Box className="finish-box">
                  <div className='finish-container'>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      You can check your payment status here: <Button>Check Status</Button> <br />
                      (We usually take 24 hours to process the status)
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                     If payment has failed, try again after sometime. You can also reach out to us at (+91)-000-000-0000
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                     Click on New Payment to start a new payment:  <Button onClick={handleReset}>New Payment</Button>
                    </Typography>

                    <Typography sx={{ mt: 2, mb: 1 }}>
                      Click on Exit to go back to home
                    </Typography>
                  </div>

                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button>Exit</Button>
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
                    {activeStep === 3 ? (
                      loading ? (
                        <div className="circular-progress">
                          <CircularProgress />
                        </div>
                      ) : (
                        <div className="verify-details">
                          {submitted ? (
                            <Typography
                              className="sub-title"
                              variant="subtitle1"
                            >
                              Click finish to end process
                            </Typography>
                          ) : (
                            <div className="submit-container">
                              <div className="submit-payment">
                                <RadioGroup
                                  name="success"
                                  label="Was the Payment successful?"
                                  value={values.success}
                                  onChange={handleInputChange}
                                  items={radioItems}
                                />
                              </div>
                              <Typography
                                className="sub-title"
                                variant="subtitle1"
                              >
                                Click on submit to continue
                              </Typography>
                              <Button
                                variant={submitted ? "disabled" : "contained"}
                                size="large"
                                name="submit"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </div>
                          )}
                          <></>

                          <div className="verify-wrapper">
                            <div className="basic-details">
                              <div className="name-wrapper">
                              <Input
                                  className="text-field"
                                  id="outlined-basic"
                                  name="UID"
                                  label="UID"
                                  variant="outlined"
                                  margin="normal"
                                  value={Uid}
                                  // onChange={handleInputChange}
                                  // error={errors.name}
                                />
                              <Input
                                  className="text-field"
                                  id="outlined-basic"
                                  name="recieved"
                                  label="recieved"
                                  variant="outlined"
                                  margin="normal"
                                  value="Processing"
                                  // onChange={handleInputChange}
                                  // error={errors.name}
                                />
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
                                  className="text-field ext-long"
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
                                <Input
                                  className="text-field ext-long"
                                  id="outlined-basic"
                                  name="address"
                                  label="Address"
                                  variant="outlined"
                                  margin="normal"
                                  options={address()}
                                  value={values.address}
                                  onChange={handleInputChange}
                                  // error={errors.address}
                                />

                                <Input
                                  className="text-field"
                                  id="outlined-basic"
                                  name="pincode"
                                  label="Pincode"
                                  variant="outlined"
                                  margin="normal"
                                  options={pincodees()}
                                  value={values.pincode}
                                  onChange={handleInputChange}
                                  // error={errors.pincode}
                                />
                                <Input
                                  className="text-field"
                                  id="outlined-basic"
                                  name="state"
                                  label="State"
                                  variant="outlined"
                                  margin="normal"
                                  options={pincodees()}
                                  value={values.state}
                                  onChange={handleInputChange}
                                  // error={errors.state}
                                />

                                <Input
                                  className="text-field"
                                  id="outlined-basic"
                                  name="city"
                                  label="City"
                                  variant="outlined"
                                  margin="normal"
                                  options={pincodees()}
                                  value={values.city}
                                  onChange={handleInputChange}
                                  // error={errors.city}
                                />
                              </div>
                            </div>

                            <div className="aoi-select">
                              <Typography
                                className="sub-title"
                                variant="subtitle1"
                              >
                                Choose your aera(s) of interest or leave it
                                blank if you haven't decided yet
                              </Typography>
                              <div className="aoi-wrapper">
                                <Select
                                  className="text-field"
                                  id="outlined-basic"
                                  name="slabname"
                                  label="Slab"
                                  variant="outlined"
                                  margin="normal"
                                  value={values.slabname}
                                  onChange={CallTwoFunctions}
                                  error={errors.slabname}
                                  options={Aio()}
                                />

                                <Input
                                  disabled={textdisabled}
                                  className="text-field"
                                  id="outlined-basic-one"
                                  name="slabamount"
                                  label="Amount"
                                  variant="outlined"
                                  margin="normal"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        $
                                      </InputAdornment>
                                    ),
                                  }}
                                  value={values.slabamount}
                                  // onChange={handleInputChange}
                                  // error={errors.slabamount}
                                  // options={AioNonTech()}
                                />

                                <RadioGroup
                                  name="payment"
                                  label=""
                                  value={values.payment}
                                  onChange={handleInputChange}
                                  items={paymentItems}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    ) : activeStep == 2 ? (
                      <div className="payment-select">
                        <Typography className="sub-title" variant="subtitle1">
                          Make Payment using
                        </Typography>
                        <div className="sub-container">
                          <div className="left">
                            <div className="pay-buttons">
                              <RadioGroup
                                name="payment"
                                label=""
                                value={values.payment}
                                onChange={handleInputChange}
                                items={paymentItems}
                              />

                              {/* <Button variant="text">
                                <img src={PhonePe} alt="" />
                                Phone Pe
                              </Button>
                              <Button variant="text">
                                <img src={AmazonPay} alt="" />
                                Amazon Pay
                              </Button> */}
                            </div>
                          </div>
                          <div className="right">
                            <Typography
                              className="sub-title"
                              variant="subtitle1"
                            >
                              Scan to Pay
                            </Typography>
                            <div className="code-container">
                              <span className="border-top-left"></span>
                              <span className="border-top-right"></span>
                              <span className="border-bottom-left"></span>
                              <span className="border-bottom-right"></span>
                              <QRCode
                                className="qr-code"
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                level="H"
                                // style={{ width: 256 }}
                                value={qrValue}
                              />
                            </div>
                            <a className='mobile-button' href={qrValue}><Button variant='contained'>Pay using {values.payment}</Button></a>
                          </div>
                        </div>
                      </div>
                    ) : activeStep === 1 ? (
                      <div className="aoi-select">
                        <Typography className="sub-title" variant="subtitle1">
                          Choose a Slab
                        </Typography>
                        <div className="aoi-wrapper">
                          <Select
                            className="text-field"
                            id="outlined-basic"
                            name="slabname"
                            label="Slab"
                            variant="outlined"
                            margin="normal"
                            value={values.slabname}
                            onChange={CallTwoFunctions}
                            error={errors.slabname}
                            options={Aio()}
                          />

                          <Input
                            disabled={textdisabled}
                            className="text-field"
                            id="outlined-basic-one"
                            name="slabamount"
                            label="Amount"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            }}
                            value={values.slabamount}
                            // onChange={handleInputChange}
                            // error={errors.slabamount}
                            // options={AioNonTech()}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="basic-details">
                        <Typography variant="h6">Payee Details</Typography>
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
                            className="text-field ext-long"
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

                        <Typography className="margin-top" variant="h6">
                          Payee Address
                        </Typography>

                        <div className="study-wrapper">
                          <Input
                            className="text-field ext-long"
                            id="outlined-basic"
                            name="address"
                            label="Address"
                            variant="outlined"
                            margin="normal"
                            options={address()}
                            value={values.address}
                            onChange={handleInputChange}
                            // error={errors.address}
                          />

                          <Input
                            className="text-field"
                            id="outlined-basic"
                            name="pincode"
                            label="Pincode"
                            variant="outlined"
                            margin="normal"
                            options={pincodees()}
                            value={values.pincode}
                            onChange={handleInputChange}
                            // error={errors.pincode}
                          />
                        </div>

                        <div className="state-wrapper">
                          <Input
                            className="text-field"
                            id="outlined-basic"
                            name="state"
                            label="State"
                            variant="outlined"
                            margin="normal"
                            options={pincodees()}
                            value={values.state}
                            onChange={handleInputChange}
                            // error={errors.state}
                          />

                          <Input
                            className="text-field"
                            id="outlined-basic"
                            name="city"
                            label="City"
                            variant="outlined"
                            margin="normal"
                            options={pincodees()}
                            value={values.city}
                            onChange={handleInputChange}
                            // error={errors.city}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      variant={back ? "disabled" : "text"}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {/* {isStepOptional(activeStep) && (
                        <Button
                          color="inherit"
                          onClick={handleSkip}
                          sx={{ mr: 1 }}
                        >
                          Skip
                        </Button>
                      )} */}

                    {activeStep === steps.length - 1 ? (
                      <Button
                        onClick={handleNext}
                        variant={submitted ? "text" : "disabled"}
                      >
                        Finish
                      </Button>
                    ) : (
                      <Button onClick={handleNext}>Next</Button>
                    )}
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
