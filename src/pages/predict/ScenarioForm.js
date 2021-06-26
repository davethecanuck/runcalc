import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Form, useForm } from '../../components/useForm';
import Controls from '../../controls/Controls';

// Parsing and validation for the form fields. Regex should match blank
// if value is optional. 
const FIELD = {
  'altitude': {
    pattern: RegExp(/\s*(\d+)\s*$/),
    help: 'Race altitude (ft)',
    initVal: 0,
  }
}

let initialFValues = {}
Object.keys(FIELD).forEach((key) => {
  initialFValues[key] = FIELD[key].initVal
})

function ScenarioForm(props) {
  // Get the initial scenario and the updater
  const { updateScenario, scenario } = props;

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

    // If no errors, set scenario based on the current field values
    const isValid = Object.values(temp).every(x => x === "")
    if (isValid) {
      updateScenario({ 
        altitude: parseInt(fieldValues.altitude) 
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
      if (scenario != null) {
        setValues({...scenario})
      }
    }, [scenario]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={4}>
          <Controls.Input
            label="Altitude"
            name="altitude"
            type="number"
            onChange={handleInputChange}
            value={values.altitude}
            error={errors.altitude}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default ScenarioForm;