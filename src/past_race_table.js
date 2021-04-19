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
    let distance = race ? race.distance : "";
    let time = race ? race.time : "";
    let age = race ? race.scenario.age : "";
    let age_grade = race ? race.ageGrade() : "";

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