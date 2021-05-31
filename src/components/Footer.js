import React from 'react'
import {AppBar, Toolbar, Grid, makeStyles, IconButton} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  // 'root' overrides the default corresponding class from Material UI.
  // - root is the outermost class for the AppBar element (and other MUI components)
  // - use inspect of final rendered page to verify
  root: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: 'auto',
    bottom: 0,
  },
  iconButtonLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'medium',
  },
}));

const Footer = (props) => {
  const classes = useStyles(props);
  const {pages, setCurrentPage} = props;

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          {
            pages.map((p) => (
              <Grid item> 
                <IconButton classes={{label: classes.iconButtonLabel}}
                  onClick={() => { setCurrentPage(p.title) }}
                >
                  {p.icon}
                  <label> {p.title} </label>
                </IconButton>
              </Grid>
            ))
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;