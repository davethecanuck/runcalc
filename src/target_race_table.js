import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styles from './styles'

import { DISTANCE_OPTIONS } from './distance.js';
import { Race } from './race.js';

// Predicted times for various distances
export class TargetRaceTable extends React.Component {
  render() {
    const { classes } = this.props;

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
          race.distance = distance.value;

          // EYE - Converting to int for now. Should render as hh:mm:ss
          race.time = parseInt(totalTime / totalWeight);
          rows.push(
            <TargetRaceRow race={race} key={rows.length}/>
          );
        }
      });
    }

    //  <div className="race-table"> 
    return (
      <Paper className={classes.paper}>
        <h2> Predicted Times </h2>
        <table className='race-table'>
          <thead> 
            <tr>
              <th> Distance </th>
              <th> Time </th>
              <th> Pace </th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </Paper>
    );
  }
}

function TargetRaceRow(props) {
  let race = props.race;
  let label = race ? race.getDistanceLabel() : "";
  let timeString = race ? race.getTimeString() : "";
  let pace = race ? race.getPaceString() : "";

  return (
    <tr>
      <td> {label} </td>
      <td> {timeString} </td>
      <td> {pace} </td>
    </tr>
  );
}

// Needed for Material UI styles
TargetRaceTable.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(TargetRaceTable);