import strategies from "@/data";
import React from "react";
import { IoTrendingUp } from "react-icons/io5";

const Table = () => {
  return (
    <div className="flex flex-col w-full border p-5 rounded-lg mb-[250px]">
      <div>
        <h1 className="text-2xl font-semibold pb-4">Basic Backtest</h1>
        <select>
          <option value="0%">0%</option>
          <option value="0.5%">0.5%</option>
          <option value="1%">1%</option>
        </select>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Calmar Ratio
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Overall Profit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Avg. Daily Profit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Win %(Day)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Price (Rs)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {strategies.map((strategy, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 border-b">
                      {strategy.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      {strategy.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      <span className="p-1.5 border rounded-lg border-green-500 text-green-500 flex gap-2 w-fit items-center">
                        {strategy.calmarRatio}{" "}
                        <i className="text-lg">
                          <IoTrendingUp />
                        </i>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      {strategy.overallProfit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      {strategy.avgDailyProfit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      {strategy.winPercentage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                      {strategy.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium border-b">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {strategy.action}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
