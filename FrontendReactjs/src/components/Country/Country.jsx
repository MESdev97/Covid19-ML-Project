import React , {useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import styles from './Country.module.css';
const Country = () => {

    const[contries , setcontries]= useState([]);

    useEffect(()=>{
    fetch("http://127.0.0.1:5000/top_15").then(response=>
    response.json().then( data =>
         { setcontries(data.result);
    })
    );
},[]
    
   
 
);
;
const data  = contries.map((contries) => ({Country : contries.country,
  Confirmed : contries.total_cases,
  Recoverd : contries.Total_recovered,
  Deaths : contries.Total_deaths,
}));
console.log(data);
const columns = [
  { id: data.map(({Country})=>Country), label: 'Country', minWidth: 170 },
  {
    id:  data.map(({Confirmed})=>Confirmed),
    label: 'Confirmed',
    minWidth: 170,
    align: 'right',
  
  },
  {
    id: data.map(({Deaths})=>Deaths),
    label: 'Deaths',
    minWidth: 170,
    align: 'right',
   
  },
  {
    id: data.map(({Recovered})=>Recovered),
    label: 'Recovered',
    minWidth: 170,
    align: 'right',
  },
];
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
const classes = useStyles();
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
 return(
  <Paper className={classes.root}>
  <TableContainer className={classes.container}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {contries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contries) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={contries.Country}>
              {columns.map((column) => {
                const value = contries[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number' ? column.format(value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={contries.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
  />
</Paper>

 )
   
}

export default Country ;