import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup,
  Radio } from '@material-ui/core';

// NOTE: We are deliberately using RadioGroup as the name so we can
// can show how to resolve namespace issues using Controls.js
export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel> {label} </FormLabel>
      <MuiRadioGroup row
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          items.map(
            (item) => (
              <FormControlLabel 
                key={item.id}
                label={item.title} 
                value={item.id} 
                control={<Radio/>} 
              />
            )
          )
        }
      </MuiRadioGroup>
    </FormControl>
  );
}