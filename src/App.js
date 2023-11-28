import { Container, Stack, Button } from "react-bootstrap";
import BudgetCard from "./Components/BudgetCard";
import AddBudgetModal from "./Components/AddBudgetModal";
import { useState } from "react";
import { useBudgets } from "./Contexts/BudgetsContext";
//import getBudgetExpenses from "./Contexts/BudgetsContext/BudgetsProvider/value";
export default function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary"> Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            const { amount } = getBudgetExpenses(budget.id);
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            );
          })}
        </div>
      </Container>

      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
    </>
  );
}
