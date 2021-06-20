import React from 'react';
import {Paper} from '@material-ui/core';
import {contentStyles} from '../../components/Content'

function Help(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <div> TBD Help Content </div>
      </Paper>
    </div>
  )
}

export default Help;