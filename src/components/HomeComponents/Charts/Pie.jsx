import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import React from "react";
import { Card } from "@mui/material";

ChartJs.register(ArcElement, Tooltip, Legend);

const Piee = () => {
  const expenseData = useSelector((state) => state.expense.expenses);
  // const total = useSelector(state => state.expense.totalExpenses)
  const food = expenseData.filter((item) => item.category === "food");
  const others = expenseData.filter((item) => item.category === "others");
  const electronics = expenseData.filter(
    (item) => item.category === "electronics"
  );
  const clothes = expenseData.filter((item) => item.category === "clothes");

  const calculate = (arr) => {
    let sum = 0;
    let num = arr.map((item) => Number(item.amount));
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  };
  const expense = [
    calculate(food),
    calculate(others),
    calculate(electronics),
    calculate(clothes),
  ];

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
      },
    },
  };

  const pieData = {
    labels: ["Food", "Others", "Electronics", "Cloths"],
    datasets: [
      {
        data: expense,
        backgroundColor: ["rgba(255,0,0, 1)", "#36A2EB", "#FFCE56", "blue"],
      },
    ],
  };

  return (
    <Card sx={{ maxWidth: "20rem" }}>
      {/* <Line data={data} options={options} /> */}
      <Pie data={pieData} options={options} color="invert" />
    </Card>
  );
};

export default Piee;
