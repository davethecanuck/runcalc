import React from 'react';
import {Paper} from '@material-ui/core';
import {contentStyles} from '../../components/Content'

function TargetRaces(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <div> TBD Predict Content </div>
      </Paper>
    </div>
  )
}

export default TargetRaces;