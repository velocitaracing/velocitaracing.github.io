import React from 'react'
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';

const Input = (props) => {

    const { margin, className, InputProps, icon, name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            className={className}
            label={label}
            margin={margin}
            name={name}
            value={value}
            onChange={onChange}
            InputProps={InputProps}
            {...(error && {error:true,helperText:error})}
        />
    )
}

export default Input




