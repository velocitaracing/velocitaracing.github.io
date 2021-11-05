import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Input from './controls/Input'
import "./style/subscribeform.scss";
import { Form, useForm } from "./useForm";
import SubscribeSuccessForm from './SubscribeSuccessForm'
import CircularProgress from '@mui/material/CircularProgress';
const initialFValues = {
  email: '',
}


export default function SubscribeForm() {

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('email' in fieldValues)
        temp.email = (fieldValues.email) && ((/$^|.+@.+..+/).test(fieldValues.email)) ? "" : "Email is not valid."
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
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwG7xLajQFQsvUMPAcTUjUWbkrJ116DP6Fnh2XqLqHBWnRA-9IKyTSfrSLsNIj9XVO0hA/exec'
        const form = document.forms['google-sheet-subscribe']
        
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .then(response => setLoading(false))
            .then(response => setSuccess(true))
            .catch(error => console.error('Error!', error.message))

          resetForm()
      }
  }


  return (
    <div className='subscribe-form'>
      { success ? <SubscribeSuccessForm functionName={reRender}/> : 
      (loading ? <CircularProgress /> :  
        <Form method='post' name='google-sheet-subscribe' onSubmit={handleSubmit} className='subscribe-form'>
        <FormControl className='form-control'>
          <Input 
           className="text-field"
           id="outlined-basic"
           name="email"
           label="Email"
           variant="outlined"
          //  margin='normal'
           value={values.email}
           onChange={handleInputChange}
           error={errors.email}
          />
          <Button size='large' name="submit" className='send-button' type="submit" variant="outlined">Send <SendRoundedIcon className='arrow' /></Button>
        </FormControl>
        </Form>)
        }
    </div>
  );
}
