import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartTwo = () => {

    const data = [
        {
            name: 'Mayo',
            gucci: 4000,
            balenciaga: 2400,
            amt: 2400,
        },
        {
            name: 'Junio',
            gucci: 3000,
            balenciaga: 1398,
            amt: 2210,
        },
        {
            name: 'Julio',
            gucci: 2000,
            balenciaga: 9800,
            amt: 2290,
        },
        {
            name: 'Agosto',
            gucci: 2780,
            balenciaga: 3908,
            amt: 2000,
        },
        {
            name: 'Septiembre',
            gucci: 1890,
            balenciaga: 4800,
            amt: 2181,
        },
        {
            name: 'Octubre',
            gucci: 2390,
            balenciaga: 3800,
            amt: 2500,
        },
        {
            name: 'Noviembre',
            gucci: 3490,
            balenciaga: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className="graphic">
            <p className="chartTitle" style={{ marginLeft: 23 }}>Marcas mas Populares</p>
            <ResponsiveContainer aspect={4 / 1}>
                <BarChart
                    width={500}
                    height={340}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="gucci" fill="#BC8CF2" />
                    <Bar dataKey="balenciaga" fill="rgb(206, 198, 253)" />

                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default ChartTwo;