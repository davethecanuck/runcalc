import React, {useState} from 'react'
import {createMuiTheme, CssBaseline, ThemeProvider, withStyles} 
  from '@material-ui/core'
import { PermIdentityOutlined, HistoryOutlined, DirectionsRunOutlined } 
  from '@material-ui/icons'

import Content from '../components/Content'
import Footer from '../components/Footer'
import UserProfile from '../pages/user_profile/UserProfile'
import History from '../pages/history/History'
import Predict from '../pages/predict/Predict'

// We can create theme objects like below, and save them in a 
// map, and allow user to set the theme programatically
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    borderRadius: '4px',
  },

  // Overrides default MUI behavior for the app. See MUI API docs
  // for each component to see what you can do.
  overrides: {
    MuiAppBar: {
      root:{
        transform: 'translateZ(0)',
      }
    }
  },
  props: {
    // Sets ripple property for child components
    MuiIconButton: {
      disableRipple: false,
    }
  }
});

const styles = {
  appMain: {
    paddingLeft: '0px',
    width: '100%',
  }
}

// Define list of pages 
// EYE - add race data as props
const pages = [
  { 
    title: "Profile", 
    page: (<UserProfile />),
    icon: (<PermIdentityOutlined color="primary" />) 
  },
  { 
    title: "History", 
    page: (<History />),
    icon: (<HistoryOutlined color="primary" />)
  },
  { 
    title: "Predict", 
    page: (<Predict />),
    icon: (<DirectionsRunOutlined color="primary" />) 
  },
]

const App = (props) => {
  const {classes} = props;

  // Defaulting to History page, but should encourage profile
  // if no cache data found
  const [currentPage, setCurrentPage] = useState("History")

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}> 
        <Content pages={pages} currentPage={currentPage}/>
        <Footer pages={pages} setCurrentPage={setCurrentPage}/> 
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);