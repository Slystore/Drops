import React, { useEffect } from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getUsers } from "../../../redux/users/userActions";
import { useDispatch, useSelector } from "react-redux";

const Chart = (usersCount) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const {users}= useSelector(state=>state.usersReducer);
  let userDate= users.map(user=>user.createdAt);
  // console.log(userDate)
  let matchNov = userDate.filter(user=>user.includes('2021-11'));
  let matchDic = userDate.filter(user=>user.includes('2021-12'));
let usersActive = usersCount.users.users
  const data = [
    {
      name: "Junio",
      "New Users": 8,
    },
    {
      name: "Julio",
      "New Users": 30,
    },
    {
      name: "Agosto",
      "New Users": 20,
    },
    {
      name: "Septiembre",
      "New Users": 10,
    },
    {
      name: "Octubre",
      "New Users": 10,
    },
    {
      name: "Noviembre",
      "New Users": matchNov.length,
    },
    {
      name: "Diciembre",
      "New Users": matchDic.length,
    },
   
  ];
 
  return (
    <div className="chart">
      <p className="chartTitle">Nuevos Usuarios</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey="New Users" stroke="#BC8CF2" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
