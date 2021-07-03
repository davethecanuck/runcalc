import React, {useState} from 'react';
import {Paper} from '@material-ui/core'
import {contentStyles} from '../../components/Content'
import ProfileForm from './ProfileForm'
import * as profileService from '../../services/userProfile'

function UserProfile(props) {
  const classes = contentStyles()
  const [profile, setProfile] = useState(profileService.getProfile())

  const updateProfile = (profile) => {
    profileService.updateProfile(profile)
    setProfile(profile)
  }

  return (
    <div>
      <Paper className={classes.pageContentMain}>
        <ProfileForm 
          updateProfile={updateProfile}
          profile={profile}
        />
      </Paper>
    </div>
  )
}

export default UserProfile;