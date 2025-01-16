import React, { useState, useMemo } from 'react';

const Body = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const total = useMemo(() => {
    return amounts.reduce((acc, amt) => acc + amt, 0);
  }, [amounts]);

  const expenseSubmitHandle = (e) => {
    e.preventDefault();

    setExpenses((prevExpenses) => [...prevExpenses, expenseName]);
    setAmounts((prevAmounts) => [...prevAmounts, parseInt(amount, 10)]);

    setExpenseName('');
    setAmount(0);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <form onSubmit={expenseSubmitHandle} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Expense</h1>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Expense Name"
            value={expenseName}
            type="text"
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Expense
        </button>
      </form>

      <table className="w-full mt-8 bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">Expenses</th>
            <th className="px-4 py-2 text-left font-medium text-gray-600 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{expense}</td>
              <td className="px-4 py-2 border-b">{amounts[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-xl font-semibold text-gray-700">
        <strong>Total:</strong> {total}
      </div>
    </div>
  );
};

export default Body;
