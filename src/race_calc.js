import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import PastRaceForm from '../past_race_form.js';
import PastRaceTable from '../past_race_table.js';
import TargetRaceTable from '../target_race_table.js';
import styles from '../styles.js';

// Top level application 
export class RaceCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastRaces: [],
    }
  }

  render() {
    const { classes } = this.props;

    // EYE should have a scenario form too
    return (
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <PastRaceForm 
            addPastRace={(r) => this.addPastRace(r)}/>
          <PastRaceTable races={this.state.pastRaces} 
            removePastRace={(r) => this.removePastRace(r)}/>
        </Grid>

        <Grid item xs={12}>
          <TargetRaceTable pastRaces={this.state.pastRaces}/>
        </Grid>
      </Grid>
    );
  }

  addPastRace(race) {
    let newPastRaces = this.state.pastRaces.slice();
    newPastRaces.push(race);
    this.setState({ pastRaces: newPastRaces });
  }

  removePastRace(rowNum) {
    if (rowNum >= 0 && rowNum < this.state.pastRaces.length) {
      this.state.pastRaces.splice(rowNum, 1);
      this.setState({ pastRaces: this.state.pastRaces });
    }
  }
}

// Needed for Material UI styles
RaceCalc.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(RaceCalc);