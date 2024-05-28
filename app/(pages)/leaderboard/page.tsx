import React from "react";
import strategies from "../../../data";
import Link from "next/link";
import Table from "@/app/components/Table";

const Leaderboard = () => {
  return (
    // <div className="w-full border rounded-md px-10 pt-12">
    //   <h1>Basic Backtest</h1>
    //   <div>
    //     <table className="table-auto pt-10">
    //       <thead>
    //         <tr>
    //           <th>Rank</th>
    //           <th>Name</th>
    //           <th>Calmar Ratio</th>
    //           <th>Overall Profit</th>
    //           <th>Avg. Daily Profit</th>
    //           <th>Win %(Day)</th>
    //           <th>Price (Rs)</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {strategies.map((strategy) => (
    //           <tr key={strategy.rank}>
    //             <td>{strategy.rank}</td>
    //             <td>{strategy.name}</td>
    //             <td>{strategy.calmarRatio}</td>
    //             <td>{strategy.overallProfit}</td>
    //             <td>{strategy.avgDailyProfit}</td>
    //             <td>{strategy.winPercentage}</td>
    //             <td>{strategy.price}</td>
    //             <td>
    //               <Link href="/">{strategy.action}</Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <Table />
  );
};

export default Leaderboard;
