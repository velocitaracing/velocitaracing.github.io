import React from 'react'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';


const Input = (props) => {
  
    const { margin, className, id, startAdornment, name, label, value, error=null, onChange, options} = props;
    return (
        <FormControl className={[className, 'form-control-select'].join(' ')} variant="outlined"
       {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <Select
                // className={className}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                startAdornment= {startAdornment}
                renderValue={(selected) => selected}
                >
                  
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
                    )
                }
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Input




