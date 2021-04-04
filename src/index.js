import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Top level application 
class RaceCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      past_races: [],
      target_races: [],
      scenario: {
          age: 30,
          altitude: 0,
          units: "meters",
      }
    }
  }

  render() {
    return (
      <div className="race-calc">
        <h1> Race Calculator </h1>
        <PastRaceTable races={this.state.past_races}/>
        <RaceScenario scenario={this.state.scenario}/>
        <TargetRaceTable races={this.state.target_races}/>
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

    // Add one more blank row
    rows.push(
      <PastRaceRow />
    );

    return (
      <div className="past-race-table"> 
        <h2> Past Races </h2>
        <table>
          <tr>
            <th> Distance </th>
            <th> Finish Time </th>
            <th> Age </th>
            <th> Altitude </th>
          </tr>
          <tbody>
            {rows}
            <PastRaceAdd />
          </tbody>
        </table>
      </div>
    );
  }
}

class PastRaceRow extends React.Component {
  render() {
    // EYE TBD - this should be an input form
    let race = this.props.race;
    let distance = race ? race.distance : "";
    let time = race ? race.time : "";
    let age = race ? race.age : "";
    let altitude = race ? race.altitude : "";

    return (
      <tr>
        <td> {distance} </td>
        <td> {time} </td>
        <td> {age} </td>
        <td> {altitude} </td>
      </tr>
    );
  }
}

class PastRaceAdd extends React.Component {
  render() {
    return (
      <tr>
        <td> 
          <button> + </button> 
        </td>
      </tr>
    );
  }
}

// Scenario for predicting future target races
class RaceScenario extends React.Component {
  render() {
    return (
      <div className="race-scenario">
        <h2> Race Scenario </h2>
        <table> 
          <tr> 
            <th> Age </th>
            <th> Altitude </th>
            <th> Units </th>
          </tr>
          <tr> 
            <td> {this.props.scenario.age}  </td>
            <td> {this.props.scenario.altitude}  </td>
            <td> {this.props.scenario.units}  </td>
          </tr>
        </table>
      </div>
    );
  }
}

// Future predicted race times
class TargetRaceTable extends React.Component {
  render() {
    const rows = [];
    this.props.races.forEach((race) => {
        rows.push(
          <TargetRaceRow race={race}/>
        );
    });

    return (
      <div className="target-race-table">
        <h2> Target Races </h2>
        <table>
          <tr>
            <th> Distance </th>
            <th> Finish Time </th>
            <th> Pace </th>
            <th> Age Grade </th>
          </tr>
        </table>
      </div>
    );
  }
}

class TargetRaceRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.race.distance} </td>
        <td> {this.props.race.time} </td>
        <td> {this.props.race.pace} </td>
        <td> {this.props.race.age_grade} </td>
      </tr>
    );
  }
}

// ===================================
ReactDOM.render(
    <RaceCalc />,
    document.getElementById('root')
);