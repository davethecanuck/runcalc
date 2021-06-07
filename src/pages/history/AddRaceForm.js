import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Form, useForm } from '../../components/useForm';
import Controls from '../../controls/Controls';
import * as distanceCalc from '../../calc/distance'

// Parsing and validation for the form fields. Regex should match blank
// if value is optional. 
// EYE - can we pass the whole thing to useForm and move validate there?
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
  'time': {
    pattern: RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),
    help: 'hh:mm:ss or hh:mm or mm:ss',
    initVal: '',
  },
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

  const handleSubmit = e => {
    e.preventDefault()

    if (validate()) {
      // EYE - we need to parse the time and update object to save
      // - should generalize parsing using the pattern for each field
      addOrEdit(values, resetForm)
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
            name="time"
            onChange={handleInputChange}
            value={values.time}
            error={errors.time}
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