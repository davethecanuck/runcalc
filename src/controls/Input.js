import { TextField } from '@material-ui/core';
import React from 'react';

export default function Input(props) {
    const {name, label, value, error=null, onChange, ...other} = props;

    // If error set, return error/helperText object
    return (
        <TextField
            variant="outlined" 
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error:true, helperText:error })}
        />
    );
}