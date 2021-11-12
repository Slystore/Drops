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
const Chart = () => {
  const data = [
    {
      name: "Enero",
      "Users Activos": 4000,
    },
    {
      name: "Febrero",
      "Users Activos": 3000,
    },
    {
      name: "Marzo",
      "Users Activos": 5000,
    },
    {
      name: "Abril",
      "Users Activos": 4000,
    },
    {
      name: "Mayo",
      "Users Activos": 3000,
    },
    {
      name: "Junio",
      "Users Activos": 4000,
    },
    {
      name: "Julio",
      "Users Activos": 2000,
    },
    {
      name: "Agosto",
      "Users Activos": 4000,
    },
    {
      name: "Septiembre",
      "Users Activos": 3000,
    },
    {
      name: "Octubre",
      "Users Activos": 1000,
    },
    {
      name: "Noviembre",
      "Users Activos": 5000,
    },
  ];

  return (
    <div className="chart">
      <p className="chartTitle">Actividad de Usuarios</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey="Users Activos" stroke="#BC8CF2" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
