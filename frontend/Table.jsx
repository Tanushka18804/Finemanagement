import React from "react";

const Table = () => {
  const transactions = [
    { id: 1, date: "2025-02-20", description: "Salary", amount: 5000 },
    { id: 2, date: "2025-02-22", description: "Groceries", amount: -200 },
    { id: 3, date: "2025-02-25", description: "Investment", amount: -500 },
  ];

  return (
    <div className="table-container">
      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td>{txn.description}</td>
              <td style={{ color: txn.amount < 0 ? "red" : "green" }}>
                {txn.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
