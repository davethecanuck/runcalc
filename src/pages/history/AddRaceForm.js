import { Grid } from '@material-ui/core';
import React from 'react';
import { Form, useForm } from '../../components/useForm';
import Controls from '../../controls/Controls';

// Default intial values for the form
const initialFValues = {
  id: 0,
  time: '',
  distance: '',
}

function AddRaceForm(props) {
  // Validate form fields
  const validate = (fieldValues=values) => {
    let temp = {...errors};

    // Validate time
    if ('time' in fieldValues) {
      temp.time = (/^\s*(\d+):(\d+)(:(\d+)){0,1}\s*$/).test(fieldValues.time) ? "" :
        "Time must be in hh:mm, hh:mm:ss, or mm:ss format";
    }
    setErrors({ ...temp });   // Updates only the set key=value pairs

    // EYE - TBD validate all fields

    if (fieldValues === values) {
      // Only check overall errors from onSubmit which implicitly
      // passes in the full values object. onChange only passes in
      // the one field that is being updated
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

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Finish Time"
            name="time"
            value={values.time}
            onChange={handleInputChange}
            error={errors.time}
          />
          {/* EYE TBD add service based on 'Distance' class to get values
          <Controls.Select
            label="Distance"
            name="distance"
            value={values.distance}
            onChange={handleInputChange}
            //options={employeeService.getDepartmentCollection()}
            error={errors.distance}
          />
          */}
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