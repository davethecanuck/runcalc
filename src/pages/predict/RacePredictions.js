import React, { useState, useEffect } from 'react'
import { Paper, TableBody, TableCell, TableRow, Typography, Grid } 
  from '@material-ui/core';
import { contentStyles } from '../../components/Content'
import useTable from '../../components/useTable'
import * as predictCalc from '../../calc/predict'
import ScenarioForm from './ScenarioForm'
import * as scenarioService from '../../services/scenario'

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
    {id:'ageGrade', label:'Age Grade', disableSort:true},
  ]

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headerCells, filterFn)

  // Helper for merging objects
  const definedProps = obj => Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => 
      v !== undefined && v !== null && !isNaN(v)
    )
  )

  const updateScenario = (newScenario) => {
    // Merge previous scenario with updated (partial) new one
    let scenario = { 
      ...definedProps(scenarioService.getScenario()), 
      ...definedProps(newScenario)
    }
    scenarioService.saveScenario(scenario)
    setScenario(scenario)
    setRecords(predictCalc.getRacePredictions(scenario))
  }

  // Hanndle desktop (wide) vs mobile screen size
  const DESKTOP_SIZE = 700
  const [isDesktop, setDesktop] = useState(window.innerWidth > DESKTOP_SIZE);

  const updateMedia = () => {
    setDesktop(window.innerWidth > DESKTOP_SIZE)
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  // Render results
  return (
    <div>
      <Grid container>
        <Grid item xs={isDesktop ? 4 : 12}>
          <Paper className={classes.pageContentHead}>
            <Typography variant="h6" component="div" style={{flexGrow: 1}}>
              Scenario
            </Typography>
            <ScenarioForm 
              updateScenario={updateScenario}
              scenario={scenario}
              isDesktop={isDesktop}
            />
          </Paper>
        </Grid>
        <Grid item xs={isDesktop ? 8 : 12}>
          <Paper className={classes.pageContentMain}>
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
                      <TableCell> {item.getAgeGradeString()} </TableCell>
                    </TableRow>
                  )
                )
              }
              </TableBody>
            </TblContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default RacePredictions;