import React from 'react'
import { Typography, Grid, Slider, makeStyles } from '@material-ui/core'
import Input from './Input'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  input: {
    width: theme.spacing(10),
  },
}))

export default function InputSlider(props) {
  const {name, label, value, minValue, maxValue, step, 
    onChange, ...other} = props
  const [cVal, setValue] = React.useState(value)
  const classes = useStyles()

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  /* Only used if we use slider
  const handleBlur = () => {
    if (cVal < minValue) {
      setValue(minValue)
    } else if (cVal > maxValue) {
      setValue(maxValue)
    }
  }
  */

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof cVal === 'number' ? cVal : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={step}
            min={minValue}
            max={maxValue}
            {...other}
          />
        </Grid>
        <Grid item>
          <Input
            label={label}
            name={name}
            type="number"
            onChange={handleInputChange}
            value={cVal}
          />
          {/* error={error} */}
          {/*
          <Input
            className={classes.input}
            variant="outlined"
            value={cVal}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              type: 'number',
              'aria-labelledby': 'input-slider',
              step: {step},
              min: {minValue},
              max: {maxValue},
            }}
          />
          */}
        </Grid>
      </Grid>
    </div>
  )
}