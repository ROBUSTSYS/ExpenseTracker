import React from 'react'
import './ExpenseDate.css'

const ExpenseDates = (props) => {
 const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
     <div className="expense-item_date">
        <div className='month'>{month}</div>
        <div className='year'>{year}</div>
        <div className='day'>{day}</div>
      </div>
  )
}

export default ExpenseDates