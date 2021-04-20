import React from 'react';
import Select from 'react-select';
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

// Form to add past race
export class PastRaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      time: null,
      age: null,
      errors: {
        distance: FIELD.distance.help,
        time: FIELD.time.help,
        age: '',  // Optional field
      }
    };
  }

  // Handle distance state
  handleDistanceSelect = (selectedOption) => {
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
      race.setTimeParts(timeParts);
      race.distance = parseInt(this.state.distance);
      race.scenario = s;

      // Submit to the parent past races list
      this.props.addPastRace(race);
    }
    else {
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='form-wrapper'>
        <h2> Add a Past Race </h2>
        <form onSubmit={this.handleSubmit} noValidate >
          <div className='distance'>
            <label htmlFor="distance"> 
              Distance 
              {errors.distance.length > 0 && 
                <span className='error'>{errors.distance}</span>
              }
            </label>
            <Select 
              options={DISTANCE_OPTIONS}
              onChange={this.handleDistanceSelect}
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
            <input type='text' name='age' onChange={this.handleChange} noValidate />
          </div>
          <div className='submit'>
            <button> Add </button>
          </div>
        </form>
      </div>
    );
  }
}