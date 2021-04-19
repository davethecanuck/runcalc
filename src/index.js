import React from 'react';
import ReactDOM from 'react-dom';
import {PastRaceForm} from './past_race_form.js';
import {PastRaceTable} from './past_race_table.js';
import {TargetRaceTable} from './target_race_table.js';
import './index.css';

// Top level application 
class RaceCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastRaces: [],
    }
  }

  render() {
    // EYE should have a scenario form to the left of the 
    // TargetRaceTable (below past race form)
    return (
      <div className="wrapper">
        <div className="race-calc-row">
          <PastRaceForm addPastRace={(r) => this.addPastRace(r)}/>
          <PastRaceTable races={this.state.pastRaces}/>
          <TargetRaceTable pastRaces={this.state.pastRaces}/>
        </div>
        <div className="race-calc-row">
        </div>
      </div>
    );
  }

  addPastRace(race) {
    let newPastRaces = this.state.pastRaces.slice();
    newPastRaces.push(race);
    this.setState({ pastRaces: newPastRaces });
  }
}

// ===================================
ReactDOM.render(
    <RaceCalc />,
    document.getElementById('root')
);