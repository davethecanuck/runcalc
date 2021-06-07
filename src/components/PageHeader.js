import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import { HelpOutlineRounded } from '@material-ui/icons';
import React from 'react';
import ActionButton from '../controls/ActionButton';

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
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    // Change opacity of subtitle
    '& .MuiTypography-subtitle2': {    // Inspect to get element name
      opacity: 0.6,
    }
  }
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const {title, icon} = props;

  //        <Card className={classes.pageIcon}></Card>
  return (
    <div className={classes.root}>
      <Paper elevation={1} square>
        <div className={classes.pageHeader}>
          <ActionButton>
            <HelpOutlineRounded color="secondary"/>
          </ActionButton>
          <div className={classes.pageTitle}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </div>
          {icon}
        </div>
      </Paper>
    </div>
  );
}