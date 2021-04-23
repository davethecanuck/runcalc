import React from 'react';
import ReactDOM from 'react-dom';

// NOTE!!! Material-UI classes don't work with: import { RaceCalc }
import RaceCalc from './race_calc.js';  
import './index.css';

// ===================================
ReactDOM.render(
    <RaceCalc />,
    document.getElementById('root')
);