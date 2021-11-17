import React, { useEffect } from 'react';
import FeatureTop from './FeatureTop';
import Chart from './Chart';
import ChartTwo from './ChartTwo';
import { getUsersCount } from '../../../redux/dashboard/dashAction';
import { useDispatch, useSelector } from 'react-redux';
const Dashboard = () => {
    const dispatch= useDispatch();
    const {usersCount} = useSelector(state=>state.dashReducer);
    useEffect(() => {
        dispatch(getUsersCount())   
    }, [])
    const data = [ {
        name: "Octubre",
        Users: 10,
      },
      {
        name: "Noviembre",
        Users: usersCount.users,
      },]
      let diferencia= Math.ceil(((data[data.length-1].Users/data[data.length-2].Users)-1)*100);
      console.log(diferencia);
    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <FeatureTop users={usersCount} difer={diferencia}/>
            <Chart users={usersCount} />
            <ChartTwo />
        </div>
    );
};

export default Dashboard;