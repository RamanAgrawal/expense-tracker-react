import React, { Fragment } from 'react'
import Navbar from '../HomeComponents/Navbar'
import Main from '../HomeComponents/Main'
import ExpenseList from '../HomeComponents/ExpenseList'
import NewExpense from '../HomeComponents/NewExpense'
import { useSelector } from 'react-redux'

const Home = () => {
  const showForm=useSelector(state=>state.expenseForm.showForm)
  return (<Fragment>
<Navbar/>
<Main/>
{showForm&&<NewExpense/>}
<ExpenseList/>
</Fragment>
  )
}

export default Home