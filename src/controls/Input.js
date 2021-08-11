import { TextField, makeStyles } from '@material-ui/core';
import React from 'react';

export default function Input(props) {
    const {name, label, value, error=null, onChange, ...other} = props;

    // NOTE: Play with horizontal padding 
    const styles = makeStyles(theme => ({
        root: {
            width: '90%',
        },
    }))

    const classes = styles()

    // If error set, return error/helperText object
    return (
        <TextField className={classes.root}
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