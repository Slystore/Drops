import React, { useEffect, useState } from 'react';
import FeatureTop from './FeatureTop';
import Chart from './Chart';
import ChartTwo from './ChartTwo';
import { getOrdersCount, getUsersCount } from '../../../redux/dashboard/dashAction';
import { useDispatch, useSelector } from 'react-redux';
import ChartSales from './ChartSales';

const Dashboard = () => {
    const dispatch= useDispatch();
    const {usersCount} = useSelector(state=>state.dashReducer);
    const {ordersCount} = useSelector(state=>state.dashReducer);
    const [cost, setCost] = useState(0);
    useEffect(() => {
        dispatch(getUsersCount())   
        dispatch(getOrdersCount())
    }, [])
    const data = [ {
        name: "Octubre",
        Users: 10,
      },
      {
        name: "Noviembre",
        Users: usersCount.users,
      },]
      const data2 = [
      {
        name: "Octubre",
        sales: 6100,
      },
      {
        name: "Noviembre",
        sales: ordersCount,
      },
    ]
    const data3 = [
      {
        name: "Octubre",
        costos: 5100,
      },
      {
        name: "Noviembre",
        costos: cost,
      },
    ]
      let diferencia= Math.ceil(((data[data.length-1].Users/data[data.length-2].Users)-1)*100);
      let difSales= Math.ceil(((data2[data2.length-1].sales/data2[data2.length-2].sales)-1)*100);
      let gananciasNov= Math.ceil((data2[data2.length-1].sales-data3[data3.length-1].costos));
      let gananciasOct= Math.ceil((data2[data2.length-2].sales-data3[data3.length-2].costos));
      let difGanancias= Math.ceil(((gananciasNov/gananciasOct)-1)*100);
      function handleChange(e){
        e.preventDefault();
        setCost(e.target.value);
      }
    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <FeatureTop users={usersCount} difer={diferencia} sales={ordersCount}
            difSales={difSales} difGanancias={cost?difGanancias:null} gananciasNov={cost?gananciasNov:null}/>
            <input  type="number" placeholder="Costos totales..." onChange={handleChange} />
            <Chart users={usersCount} />
            <ChartSales sales={ordersCount}/>
            <ChartTwo />
        </div>
    );
};

export default Dashboard;