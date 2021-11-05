import React from 'react'
import './style/register/register.scss'
import RegisterForm from '../components/form/Registerform'
import { ThemeProvider } from '@mui/material'
import { theme } from '../components/theme'


const Register = () => {


    
    return (
        <div>
            <ThemeProvider theme={theme}>

                <section id='section-one-register'>
                    <div className="main-container">
                        <div className="form-container">
                            <RegisterForm />
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </div>
    )
}

export default Register
