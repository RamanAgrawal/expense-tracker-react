import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import { Button, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseAction } from "../../store/ExpenseSlice";
import ConnectDatabase from "../../store/ConnectDatabase";
import { FormActions } from "../../store/FormSlice";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

let render = false;
export default function ExpenseList() {
  const { removeExpense } = ExpenseAction;
  const { setEditValue, openForm } = FormActions;
  const expenses = useSelector((state) => state.expense.expenses);
  const totalExpense = useSelector((state) => state.expense.totalExpenses);
  const premium = useSelector((state) => state.auth.premium);
  React.useEffect(() => {
    if (render) {
      ConnectDatabase(expenses, totalExpense, premium);
    } else {
      render = true;
    }
  }, [expenses, totalExpense, premium]);

  const dispatch = useDispatch();
  const rows = expenses;
  const deleteHandler = (id) => {
    dispatch(removeExpense(id));
  };
  const editHandler = (item) => {
    dispatch(setEditValue(item));
    dispatch(openForm());
  };

  return (
    <TableContainer
      // sm={{ maxWidth: "sm" }}
      sx={{ maxWidth: "100%", overflowX: "auto" }}
      component={Paper}
    >
      <Table
        // sx={{ minWidth: 500 }}
        // sm={{ maxWidth: "100%" }}
        aria-label="customized table"
      >
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
              <StyledTableCell align="right">
                <Button
                  onClick={() => {
                    return editHandler(row);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    return deleteHandler(row);
                  }}
                >
                  Delete
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
