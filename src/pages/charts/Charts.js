import React from 'react';
import {Paper} from '@material-ui/core';
import {contentStyles} from '../../components/Content'

function Charts(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <div> TBD Charts Content </div>
      </Paper>
    </div>
  )
}

export default Charts;