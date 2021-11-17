import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const ChartSales = (usersCount) => {
let salesCount= usersCount.sales
  const data = [
    {
      name: "Junio",
      sales: 5000,
    },
    {
      name: "Julio",
      sales: 10500,
    },
    {
      name: "Agosto",
      sales: 9300,
    },
    {
      name: "Septiembre",
      sales: 6100,
    },
    {
      name: "Octubre",
      sales: 6100,
    },
    {
      name: "Noviembre",
      sales: salesCount,
    },
   
  ];
 
  return (
    <div className="chart">
      <p className="chartTitle">Facturación Bruta</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey="sales" stroke="#BC8CF2" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSales;
