import React, { useState } from 'react'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


const AutocompleteInput = (props) => {

    const { margin, className, name, label, value, error=null, onChange, options} = props;
    

    return (
     <FormControl className={[className, 'form-control-select'].join(' ')} variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <Select
                // className={className}
                multiple
                label={label}
                name={name}
                value={ typeof value === 'string' ? value.split(',') : value}
                onChange={onChange}
                renderValue={(selected) => selected.join(', ')}
                >
                {
                    options.map(
                        item => (<MenuItem key={item.title} value={item.title}>
                          <Checkbox checked={value.indexOf(item.title) > -1} />
                          <ListItemText primary={item.title} />
                        </MenuItem>)
                    )
                }
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default AutocompleteInput




