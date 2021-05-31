import React from 'react';
import {Paper} from '@material-ui/core'
import {contentStyles} from '../../components/Content'

function UserProfile(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <div> TBD User Profile Content </div>
      </Paper>
    </div>
  )
}

export default UserProfile;