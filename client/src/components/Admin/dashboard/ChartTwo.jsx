import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getBrands } from '../../../redux/brand/brandActions.js';
import {getProductQuantity} from '../../../redux/dashboard/dashAction.js';

const ChartTwo = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getProductQuantity());
    }, [dispatch]);

    const data = []; 
    const brands = useSelector((state) => state.brandReducer.brands);
    const productQuantity = useSelector((state) => state.dashReducer.productQuantity);

    let brandNames = brands.map(el => el.name);
    let productCount = productQuantity.map(el => el.data.data.count)
    
    console.log(brandNames)
    for(let i = 0; i < brandNames.length; i++){
        data.push({name: brandNames[i], quantity: ''});
    }

    for(let i = 0; i < data.length; i++){
        data[i].quantity = productCount[i];
    }

    return (
        <div className="graphic">
            <p className="chartTitle" style={{ marginLeft: 23 }}>Marcas mas Populares</p>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart width={100} height={40} data={data}>
                    <XAxis dataKey="name" stroke="#555" />
                    <Bar dataKey="quantity" fill="#BC8CF2" />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartTwo;