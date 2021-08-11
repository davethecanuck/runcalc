import React from 'react'
import { Typography, Slider as MuiSlider, makeStyles } 
  from '@material-ui/core'

// Vertical styling
const vertStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    height: '200px',
    padding: '1em',
  },
}))

// Horizontal styling
const horizStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    height: 'auto',
    padding: '1em',
  },
}))

export default function Slider(props) {
  const {name, label, value=0, min=0, max=100, step=1, 
    valueLabelDisplay="off", orientation="horizontal", 
    onChange} = props

  const classes = orientation === "horizontal" ? horizStyles() : vertStyles()

  return (
    <div className={classes.root}>
      <MuiSlider
        name={name}
        aria-label={label}
        defaultValue={value}
        getAriaValueText={value}
        step={step}
        min={min}
        max={max}
        orientation={orientation}
        valueLabelDisplay={valueLabelDisplay}
        onChange={onChange}
      />
      <Typography>
        {label}
      </Typography>
    </div>
  )
}