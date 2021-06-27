import React, { useState } from 'react'
import { Paper, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { contentStyles } from '../../components/Content'
import useTable from '../../components/useTable'
import * as predictCalc from '../../calc/predict'
import ScenarioForm from './ScenarioForm'
import * as scenarioService from '../../services/targetScenario'

function RacePredictions(props) {
  const classes = contentStyles()
  const [filterFn, setFilterFn] = useState({fn: items => { return items }})
  const [scenario, setScenario] = useState(scenarioService.getScenario())
  const [records, setRecords] = useState(predictCalc.getRacePredictions(scenario))

  // Main race prediction table
  const headerCells = [
    {id:'distance', label:'Distance', disableSort:true},
    {id:'time', label:'Time', disableSort:true},
    {id:'pace', label:'Pace', disableSort:true},
  ]

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headerCells, filterFn)

  const updateScenario = (scenario) => {
    scenarioService.updateScenario(scenario)
    setScenario(scenario)
    setRecords(predictCalc.getRacePredictions(scenario))
  }

  // Render
  return (
    <div>
      <Paper className={classes.pageContentHead}>
        <Typography variant="h6" component="div" style={{flexGrow: 1}}>
          Scenario
        </Typography>
        <ScenarioForm 
          updateScenario={updateScenario}
          scenario={scenario}
        />
      </Paper>

      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
          {
            records.map(
              (item) => (
                <TableRow key={item.id}>
                  <TableCell> {item.distanceName} </TableCell>
                  <TableCell> {item.hhmmss} </TableCell>
                  <TableCell> {item.getPaceString()} </TableCell>
                </TableRow>
              )
            )
          }
          </TableBody>
        </TblContainer>
      </Paper>
    </div>
  )
}

export default RacePredictions;