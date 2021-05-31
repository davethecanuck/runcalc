import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5)
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main,
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main,
    }
  },
}))

function ActionButton(props) {
  const {color, children, onClick} = props
  const classes = useStyles()

  // color is either 'primary' or 'secondary' (passed in from user)
  // so the classes resolves to the CSS rule above for the given color.
  // We could extend the css to include any other colors (e.g. tertiary)
  // we want.
  return (
    <Button
      onClick={onClick}
      className={`${classes.root} ${classes[color]}`}
    >
      {children}
    </Button>
  );
}

export default ActionButton;