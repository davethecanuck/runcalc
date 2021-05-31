import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(1),
    display: 'flex',
    marginBottom: theme.spacing(0),
    alignItems: 'center',
    //justifyContent: 'space-evenly',
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(1),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),

    // Change opacity of subtitle
    '& .MuiTypography-subtitle2': {    // Inspect to get element name
      opacity: 0.6,
    }
  }
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const {title, subtitle, icon, fab} = props;

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          {icon}
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
        {fab}
    </Paper>
  );
}