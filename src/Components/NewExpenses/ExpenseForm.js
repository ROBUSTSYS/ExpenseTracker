import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredamount, setEnteredamount] = useState("");

  const [entereddate, setEntereddate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredamount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEntereddate(event.target.value);
  };

  //   instead of using three different state we can use a single state

  // const [userinput, setUserinput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount: " ",
  //   enteredDate: " ",
  // });

  // const titleChangeHandler = (event) => {
  //   setUserinput({
  //     ...userinput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserinput({
  //     ...userinput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserinput({
  //     ...userinput,
  //     enteredDate: event.target.value,
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    

    const expenseData = {
      title: enteredTitle,
      amount: +enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredamount("");
    setEntereddate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name=""
            id=""
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            name=""
            id=""
            value={enteredamount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name=""
            id=""
            value={entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
