import { FormControl, FormHelperText, FormLabel, MenuItem,
  Select as MuiSelect } from '@material-ui/core';
import React from 'react';

function Select(props) {
  const {name, label, value, error=null, onChange, options} = props;

  return (
    <FormControl variant="outlined" {...(error && { error:true })}>
      <FormLabel> {label} </FormLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        <MenuItem value=""> None </MenuItem> 
        {
          options.map(
            item => (
              <MenuItem key={item.id} value={item.id}> 
                {item.title} 
              </MenuItem>
            )
          )
        }
      </MuiSelect>
      {error && <FormHelperText> {error} </FormHelperText>}
    </FormControl>
  );
}

export default Select;