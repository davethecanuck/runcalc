import React, { useState } from 'react';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import { contentStyles } from '../../components/Content'
import useTable from '../../components/useTable'
import * as predictCalc from '../../calc/predict'

function RacePredictions(props) {
  const classes = contentStyles()
  const [filterFn, setFilterFn] = useState({fn: items => { return items }})
  const [records, setRecords] = useState(predictCalc.getRacePredictions())

  const headerCells = [
    {id:'distance', label:'Distance', disableSort:true},
    {id:'time', label:'Time', disableSort:true},
    {id:'pace', label:'Pace', disableSort:true},
  ]

  // This brings the Tbl types into our name space
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headerCells, filterFn)

  return (
    <div>
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