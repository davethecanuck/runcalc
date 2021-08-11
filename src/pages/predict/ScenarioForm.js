import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Form, useForm } from '../../components/useForm'
import Controls from '../../controls/Controls'
import * as scenarioService from '../../services/scenario'

// Initialize the form with the values from storage, or the
// default values we get from the scenario service
const initScenario = scenarioService.getScenario()

const FIELD = {
  'age': {
    pattern: RegExp(/^\s*([1-9]\d{0,1})\s*$/),
    help: 'Age on race day',
    initVal: initScenario.age,
  },
  'altitude': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Race start altitude (ft)',
    initVal: initScenario.altitude,
  }, 
  'elevGain': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Elevation gain (ft)',
    initVal: initScenario.elevGain,
  }, 
  'elevLoss': {
    pattern: RegExp(/^\s*(\d+)\s*$/),
    help: 'Elev. loss (positive ft)',
    initVal: initScenario.elevLoss,
  }, 
}

// Initialize values with stored value if possible
let initialFValues = {}
Object.keys(FIELD).forEach((key) => {
  initialFValues[key] = FIELD[key].initVal
})

function ScenarioForm(props) {
  // Get the initial scenario and the updater
  const { updateScenario, scenario, isDesktop } = props;

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
        age: parseInt(fieldValues.age, 10),
        altitude: parseInt(fieldValues.altitude, 10),
        elevGain: parseInt(fieldValues.elevGain, 10),
        elevLoss: parseInt(fieldValues.elevLoss, 10),
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
        <Grid item xs={isDesktop ? 12 : 6}>
          <Controls.Input
            label="Age"
            name="age"
            type="number"
            onChange={handleInputChange}
            value={values.age}
            error={errors.age}
          />
        </Grid>
        <Grid item xs={isDesktop ? 12 : 6}>
          <Controls.Input
            label="Altitude"
            name="altitude"
            type="number"
            onChange={handleInputChange}
            value={values.altitude}
            error={errors.altitude}
          />
        </Grid>
        <Grid item xs={isDesktop ? 12 : 6}>
          <Controls.Input
            label="Elev. Gain"
            name="elevGain"
            type="number"
            onChange={handleInputChange}
            value={values.elevGain}
            error={errors.elevGain}
          />
        </Grid>
        <Grid item xs={isDesktop ? 12 : 6}>
          <Controls.Input
            label="Elev. Loss"
            name="elevLoss"
            type="number"
            onChange={handleInputChange}
            value={values.elevLoss}
            error={errors.elevLoss}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default ScenarioForm;