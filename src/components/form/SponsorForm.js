import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Input from './controls/Input'
import TextArea from './controls/TextArea'
import "./style/sponsorform.scss";
import { InputBase } from "@mui/material";
import { Form, useForm } from "./useForm";
import newForm from './useForm'
import SponsorSuccess from './SponsorSuccess'
import CircularProgress from '@mui/material/CircularProgress';
const initialFValues = {
  name: '',
  email: '',
  message: '',
  organisation: '',
  mobile: ''
}


export default function ContactForm() {

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('organisation' in fieldValues)
        temp.organisation = fieldValues.organisation ? "" : "This field is required."
    if ('message' in fieldValues)
        temp.message = fieldValues.message ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (fieldValues.email) && ((/$^|.+@.+..+/).test(fieldValues.email)) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = (fieldValues.mobile) && (fieldValues.mobile.length > 9) ? "" : "Minimum 10 numbers required."
    // if ('departmentId' in fieldValues)
    //     temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
  }

  const {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFValues, true, validate);

  function reRender(){
    setSuccess(false)
  }

  const handleSubmit = e => {

      e.preventDefault()
      console.log(validate())

      if (validate()){

        setLoading(true)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzROmJhurb2cl3aewKw7u8WqHD0JXzs-MXXKOvpUcGAJCUpxnjDe047epwSg-siNqFh/exec'
        const form = document.forms['google-sheet-sponsor']
        
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            // .then(response => )
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .then(response => setLoading(false))
            .then(response => setSuccess(true))
            .catch(error => console.error('Error!', error.message))

          resetForm()
      }
  }


  return (
    <div className='sponsor-form'>
      { success ? <SponsorSuccess functionName={reRender}/> : 
      (loading ? <CircularProgress /> :  
        <Form method='post' name='google-sheet-sponsor' onSubmit={handleSubmit} className='sponsor-form'>
        <FormControl className='form-control'>
          <Input 
           className="text-field"
           id="outlined-basic"
           name="name"
           label="Name"
           variant="outlined"
           margin='normal'
           value={values.name}
           onChange={handleInputChange}
           error={errors.name}
          />
          <Input
            className="text-field"
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            margin='normal'
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
            margin='normal'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Input 
           className="text-field"
           id="outlined-basic"
           name="organisation"
           label="Organisation"
           variant="outlined"
           margin='normal'
           value={values.organisation}
           onChange={handleInputChange}
           error={errors.organisation}
          />
          <TextArea
            className="text-field"
            id=""
            name="message"
            variant='outlined'
            label="Message"
            margin='normal'
            value={values.message}
            onChange={handleInputChange}
            error={errors.message}
          />
          <div className="action">
          <Button size='large' className='reset-button' onClick={resetForm}>Reset</Button>
          <Button size='large' name="submit" className='send-button' type="submit" variant="text">Send <SendRoundedIcon className='arrow' /></Button>
          </div>
          </FormControl>
        </Form>)
        }
    </div>
  );
}
