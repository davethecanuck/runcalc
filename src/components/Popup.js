import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } 
  from '@material-ui/core';
import React from 'react';
import Controls from '../controls/Controls'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    position: "absolute",
    top: theme.spacing(3),
  },
  dialogTitle: {
    paddingRight: 0,
  }
}))

function Popup(props) {
  const {title, children, openPopup, setOpenPopup} = props
  const classes = useStyles()

  return (
    <Dialog 
      open={openPopup} 
      maxWidth="md" 
      classes={{paper: classes.dialogWrapper}}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
            {title}
          </Typography>
          <Controls.ActionButton 
            color="secondary" 
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Popup;