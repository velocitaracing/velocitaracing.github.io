import React from 'react'
import { makeStyles } from '@mui/styles'
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const useStyles = makeStyles({
    root: {
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '@media screen and (max-width:768px)': {
            height: '115px',
        },

        '@media screen and (max-width:420px)': {
            height: '110px',
        },
        
        '@media screen and (max-width:390px)': {
            height: '105px',

        },

        '@media screen and (max-width:360px)': {
            height: '100px',

        },
    },

    leftBox: {
        position: 'absolute',
        color: 'var(--offWhiteColor)'
    },

    rightBox: {
        position: 'absolute',
        right: '30px',
    },

    boxHeading: {
        fontWeight: '500',
        letterSpacing: '0.1rem',
        fontSize: '1.2rem',

        '@media screen and (max-width:768px)': {
            fontSize: '1.2rem',
            lineHeight: '1.4rem'
        },

        '@media screen and (max-width:420px)': {
            fontSize: '1.1rem',
            lineHeight: '1.2rem'
        },
        
        '@media screen and (max-width:390px)': {
            fontSize: '1rem',
            lineHeight: '1.2rem'

        },

        '@media screen and (max-width:360px)': {
            fontSize: '.9rem',
            lineHeight: '1.1rem'

        },
    },

    boxUnderline: {
        height: '0.15rem',
        width: '40px',
        margin: '6px 0',
        backgroundColor: 'tomato'
    },

    boxInfo: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        

        '@media screen and (max-width:768px)': {
            fontSize: '.75rem',
        },

        '@media screen and (max-width:420px)': {
            fontSize: '.7rem',
        },
        
        '@media screen and (max-width:390px)': {
            fontSize: '.65rem',

        },

        '@media screen and (max-width:360px)': {
            fontSize: '.65rem',
            lineHeight: '.85rem'

        },
    },

});

export const InfoBox = (props) => {
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div id='info-box' className={[classes.root , 'info-box'].join(' ')}>
                    <div className={[classes.leftBox, 'box-left'].join(' ')}>
                        <h2 className={classes.boxHeading}>{props.title}</h2>
                    <div className={classes.boxUnderline}></div>
                        <p className={[classes.boxInfo, 'paragraph'].join(' ')}>{props.info}</p>
                    </div>
                    <div className={[ props.click, classes.rightBox, 'box-right'].join(' ')}>
                        <ArrowForwardIosRoundedIcon  className='arrow'/>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

