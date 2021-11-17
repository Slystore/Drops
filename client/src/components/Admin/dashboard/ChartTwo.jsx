import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartTwo = () => {

    const data = [
        {
            name: 'Nike',
            Cantidad: 10,

        },
        {
            name: 'Adidas',
            Cantidad: 10,

        },
        {
            name: 'Balenciaga',
            Cantidad: 10,

        },
        {
            name: 'Off-White',
            Cantidad: 4,

        },
        {
            name: 'Gucci',
            Cantidad: 10,

        },
        {
            name: 'Puma',
            Cantidad: 10,

        },
        {
            name: 'Rebook',
            Cantidad: 10,

        },
        {
            name: 'vans',
            Cantidad: 10,

        },
        {
            name: 'Under Armour',
            Cantidad: 10,

        },
        {
            name: 'Jordan',
            Cantidad: 10,

        },
    ];


    return (
        <div className="graphic">
            <p className="chartTitle" style={{ marginLeft: 23 }}>Marcas mas Populares</p>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart width={100} height={40} data={data}>
                    <XAxis dataKey="name" stroke="#555" />
                    <Bar dataKey="Cantidad" fill="#BC8CF2" />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartTwo;