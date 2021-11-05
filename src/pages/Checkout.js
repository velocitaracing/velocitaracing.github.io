import { Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../components/theme'
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { HashLink } from "react-router-hash-link";

import './style/checkout/checkout.scss'

const Checkout = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <section id='section-one-checkout'>
                <div className="main-container">
                    <div className="left">
                        <Typography variant="h2" className="section-title">
                        <span className="change-color">Pay</span> using upi
                        </Typography>
                        <Typography variant="h5" className="section-subtitle">
                           Transfer money directly to our bank account 
                        </Typography>
                    </div>
                    <div className="right">
                        <div className="link-block">
                        <HashLink smooth className="in-page-link" to={"/crowdfunding/upi/checkout/new-payment/"}>
                            <div className="block"></div>
                            <div className="block-info">
                            <Typography variant="h6" className="title">
                                New Payment
                            </Typography>
                            <Typography variant="subtitle2">
                               Make a new payment
                            </Typography>
                            </div>

                            <ArrowForwardIosRoundedIcon className="arrow" />
                        </HashLink>
                        </div>
                        <div className="link-block">
                        <HashLink smooth className="in-page-link" to={"/crowdfunding/upi/verify-payment/"}>
                            <div className="block"></div>
                            <div className="block-info">
                            <Typography variant="h6" className="title">
                                Check Payment Status
                            </Typography>
                            <Typography variant="subtitle2">
                                Check your payment status{" "}
                            </Typography>
                            </div>
                            <ArrowForwardIosRoundedIcon className="arrow" />
                        </HashLink>
                        </div>
                        <div className="link-block">
                        <HashLink smooth className="in-page-link" to={""}>
                            <div className="block"></div>
                            <div className="block-info">
                            <Typography variant="h6" className="title">
                                Contact Us
                            </Typography>
                            <Typography variant="subtitle2">
                             Help / Report Issues{" "}
                            </Typography>
                            </div>
                            <ArrowForwardIosRoundedIcon className="arrow" />
                        </HashLink>
                        </div>
                    </div>
                </div>
            </section>
            </ThemeProvider>
        </div>
    )
}

export default Checkout
