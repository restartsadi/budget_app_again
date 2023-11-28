import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../Contexts/BudgetsContext";

export default function TotalBudgetCard(props) {
  const { budgets, expenses } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max === 0) return null;
  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons/>;
}