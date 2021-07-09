import React, {useState} from 'react';
import {Paper} from '@material-ui/core'
import {contentStyles} from '../../components/Content'
import ProfileForm from './ProfileForm'
import * as profileService from '../../services/userProfile'

function UserProfile(props) {
  const classes = contentStyles()
  const [profile, setProfile] = useState(profileService.getProfile())

  // Helper for merging objects
  const definedProps = (obj) => Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => 
        (k === 'birthYear' && v !== undefined && v !== null && !isNaN(v)) 
        || 
        (k === 'gender' && v !== undefined && v !== null)
    )
  )

  const updateProfile = (newProfile) => {
    // Merge previous profile with updated (partial) new one
    let merged = { 
      ...definedProps(profileService.getProfile()), 
      ...definedProps(newProfile),
    }
    profileService.saveProfile(merged)
    setProfile(merged)
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