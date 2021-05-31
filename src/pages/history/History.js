import { Fab, Paper } from '@material-ui/core';
import { AddOutlined, HistoryOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import Popup from '../../components/Popup'
import AddRaceForm from './AddRaceForm';
import {contentStyles} from '../../components/Content'

function History(props) {
  const classes = contentStyles()
  const [openPopup, setOpenPopup] = useState(true)   
  // EYE - popup open by default, but could set if record length==0

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
        <AddRaceForm />
      </Popup>
    </div>
  )
}

// EYE - Not sure if button should be here or maybe attached to the
// footer bar. 
// - Also make a generic Fab button so we can make styling consistent
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