import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return ( 
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
     );
}
 
export default Expenses;