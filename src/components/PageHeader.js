import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiPaper-root': {
      //backgroundColor: '#fdfdff',
      backgroundColor: '#fdfdff',
    }
  },
  pageHeader: {
    padding: theme.spacing(0),
    display: 'flex',
    marginBottom: theme.spacing(0),
    alignItems: 'center',
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(6),

    // Change opacity of subtitle
    '& .MuiTypography-subtitle2': {    // Inspect to get element name
      opacity: 0.6,
    }
  }
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const {title, icon} = props;

  return (
    <div className={classes.root}>
      <Paper elevation={1} square>
        <div className={classes.pageHeader}>
          <Card className={classes.pageIcon}>
            {icon}
          </Card>
          <div className={classes.pageTitle}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}