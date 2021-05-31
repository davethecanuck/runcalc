import { Fab, makeStyles, Paper } from '@material-ui/core';
import { AddOutlined, HistoryOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader'
import Popup from '../../components/Popup'
import AddRaceForm from './AddRaceForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  addButton: {
    left: 'auto',
    right: theme.spacing(1),
    top: theme.spacing(1),
    bottom: 'auto',
    position: 'fixed',
  },
}))

function History(props) {
  const classes = useStyles()
  const [openPopup, setOpenPopup] = useState(true)   
  // EYE - popup open by default, but could set if record length==0

  return (
    <div>
      <PageHeader
        title="Race History"
        icon={<HistoryOutlined fontSize="small"/>}
        fab={fabButton(classes)}
      />
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
const fabButton = (classes) => (
  <Fab variant="extended" aria-label="Add Race" color="secondary"
      className={classes.addButton}
  >
    <AddOutlined />
    Add Race
  </Fab>
)

export default History;