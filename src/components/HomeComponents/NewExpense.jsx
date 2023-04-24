import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField, Divider, FormControl, MenuItem, Select, InputLabel, Grid } from '@mui/material'
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRef } from 'react';
import { ExpenseAction } from '../../store/ExpenseSlice';
import { FormActions } from '../../store/FormSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { MobileDatePicker } from '@mui/x-date-pickers';


export default function NewExpense() {
  const amountRef = useRef(0)
  const [category, setCategory] = useState('food')
  const [date, setDate] = useState(dayjs('2023-04-21'))
  const expenseDesRef = useRef('')
  const dispatch = useDispatch();
  const { addExpense } = ExpenseAction
  const { openForm, closeForm } = FormActions
  const showForm = useSelector(state => state.expenseForm.showForm)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  // const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    dispatch(openForm())
  }
  const handleClose = () => {
    dispatch(closeForm())
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const expense = {
      id: Math.random().toString(),
      description: expenseDesRef.current.value,
      amount: amountRef.current.value,
      category: category,
      date: date.toString()
    }

    dispatch(addExpense(expense))

    e.target.parentElement.parentElement.reset()
  }
  // const editHandler = (expense) => {
  //   expenseDesRef.current.value=expense.description
  //   amountRef.current.value=expense.amount
  // }
  
  return (
    <div style={{ marginTop: '100px' }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <Dialog open={showForm} onClose={handleClose} maxWidth='md' fullWidth sx={{
        position: 'relative',
        top: '-100px'
      }}>
        <form onSubmit={submitHandler}>
          <DialogTitle>Add Expense</DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container gap={4}>
              <Grid item md={4} xs={12}>
                <TextField id="outlined-basic" inputRef={expenseDesRef} label="Description" variant="outlined" fullWidth />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField required id="outlined-basic" inputRef={amountRef} label="Expense" type='number' variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value={'food'} selected>Food</MenuItem>
                    <MenuItem value={'clothes'}>Clothes</MenuItem>
                    <MenuItem value={'electronics'}>Electronics</MenuItem>
                    <MenuItem value={'others'}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>

                <DatePicker
                  label="Controlled picker"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' onClick={submitHandler} >Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div >
  );
}
// export editHandler