import React from 'react'
import PaymentDetailsForm from '../components/form/PaymentDetailsForm'
import { ThemeProvider } from '@mui/material'
import { theme } from '../components/theme'
import './style/checkout/payment.scss'
 
const Payment = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <section id='section-one-payment'>
                <div className="main-container">
                    <div className="payment-form-container">
                        <PaymentDetailsForm />
                    </div>
                    <div className="right"></div>
                </div>
            </section>
            </ThemeProvider>
        </div>
    )
}

export default Payment
