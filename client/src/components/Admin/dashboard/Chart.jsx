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
const Chart = (usersCount) => {
let usersActive = usersCount.users.users
  const data = [
    {
      name: "Junio",
      "Users Activos": 8,
    },
    {
      name: "Julio",
      "Users Activos": 30,
    },
    {
      name: "Agosto",
      "Users Activos": 20,
    },
    {
      name: "Septiembre",
      "Users Activos": 10,
    },
    {
      name: "Octubre",
      "Users Activos": 10,
    },
    {
      name: "Noviembre",
      "Users Activos": usersActive,
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
