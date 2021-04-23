const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#4A4E69',
    direction: 'row',
    flexWrap: 'wrap',
  },
  table: {
    margin: theme.spacing(0),
    width: '100%',
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: '400px',
  },
});

export default styles;