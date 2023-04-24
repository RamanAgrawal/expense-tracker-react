import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseAction } from '../../store/ExpenseSlice'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function ExpenseList() {
  const {removeExpense,editExpense}=ExpenseAction
  const expenses=useSelector(state=>state.expense.expenses)
  const totalExpense=useSelector(state=>state.expense.totalExpenses)
  console.log(expenses);
  const dispatch=useDispatch()
  const rows = expenses
  const deleteHandler=(id)=>{
    dispatch(removeExpense(id))
  }
  const editHandler=(item)=>{
    dispatch(editExpense({
      id:item.id,
    description:'fdfdsfsdf',
    category:'other',
    amount:90,
    date:'12-1-2002'
  }))
  }

  return (
    <TableContainer sm={{maxWidth:'md'}} maxWidth='md' sx={{marginInline:'auto'}} component={Box}>
      <Table sx={{ minWidth: 500 }} sm={{maxWidth:100}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Expense Description</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">{totalExpense}</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{return editHandler(row)}}>Edit</Button><Button onClick={()=>{return deleteHandler(row)}}>Delete</Button></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}