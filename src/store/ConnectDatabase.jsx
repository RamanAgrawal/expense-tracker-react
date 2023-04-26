import axios from 'axios'



const ConnectDatabase = async (items, totalExpense, premium) => {
    const useremail = localStorage.getItem('email')
    // const user = 'raman'
    if (useremail) {
        const user = useremail.replace('@', "").replace('.', "")
        
        try {
            await axios.put(`https://expense-tracker-b240a-default-rtdb.firebaseio.com/${user}.json`, {
                expense: [...items],
                totalExpense: totalExpense,
                premium: premium
            })

            // console.log('success');
        } catch (error) {
            console.log(error.message);
        }
    }

}


export default ConnectDatabase
