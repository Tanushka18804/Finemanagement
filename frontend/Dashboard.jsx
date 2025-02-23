import React from "react";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to your Personal Finance Manager!</p>
      <Table />
    </div>
  );
};

export default Dashboard;
