import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Top level application 
class RaceCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      past_races: [],
    }
  }

  render() {
    return (
      <div className="race-calc">
        <PastRaceForm />
        <PastRaceTable races={this.state.past_races}/>
      </div>
    );
  }
}

// Regular expressions for the form inputs
const field = {
  'distance': {
    pattern: RegExp(/^\s*\d+\s*$/),
    help: 'Enter distance (m)'
  },
  'time': {
    pattern: RegExp(/^\s*(\d+):?([0-5]\d{1}?)(:([0-5]\d{1}))?\s*$/),
    help: 'Enter time (hh:mm:ss or hh:mm or mm:ss)'
  },
  'age': {
    pattern: RegExp(/^\s*\d*\s*$/),
    help: 'Enter age in years'
  }
};

// Form to add past race
// EYE - move to it's own file
class PastRaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      time: null,
      age: null,
      errors: {
        distance: field.distance.help,
        time: field.time.help,
        age: '',  // Optional field
      }
    };
  }

  // Validate inputs on each key stroke
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let check = field[name];
    errors[name] = check.pattern.test(value) ? '' : check.help;
  
    this.setState({errors, [name]: value});
    /*
    this.setState({errors, [name]: value}, ()=> {
      console.log(errors);
    })
    */
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
      console.info('Valid Form')
    }
    else {
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2> Add a Past Race </h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='distance'>
              <label htmlFor="distance"> Distance </label>
              {errors.distance.length > 0 && 
                <span className='error'>{errors.distance}</span>
              }
              <input type='text' name='distance' onChange={this.handleChange} noValidate />
            </div>
            <div className='time'>
              <label htmlFor="time"> Finish Time </label>
              {errors.time.length > 0 && 
                <span className='error'>{errors.time}</span>
              }
              <input type='text' name='time' onChange={this.handleChange} noValidate />
            </div>
            <div className='age'>
              <label htmlFor="age"> Age </label>
              {errors.age.length > 0 && 
                <span className='error'>{errors.age}</span>
              }
              <input type='text' name='age' onChange={this.handleChange} noValidate />
            </div>
            <div className='submit'>
              <button> Add </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Past races used to predict future results
class PastRaceTable extends React.Component {
  render() {
    const rows = [];
    this.props.races.forEach((race) => {
        rows.push(
          <PastRaceRow race={race}/>
        );
    });

    return (
      <div className="past-race-table"> 
        <h2> Past Races </h2>
        <table>
          <thead> 
            <tr>
              <th> Distance </th>
              <th> Finish Time </th>
              <th> Age </th>
              <th> Age Grade </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

class PastRaceRow extends React.Component {
  render() {
    let race = this.props.race;
    let distance = race ? race.distance : "";
    let time = race ? race.time : "";
    let age = race ? race.age : "";
    let age_grade = race ? race.age_grade : "";

    return (
      <tr>
        <td> {distance} </td>
        <td> {time} </td>
        <td> {age} </td>
        <td> {age_grade} </td>
        <td> <input type="submit" name="past-race-remove" value="-" /> </td>
      </tr>
    );
  }
}

// ===================================
ReactDOM.render(
    <RaceCalc />,
    document.getElementById('root')
);