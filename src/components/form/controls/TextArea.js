import React from 'react'
import TextField from "@mui/material/TextField";

const TextArea = (props) => {

    const { margin, className, name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            className={className}
            label={label}
            margin={margin}
            multiline
            maxRows={3}
            name={name}
            value={value}
            onChange={onChange}
            
            {...(error && {error:true,helperText:error})}
        />
    )
}

export default TextArea