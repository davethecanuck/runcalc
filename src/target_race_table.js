import React from 'react';
import { DISTANCE_OPTIONS } from './distance.js';
import { Race } from './race.js';

// Predicted times for various distances
export class TargetRaceTable extends React.Component {
  render() {
    // EYE - we need to create a model based on the past races
    // and create output rows with the predictions from the model
    // for each distance. Maybe push all this to a model method?
    const rows = [];
    if (this.props.pastRaces.length > 0) {
      DISTANCE_OPTIONS.forEach((distance) => {
        // Get weighted predictions from past races
        let totalTime = 0.0;
        let totalWeight = 0.0;

        this.props.pastRaces.forEach((pastRace) => {
          let [time, weight] = pastRace.predictTime(distance.value);
          totalTime += time * weight;
          totalWeight += weight;
        });

        if (totalWeight > 0.0) {
          let race = new Race();
          race.label = distance.label;
          race.distance = distance.value;

          // EYE - Converting to int for now. Should render as hh:mm:ss
          race.time = parseInt(totalTime / totalWeight);
          rows.push(
           <TargetRaceRow race={race} key={rows.length}/>
          );
        }
      });
    }

    return (
      <div className="race-table"> 
        <h2> Target Races </h2>
        <table>
          <thead> 
            <tr>
              <th> Distance </th>
              <th> Finish Time </th>
              <th> Age Grade </th>
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

class TargetRaceRow extends React.Component {
  render() {
    let race = this.props.race;
    let label = race ? race.label : "";
    let time = race ? race.time : "";
    let timeString = "";
    let age_grade = race ? race.ageGrade() : "";

    // EYE export function so it can be used in PastRaceRow
    if (time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time - (hours * 3600)) / 60);
      let seconds = time - (hours * 3600) - (minutes * 60);

      timeString = hours.toString().padStart(2, '0') + ':' + 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    }

    return (
      <tr>
        <td> {label} </td>
        <td> {timeString} </td>
        <td> {age_grade} </td>
      </tr>
    );
  }
}