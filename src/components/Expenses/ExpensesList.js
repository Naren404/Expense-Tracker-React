import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.expenses.length === 0 ){
        return <h2 className="expense-list__fallback">Found No expenses.</h2>
    }
    return ( 
        <ul className="expenses-list">
            {
                props.expenses.map((value, key)=>{
                    return < ExpenseItem expense = {value} key={key} />
                })
             }
        </ul>
     );
}
 
export default ExpensesList;