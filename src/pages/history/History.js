import { Fab, Paper } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import Popup from '../../components/Popup'
import Notification from '../../components/Notification'
import AddRaceForm from './AddRaceForm';
import { contentStyles } from '../../components/Content'
import * as historyService from '../../services/pastRaces'

function History(props) {
  const classes = contentStyles()
  const [records, setRecords] = useState(historyService.getPastRaces())
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [notify, setNotify] = useState({
    isOpen:false, message:'', type:''
  })

  // Open popup automatically if no records
  const [openPopup, setOpenPopup] = useState(records.length === 0)   

  const addOrEdit = (race, resetForm) => {
    // ID is 0 on new record until it is inserted
    if (race.id === 0) {
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

  const onDelete = id => {
    historyService.deletePastRace(id)
    setRecords(historyService.getPastRaces())
    setNotify({
      isOpen: true,
      type: 'error',
      message: 'Deleted Successfully!',
    })
  }

  return (
    <div>
      {addButton(classes, setOpenPopup)}
      <Paper className={classes.pageContent}>
        <div> TBD some content </div>
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

const addButton = (classes, setOpenPopup) => (
  <Fab variant="extended" aria-label="Add Race" color="secondary"
    className={classes.fabButton}
    onClick={() => { setOpenPopup(true) }}
  >
    <AddOutlined />
    Add Race
  </Fab>
)

export default History;