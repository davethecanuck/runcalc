import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } 
  from '@material-ui/core';
import React from 'react';

// Helper function for checkboxes. There is not a value parameter like
// other input types (for onChange/handleInputChange) so this function will
// convert the checkbox params to match the others.
const convertToDefaultParam = (name,value) => ({
  target: {
    name, value    // Same as name:name, value:value
  }
})

function Checkbox(props) {
  const {name, label, value, onChange} = props;

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={ 
          <MuiCheckbox 
            name={name}
            checked={value}
            onChange={e => onChange(convertToDefaultParam(name, e.target.checked))}
            color="primary"
          /> 
        }
      />
    </FormControl>
  );
}

export default Checkbox;