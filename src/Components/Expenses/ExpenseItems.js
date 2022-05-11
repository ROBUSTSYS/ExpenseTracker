import React from "react";
import ExpenseDates from "./ExpenseDates";
import "./ExpenseItems.css";
import Cards from "../UI/Cards";

const ExpenseItems = (props) => {
  return (
    <li>
    <Cards className="expense-item">
      <ExpenseDates date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
    </li>
  );
};

export default ExpenseItems;
