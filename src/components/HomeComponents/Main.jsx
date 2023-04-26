import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormActions } from '../../store/FormSlice'
import { authActions } from '../../store/AuthSlice'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import AddIcon from '@mui/icons-material/Add';
import FileSaver from 'file-saver'
const Main = () => {
    const dispatch = useDispatch()
    const { openForm } = FormActions
    const { activatePremium, changeEligibility } = authActions
    const totalExpense = useSelector(state => state.expense.totalExpenses)
    const expense = useSelector(state => state.expense.expenses)
    const premium = useSelector(state => state.auth.premium)
    const isEligible = useSelector(state => state.auth.isEligible)



    if (!premium && totalExpense >= 10000 && !isEligible) {
        dispatch(changeEligibility())
    }
 
    const downloadData=()=>{
        const data='Description,Amount,Category,Date\n'+expense.map(({category,amount,description,date})=>(
            `${description},${amount},${category},${date}`
        )).join('\n')
       const expenseData =new Blob([data],{ type: 'text/csv;charset=utf-8;' })
        FileSaver.saveAs(expenseData, 'expense.csv');
    }
    return (<Fragment>
      
        <Container maxWidth={'lg'} fullWidth sx={{
            marginY: '5rem'
        }}>
            <Grid container fullWidth gap={4}>

                <Grid item xs={12} md={3.6} >
                    <Card border={'GrayText'} sx={{
                        position: 'relative',
                        padding: '1rem',
                        height: '8rem'
                    }}>
                        <Typography variant='p' fontWeight='bold'>Total Expense</Typography>
                        <MonetizationOnOutlinedIcon sx={{ fontSize: '4rem', color: 'orange', position: 'absolute', right: '1rem', top: '1rem' }} />
                        <Typography variant='h4' fontWeight='bold' sx={{ mt: '1rem' }}>${totalExpense}</Typography>

                    </Card>
                </Grid>
                <Grid item xs={12} md={3.6}>
                    <Card sx={{
                        position: 'relative',
                        padding: '1rem',
                        height: '8rem'
                    }}>
                        <Typography variant='p' component='h4' fontWeight='bold'>Add Expense</Typography>
                        <AddCircleOutlineOutlinedIcon sx={{ fontSize: '4rem', color: 'orange', position: 'absolute', right: '1rem', top: '1rem' }} />
                        <Button variant='outlined' sx={{ mt: '1.5rem' }} onClick={() => { dispatch(openForm()) }}>
                            <AddIcon sx={{ ml: '0' }} />
                            Add Expense</Button></Card>
                </Grid>
                <Grid item xs={12} md={3.6}>
                    <Card sx={{
                        position: 'relative',
                        padding: '1rem',
                        height: '8rem'
                    }}>
                        {!premium && !isEligible && <Typography variant='p' component='h4' fontWeight='bold'>
                            Spend {10000 - (+totalExpense)} more to activate
                        </Typography>}
                        {isEligible && !premium && <Typography variant='p' component='h4' fontWeight='bold'>
                            You are eligible for Premium
                        </Typography>}
                        {premium && <Typography variant='p' component='h4' fontWeight='bold'>
                            Download Data
                        </Typography>}
                        <VerifiedRoundedIcon sx={
                            {
                                fontSize: '4rem',
                                color: 'orange',
                                position: 'absolute',
                                right: '1rem',
                                top: '1rem'
                            }}
                        />
                        {totalExpense >= 10000 && !premium && <Button variant='outlined' sx={
                            {
                                mt: '1.5rem'
                            }}
                            onClick={() => { dispatch(activatePremium(true)) }}>
                            Activate Premium
                        </Button>}
                        {premium && <Button sx={{ mt: '1.5rem' }} onClick={downloadData} variant='outlined'> Excel</Button>}
                        
                    </Card>
                </Grid>

            </Grid>
        </Container>
        {/* </div> */}
    </Fragment>
    )
}

export default Main