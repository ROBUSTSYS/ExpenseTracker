import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false)
  };

  const onEditing = () => {
    setEditing(true);
  };

  const stopEditingHandler = () =>{
    setEditing(false)
  }
  return (
    <div className="new-expense">
      {!editing && <button onClick={onEditing}>Add New Expenses</button>}
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing = {stopEditingHandler}/>}
    </div>
  );
};

export default NewExpenses;
