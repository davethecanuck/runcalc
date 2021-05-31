import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  }
}))

function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  // Define default values for the button using {value || default}.
  // ...other allows any other property to be passed in (e.g. type="submit")
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{root:classes.root, label:classes.label}}
    >
      {text}
    </MuiButton>
  );
}

export default Button;