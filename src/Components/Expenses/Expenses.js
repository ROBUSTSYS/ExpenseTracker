import React, { useState } from "react";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Cards>
    </div>
  );
};

export default Expenses;
