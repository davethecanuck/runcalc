import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

// This is a generic form that can be used for creating different 
// forms with different initialFValues. We can create consistent handlers
// here and styling
export function useForm(initialFValues, validateOnChange=false, validate) {
  const [ values, setValues ] = useState(initialFValues);
  const [ errors, setErrors ] = useState({});

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({       // Uses the setValues hook from above
      ...values,      // Copies all of the incoming values from the hook above
      [name]:value,   // Sets the value property of the given input name
    })

    if (validateOnChange) {
      validate({[name]:value});
    }
  }

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  }

  return {
    values, 
    setValues, 
    errors,
    setErrors,
    handleInputChange,
    resetForm
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    // Inspect tells us the class for the form control.
    // The & refers to the parent (root)
    '& .MuiFormControl-root': {
      width: '90%',
      margin: theme.spacing(1),
    }
  }
}))

export function Form(props) {
  // props.children contains all of the html children of the <Form> element
  // ...other are all of the other properties we may pass in, such as onSubmit
  const classes = useStyles();
  const {children, ...other} = props;

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}