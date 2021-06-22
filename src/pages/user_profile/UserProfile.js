import React from 'react';
import {Paper} from '@material-ui/core'
import {contentStyles} from '../../components/Content'

function UserProfile(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <div> TBD User Profile Content </div>
        <div> Age </div>
        <div> Gender </div>
        <div> Default race elevation </div>
        <div> Metric pace/elevation </div>
        <div> Language </div>
        <div> Color theme </div>
        <div> Save options (Google Drive?)</div>
      </Paper>
    </div>
  )
}

export default UserProfile;