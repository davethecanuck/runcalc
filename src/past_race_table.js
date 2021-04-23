import React from 'react';

//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styles from './styles';
import './table.css';

// Past races used to predict future results
export class PastRaceTable extends React.Component {
  render() {
    const { classes } = this.props;
    const rows = [];
    this.props.races.forEach((race) => {
      rows.push(
        <PastRaceRow race={race} key={rows.length} raceId={rows.length}
          removePastRace={this.props.removePastRace}/>
      );
    });

    //  <div className="race-table"> 
    return (
      <Paper className={classes.paper}>
        <h2> Past Races </h2>
        <table>
          <thead> 
            <tr>
              <th> Distance </th>
              <th> Time </th>
              <th> Pace </th>
              <th> Age </th>
              <th></th>
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

function PastRaceRow(props) {
  let race = props.race;
  let label = race ? race.getDistanceLabel() : "";
  let timeString = race ? race.getTimeString() : "";
  let pace = race ? race.getPaceString() : "";
  let age = race ? race.scenario.age : "";
  //let ageGrade = race ? race.ageGrade() : "";

  return (
    <tr>
      <td> {label} </td>
      <td> {timeString} </td>
      <td> {pace} </td>
      <td> {age} </td>
      <td> 
        <IconButton 
            aria-label="delete" 
            onClick={() => props.removePastRace(props.raceId)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </td>

    </tr>
  );
}

// Needed for Material UI styles
PastRaceTable.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(PastRaceTable);