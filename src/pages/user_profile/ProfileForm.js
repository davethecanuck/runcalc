import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Form, useForm } from '../../components/useForm';
import Controls from '../../controls/Controls';

// Validate birth year is at least 1900 and not in the future
function getYearPattern(dt) {
  let y = dt.getFullYear().toString().split('');
  let patternStr = `^(19[0-9][0-9]|20[0-${y[2]-1}]\\d|20${y[2]}[0-${y[3]}])$`;
  return new RegExp(patternStr);
}

const DEFAULT_AGE = 25

const FIELD = {
  'birthYear': {
    pattern: getYearPattern(new Date()),
    help: 'Enter a valid birth year',
    initVal: new Date().getFullYear() - DEFAULT_AGE,
  },
  'gender': {
    pattern: new RegExp(/^(.*)$/),
    help: 'Your gender',
    initVal: 'other',
    items: [
      { 'id': 'male', 'title': 'Male'},
      { 'id': 'female', 'title': 'Female'},
      { 'id': 'other', 'title': 'Other'} 
    ],
  }
}

let initialFValues = {}
Object.keys(FIELD).forEach((key) => {
  initialFValues[key] = FIELD[key].initVal
})

function ProfileForm(props) {
  // Get the initial profile and the updater
  const { updateProfile, profile } = props;

  // Validate is called on each key stroke for the current field 
  // being edited. For onSubmit, ALL of the fields are included
  const validate = (fieldValues=values) => {
    let temp = {...errors};

    Object.keys(fieldValues).forEach((key) => {
      const check = FIELD[key]
      if (check) {
        temp[key] = check.pattern.test(fieldValues[key]) ? '' : check.help;
      }
    })
    setErrors({ ...temp });   // Updates only the set key=value pairs

    // If no errors, set profile based on the current field values
    const isValid = Object.values(temp).every(x => x === "")
    if (isValid) {
      updateProfile({ 
        birthYear: parseInt(fieldValues.birthYear, 10),
        gender: fieldValues.gender, 
      })
    }

    if (fieldValues === values) {
      return isValid
    }
    else {
      return false
    }
  }

  // useForm returns our values and errors objects along with the
  // hooks to set them.
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate)

  const handleSubmit = e => {
    // Prevent full page refresh
    e.preventDefault()
  }

  // useEffect() hook is called after render
  useEffect(() => {
      if (profile != null) {
        setValues({...profile})
      }
    }, [profile]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            label="Birth Year"
            name="birthYear"
            type="number"
            value={values.birthYear}
            error={errors.birthYear}
            onChange={handleInputChange}
          />
          <Controls.RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            items={FIELD.gender.items}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default ProfileForm;