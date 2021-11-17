import React from 'react';
import "./featureTop.css"
const FeatureTop = (usersCount, difer, ordersCount, difSales) => {
  
    return (
        <div className='boxes'>
            <div className="box">
                <p className='title'>Clientes</p>
                <div className='div'>
                    <p className='number'>{usersCount.users.users}</p>
                    <span>+{usersCount.difer}%</span>
                </div>
                <span className="text">Comparado el ultimo mes</span>

            </div>
            <div className="box">
                <p className='title'>Facturación</p>
                <div className='div'>
                    <p className='number'>{usersCount.sales} $</p>
                    <span>+{usersCount.difSales}%</span>
                </div>
                <span className="text">Comparado el ultimo mes</span>

            </div>
            <div className="box">
                <p className='title'>Ganancias</p>
                <div className="div">
                    <p className='number'> 6750</p>
                    <span >+ 30%</span>
                </div>
                <span className="text">Comparado el ultimo mes</span>

            </div>

        </div>
    );
};

export default FeatureTop;