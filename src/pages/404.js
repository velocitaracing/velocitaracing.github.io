import React from 'react'
import Typography from '@mui/material/Typography'
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from '../components/theme'
import { makeStyles } from '@mui/styles'

import './style/404.scss'

const useStyles = makeStyles({
    root: {
        fontFamily: '"Ubuntu", sans-serif',
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '175px 60px 60px 60px',
        color: 'rgb(180,180,180)',
    },

    sectionTitle :{
        color: 'rgb(180,180,180)',
        fontWeight: '700',
    },

    underline: {
        height: '.15rem',
        width: '60px',
        backgroundColor: 'tomato',
        margin: '5px 0',
    },

    underlineSmall: {
        height: '.12rem',
        width: '30px',
        backgroundColor: 'tomato',
        margin: '5px 0',
    },


})

const ErrorPage404 = () => {

    const classes = useStyles();
    return (
        <div>
           <section id='section-one-error'>
                <div className="main-container">
                    <Typography variant='h3' className={[classes.sectionTitle, 'section-heading'].join(' ')}>
                        Error 404
                    </Typography>
                    <div className={classes.underline}></div>
                    <p className='paragraph-top'>
                        Sorry, the page you're looking for was not found
                        <br />
                        or might have never existed.    
                    </p>

                    {/* <Typography variant='h6' className={[classes.sectionSubtitle, 'section-subtitle'].join(' ')}>
                        You might be looking for
                    </Typography>
                    <div className={classes.underlineSmall}></div>
                    <ul>
                        <li>Home</li>
                    </ul> */}
                </div>
           </section>
        </div>
    )
}

export default ErrorPage404
