import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Form, useForm } from '../../components/useForm'
import Controls from '../../controls/Controls'
import * as distanceCalc from '../../calc/distance'
import * as profileService from '../../services/userProfile'
import Race from '../../calc/Race'

// Parsing and validation for the form fields. Regex should match blank
// if value is optional. 
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
  'elevGain': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Elev. gain (ft)',
    initVal: 0,
  },
  'elevLoss': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Elev. loss (positive ft)',
    initVal: 0,
  },
  'age': {
    pattern: RegExp(/^\s*([1-9]\d{0,1})\s*$/),
    help: 'Age on race day',
    initVal: 25,  // Default is updated based on profile
  }
}

// EYE - Could also change useForm() to expect the FIELD format
let initialFValues = {}
Object.keys(FIELD).forEach((key) => {
  initialFValues[key] = FIELD[key].initVal
})

function AddRaceForm(props) {
  const { addOrEdit, recordForEdit, isDesktop } = props;

  // Update initialFValues for age in case the profile was updated 
  const profile = profileService.getProfile()
  initialFValues['age'] = new Date().getFullYear() - profile.birthYear

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
    timeParts.push(parseInt(parsedTime[1], 10));
    timeParts.push(parseInt(parsedTime[2], 10));

    // Optional last part (ss or mm) is in offset 4 of regex
    if (parsedTime[4] != null) {
      timeParts.push(parseInt(parsedTime[4], 10));
    }

    // Finally define the race object
    let race = new Race({
      id: values.id,
      distance: parseInt(values.distance, 10), 
      age: parseInt(values.age, 10), 
      altitude: parseInt(values.altitude, 10), 
      elevGain: parseInt(values.elevGain, 10), 
      elevLoss: parseInt(values.elevLoss, 10), 
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
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Select
            label="Distance"
            name="distance"
            value={values.distance}
            onChange={handleInputChange}
            options={distanceCalc.getSelectOptions()}
            error={errors.distance}
          />
        </Grid>
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Input
            label="Time"
            name="hhmmss"
            onChange={handleInputChange}
            value={values.hhmmss}
            error={errors.hhmmss}
          />
        </Grid>
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Input
            label="Age"
            name="age"
            type="number"
            onChange={handleInputChange}
            value={values.age}
            error={errors.age}
          />
        </Grid>
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Input
            label="Altitude (ft)"
            name="altitude"
            type="number"
            onChange={handleInputChange}
            value={values.altitude}
            error={errors.altitude}
          />
          {/*
          <Controls.Slider
            label="Altitude (ft)"
            name="altitude"
            type="number"
            step={50}
            max={10000}
            orientation="vertical"
            valueLabelDisplay="on"
            onChange={handleInputChange}
            value={values.altitude}
            error={errors.altitude}
          />
          */}
        </Grid>
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Input
            label="Elev. Gain (ft)"
            name="elevGain"
            type="number"
            onChange={handleInputChange}
            value={values.elevGain}
            error={errors.elevGain}
          />
        </Grid>
        <Grid item xs={isDesktop ? 4 : 6}>
          <Controls.Input
            label="Elev. Loss (ft)"
            name="elevLoss"
            type="number"
            onChange={handleInputChange}
            value={values.elevLoss}
            error={errors.elevLoss}
          />
        </Grid>
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
    </Form>
  );
}

export default AddRaceForm;