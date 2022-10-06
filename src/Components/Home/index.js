import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Transactioncomp from "./Transactioncomp";
import ViewComponent from "./ViewComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 25px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const Homecomp = () => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
        );
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };
    return (
        <Container>
            <ViewComponent
                expense={expense}
                income={income}
                addTransaction={addTransaction}
            />
            {transactions?.length ? (
                <Transactioncomp transactions={transactions} />
            ) : (
                ""
            )}
        </Container>
    );
};
export default Homecomp;
