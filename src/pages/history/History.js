import { Fab, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import { AddOutlined, EditOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import Popup from '../../components/Popup'
import Notification from '../../components/Notification'
import AddRaceForm from './AddRaceForm';
import { contentStyles } from '../../components/Content'
import useTable from '../../components/useTable'
import * as historyService from '../../services/pastRaces'
import Controls from '../../controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

function History(props) {
  const classes = contentStyles()
  const [records, setRecords] = useState(historyService.getPastRaces())
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({fn: items => { return items }})
  const [notify, setNotify] = useState({
    isOpen:false, message:'', type:''
  })

  // Open popup automatically if no records
  const [openPopup, setOpenPopup] = useState(records.length === 0)   

  const addButton = (classes, setOpenPopup) => (
    <Fab variant="extended" aria-label="Add Race" color="secondary"
      className={classes.fabButton}
      onClick={() => { setOpenPopup(true) }}
    >
      <AddOutlined />
      Add Race
    </Fab>
  )

  const addOrEdit = (race, resetForm) => {
    // ID is 0 on new record until it is inserted
    if (race.id == null || race.id === 0) {
      historyService.insertPastRace(race)
    }
    else {
      historyService.updatePastRace(race)
    }

    setRecordForEdit(null)
    resetForm()
    setOpenPopup(false)
    setRecords(historyService.getPastRaces())

    setNotify({
      isOpen: true,
      type: 'success',
      message: 'Saved Successfully!',
    })
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  const headerCells = [
    {id:'distance', label:'Distance', disableSort:true},
    {id:'time', label:'Time', disableSort:true},
    {id:'altitude', label:'Altitude', disableSort:true},
    {disableSort:true} 
  ]

  // This brings the Tbl types into our name space
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headerCells, filterFn)

  const onDelete = id => {
    historyService.deletePastRace(id)
    setRecords(historyService.getPastRaces())
    setNotify({
      isOpen: true,
      type: 'error',
      message: 'Deleted Race!',
    })
  }

  return (
    <div>
      {addButton(classes, setOpenPopup)}
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
          {
            // No paging/sorting needed. Without pagination it just 
            // truncates the data
            //recordsAfterPagingAndSorting().map(
            records.map(
              (item) => (
                <TableRow key={item.id}>
                  <TableCell> {item.distanceName} </TableCell>
                  <TableCell> {item.hhmmss} </TableCell>
                  <TableCell> {item.altitude} </TableCell>
                  <TableCell>
                    <Controls.ActionButton color="primary" fontSize="small"
                      onClick={() => { openInPopup(item) }}
                    >
                      <EditOutlined/>
                    </Controls.ActionButton>
                    <Controls.ActionButton color="secondary" fontSize="small"
                      onClick={() => { onDelete(item.id) }}
                    >
                      <CloseIcon />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              )
            )
          }
          </TableBody>
        </TblContainer>
      </Paper>
      <Popup
        title="Past Race"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddRaceForm 
          addOrEdit={addOrEdit}
          recordForEdit={recordForEdit}
        />
      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
    </div>
  )
}

export default History;