import React from "react";

const Leaderboard = () => {
  return (
    <div className="w-full border rounded-md p-5">
      <h1>Basic Backtest</h1>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win %(Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
