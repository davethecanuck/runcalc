import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Form, useForm } from '../../components/useForm'
import Controls from '../../controls/Controls'
import * as distanceCalc from '../../calc/distance'
import * as profileService from '../../services/userProfile'
import Race from '../../calc/Race'

// Parsing and validation for the form fields. Regex should match blank
// if value is optional. 
const profile = profileService.getProfile()
const FIELD = {
  'id': {
    pattern: RegExp(/(.*)/),
    help: '',
    initVal: 0,
  },
  'distance': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Select a distance',
    initVal: '',
  },
  'hhmmss': {
    pattern: RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),
    help: 'hh:mm:ss or hh:mm or mm:ss',
    initVal: '',
  },
  'altitude': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Race altitude (ft)',
    initVal: 0,
  },
  'age': {
    pattern: RegExp(/^\s*([1-9]\d{0,1})\s*$/),
    help: 'Age on race day',
    initVal: new Date().getFullYear() - profile.birthYear,
  }
}

// EYE - Could also change useForm() to expect the FIELD format
let initialFValues = {}
Object.keys(FIELD).forEach((key) => {
  initialFValues[key] = FIELD[key].initVal
})

function AddRaceForm(props) {
  const { addOrEdit, recordForEdit } = props;

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

    if (fieldValues === values) {
      // Ignore initial blank state
      return Object.values(temp).every(x => x === "")
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

  const parseFormToRace = () => {
    let parsedTime = FIELD.hhmmss.pattern.exec(values.hhmmss);
    let timeParts = [];
    timeParts.push(parseInt(parsedTime[1]));
    timeParts.push(parseInt(parsedTime[2]));

    // Optional last part (ss or mm) is in offset 4 of regex
    if (parsedTime[4] != null) {
      timeParts.push(parseInt(parsedTime[4]));
    }

    // Finally define the race object
    let race = new Race({
      id: values.id,
      distance: parseInt(values.distance), 
      altitude: parseInt(values.altitude), 
      age: parseInt(values.age), 
      timeParts: timeParts,
    })
    return race
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (validate()) {
      const race = parseFormToRace()
      addOrEdit(race, resetForm)
    }
  }

  // useEffect() hook is called after render
  useEffect(() => {
      if (recordForEdit != null) {
        setValues({...recordForEdit})
      }
    }, [recordForEdit]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Select
            label="Distance"
            name="distance"
            value={values.distance}
            onChange={handleInputChange}
            options={distanceCalc.getSelectOptions()}
            error={errors.distance}
          />
          <Controls.Input
            label="Finish Time"
            name="hhmmss"
            onChange={handleInputChange}
            value={values.hhmmss}
            error={errors.hhmmss}
          />
          <Controls.Input
            label="Altitude"
            name="altitude"
            type="number"
            onChange={handleInputChange}
            value={values.altitude}
            error={errors.altitude}
          />
          <Controls.Input
            label="Age"
            name="age"
            type="number"
            onChange={handleInputChange}
            value={values.age}
            error={errors.age}
          />
          <div>
            <Controls.Button
              text="Save"
              type="submit"
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default AddRaceForm;