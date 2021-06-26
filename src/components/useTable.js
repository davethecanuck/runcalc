import { makeStyles, Table, TableCell, TableHead, TablePagination, 
  TableRow, TableSortLabel } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(1),
    '& thead th': {
      fontWeight:  '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      textAlign: 'left',
    },
    '& tbody td': {
      fontWeight: '400',
      padding: theme.spacing(1),
      textAlign: 'left',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}))

// Generic table containing records (rows) and headCells (columns)
function useTable(records, headCells, filterFn) {
  const classes = useStyles()

  // Add hooks for paging
  const pages = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]) 
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  // Or build from records?
  const TblContainer = props => (
    <Table className={classes.table}>
      {props.children}
    </Table>
  )

  const handleSortRequest = cellId => {
    // Set direction based on whether we are already sorting on this column
    // and if the direction is already asc or not
    const isAsc = orderBy === cellId && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(cellId)
  }

  const TblHead = () => (
    <TableHead>
      <TableRow>
        {
          headCells.map(f => (
            <TableCell key={f.id}
              sortDirection = {f.id === orderBy ? order : false}
            >
              {
                f.disableSort ? f.label : 
                  <TableSortLabel 
                    active = {f.id === orderBy}
                    direction = {f.id === orderBy ? order : "asc"}
                    onClick={() => {handleSortRequest(f.id)}}
                  >
                    {f.label}
                  </TableSortLabel>
              }
            </TableCell> 
          ))
        }
      </TableRow>
    </TableHead>
  )

  // Paging controls (use values from hooks above)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )

  // Apparently lifted from MUI documentation
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a,b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order;
      }
      else {
        return a[1] - b[1];
      }
    })
    return stabilizedThis.map((el) => el[0])
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  const recordsAfterPagingAndSorting = () => {
    return stableSort(filterFn.fn(records), getComparator(order, orderBy))
      .slice(page * rowsPerPage, (page+1) * rowsPerPage);
  }

  // Returning an object containing TblContainer
  return {
    TblHead,
    TblContainer, 
    TblPagination, 
    recordsAfterPagingAndSorting
  }
}

export default useTable;