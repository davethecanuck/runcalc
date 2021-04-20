import React from 'react';

// Past races used to predict future results
export class PastRaceTable extends React.Component {
  render() {
    const rows = [];
    this.props.races.forEach((race) => {
        rows.push(
          <PastRaceRow race={race} key={rows.length}/>
        );
    });

    return (
      <div className="race-table"> 
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
    let label = race ? race.getDistanceLabel() : "";
    let timeString = race ? race.getTimeString() : "";
    let age = race ? race.scenario.age : "";
    let ageGrade = race ? race.ageGrade() : "";

    return (
      <tr>
        <td> {label} </td>
        <td> {timeString} </td>
        <td> {age} </td>
        <td> {ageGrade} </td>
        <td> <input type="submit" name="past-race-remove" value="-" /> </td>
      </tr>
    );
  }
}