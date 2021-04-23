import React from 'react';
import Select from 'react-select';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styles from './styles';

import { Scenario } from './scenario';
import { Race } from './race';
import { DISTANCE_OPTIONS } from './distance';

// Regular expressions for the form inputs
const FIELD = {
  'distance': {
    pattern: RegExp(/^\s*\d+\s*$/),
    help: '(select a distance)'
  },
  'time': {
    pattern: RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),
    help: '(hh:mm:ss or hh:mm or mm:ss)'
  },
  'age': {
    pattern: RegExp(/^\s*\d*\s*$/),
    help: '(years)'
  }
};

const INITIAL_STATE = {
  distance: '',
  time: '',
  age: '',
  errors: {
    distance: FIELD.distance.help,
    time: FIELD.time.help,
    age: '',  // Optional field
  } 
}

// Form to add past race
export class PastRaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
  }

  // Handle distance state
  handleDistanceChange = (selectedOption) => {
    this.setState({ distance: selectedOption.value });
    let errors = {...this.state.errors};
    errors.distance = '';
    this.setState({ errors });
  };

  // Validate inputs on each key stroke
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let check = FIELD[name];
    errors[name] = check.pattern.test(value) ? '' : check.help;
    this.setState({errors, [name]: value});
  }

  validateForm = () => {
    let valid = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      // Define the race scenario
      let s = new Scenario();
      s.age = this.state.age;

      // Parse time into [hh,mm,(ss)] array
      // EYE time.js?
      let parsedTime = FIELD.time.pattern.exec(this.state.time);
      let timeParts = [];
      timeParts.push(parseInt(parsedTime[1]));
      timeParts.push(parseInt(parsedTime[2]));

      // Optional last part (ss or mm) is in offset 4 of regex
      if (parsedTime[4] != null) {
        timeParts.push(parseInt(parsedTime[4]));
      }

      // Finally define the race object
      let race = new Race();
      race.setDistance(parseInt(this.state.distance));
      race.setTimeParts(timeParts);
      race.scenario = s;

      // Submit to the parent past races list
      this.props.addPastRace(race);

      // And clear the form
      // EYE - select is not right
      event.target.reset();
      this.setState(JSON.parse(JSON.stringify(INITIAL_STATE)));
    }
    else {
      console.error('Invalid Form')
    }
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}> 
        <h2> Add a Past Race </h2>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate >
          <div className='distance'>
            <label htmlFor="distance"> 
              Distance 
              {errors.distance.length > 0 && 
                <span className='error'>{errors.distance}</span>
              }
            </label>
            <Select 
              options={DISTANCE_OPTIONS}
              onChange={this.handleDistanceChange}
            />

          </div>
          <div className='time'>
            <label htmlFor="time"> 
              Finish Time 
              {errors.time.length > 0 && 
                <span className='error'>{errors.time}</span>
              }
            </label>
            <input type='text' name='time' onChange={this.handleChange} noValidate />
          </div>
          <div className='age'>
            <label htmlFor="age"> 
              Your Age (optional)
              {errors.age.length > 0 && 
                <span className='error'>{errors.age}</span>
              }
            </label>
            <input type='text' name='age' onChange={this.handleChange} 
              noValidate />
          </div>
          <div className='submit'>
            <button> Add </button>
          </div>
        </form>
      </Paper>
    );
  }
}

// Needed for Material UI styles
PastRaceForm.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(PastRaceForm);