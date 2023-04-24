import axios from 'axios'


const useremail = localStorage.getItem('email')
const user = useremail.replace('@', "").replace('.', "")

const ConnectDatabase = async (items, totalExpense) => {
    if (items.length) {
        try {
            await axios.put(`https://expense-tracker-b240a-default-rtdb.firebaseio.com/${user}.json`, {
                expense: [...items],
                totalExpense: totalExpense
            })

            console.log('success');
        } catch (error) {
            console.log(error.message);
        }
    }
}


export default ConnectDatabase
