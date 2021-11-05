import { createTheme } from '@mui/material/styles';
import { borderColor } from '@mui/system';

export const theme = createTheme({
 
    overrides: {
        MuiTypography: {
            fontFamily: '"Ubuntu", sans-serif',
        },
        MuiTextField:{
            color: "#fff",
            borderColor: "#fff",
        },
        MuiInputLabel:{
            color: "#fff",
            borderColor: "#fff",
        },

        MuiInputBase:{
            color: "#fff",
            borderColor: "#fff",
        }
    },



   
    typography: {

            fontFamily: '"Ubuntu", sans-serif',
            
        h1: {
            fontSize: '4rem',
            fontWeight: 700,

            '@media screen and (max-width:768px)': {
                fontSize: '3.8rem',
            },

            '@media (max-width:420px)': {
                fontSize: '3.6rem',
            },
            
            '@media (max-width:390px)': {
                fontSize: '3.2rem',
            },

            '@media (max-width:360px)': {
                fontSize: '2.8rem',
            },
              
        },

        
        h2: {
            fontSize: '3.8rem',
            fontWeight: 700,

            '@media screen and (max-width:768px)': {
                fontSize: '3.4rem',
            },

            '@media (max-width:420px)': {
                fontSize: '3.2rem',
            },
            
            '@media (max-width:390px)': {
                fontSize: '3.0rem',
            },

            '@media (max-width:360px)': {
                fontSize: '2.8rem',
            },
              
        },


        
        h3: {
            fontSize: '2.8rem',
            fontWeight: 700,

            '@media screen and (max-width:768px)': {
                fontSize: '2.4rem',
            },

            '@media (max-width:420px)': {
                fontSize: '2.2rem',
            },
            
            '@media (max-width:390px)': {
                fontSize: '2rem',
            },

            '@media (max-width:360px)': {
                fontSize: '1.8rem',
            },
              
        },

        h6: {
            fontSize: '1.1rem',
            lineHeight: 1.5,

            '@media (max-width:360px)': {
                fontSize: '.9rem',
            },
              
        },

        subtitle1: {
            fontSize: '1rem',
            lineHeight: '1.4rem',

            '@media screen and (max-width:768px)': {
                fontSize: '1.1rem',
                lineHeight: '1.4rem'
            },

            '@media (max-width:420px)': {
                fontSize: '1rem',
                lineHeight: '1.3rem'
            },
            
            '@media (max-width:390px)': {
                fontSize: '.9rem',
                lineHeight: '1.2rem'

            },

            '@media (max-width:360px)': {
                fontSize: '.8rem',
                lineHeight: '1.1rem'

            },
               
        },

        subtitle2: {
            fontSize: '.8rem',
            lineHeight: '1.2rem',

            '@media screen and (max-width:768px)': {
                fontSize: '.8rem',
                lineHeight: '1.2rem'
            },

            '@media (max-width:420px)': {
                fontSize: '.7rem',
                lineHeight: '1rem'
            },
            
            '@media (max-width:390px)': {
                fontSize: '.7rem',
                lineHeight: '1rem'

            },

            '@media (max-width:360px)': {
                fontSize: '.7rem',
                lineHeight: '1rem'

            },
               
        },

        body1: {
            fontSize: '1rem',
            lineHeight: '1.8rem',

            '@media screen and (max-width:768px)': {
                fontSize: '1rem',
                lineHeight: '1.4rem'
            },

            '@media (max-width:420px)': {
                fontSize: '.95rem',
                lineHeight: '1.6rem'
            },
            
            '@media (max-width:390px)': {
                fontSize: '.85rem',
                lineHeight: '1.4rem'

            },

            '@media (max-width:360px)': {
                fontSize: '.85rem',
                lineHeight: '1.4rem'

            },

        }


    },
})