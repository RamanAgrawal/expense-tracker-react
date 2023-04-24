import { Box, Button, Grid } from '@mui/material'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormActions } from '../../store/FormSlice'
const Main = () => {
    const dispatch=useDispatch()
    const {openForm}=FormActions
    const totalExpense=useSelector(state=>state.expense.totalExpenses)
    return (<Fragment>
        <div style={{marginTop:'100px',width:'90vw',marginInline:'auto', border:'1px solid black'}}>
            <Box>
                <Grid container>
                    <Grid item xs={3}>
                        <Box height={100} border={'GrayText'}>
                            <h3>Total Expense</h3>
                            {totalExpense}
                            </Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box><Button variant='contained' onClick={()=>{dispatch(openForm())}}> Add Expense</Button></Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>fdfs</Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>fdfs</Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </Fragment>
    )
}

export default Main