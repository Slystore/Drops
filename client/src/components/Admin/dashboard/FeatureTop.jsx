import React from 'react';
import "./featureTop.css"
const FeatureTop = (usersCount, difer, ordersCount, difSales, difGanancias) => {
  console.log(usersCount, difGanancias,"valoye")
    return (
        <div className='boxes'>
            <div className="box">
                <p className='title'>Clientes activos</p>
                <div className='div'>
                    <p className='number'>{usersCount.users.users}</p>
                    {/* <span>+{usersCount.difer}%</span> */}
                </div>
                {/* <span className="text">Comparado el ultimo mes</span> */}

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
                    <p className='number'>{usersCount.gananciasNov} </p>
                    <span >+ {usersCount.difGanancias}%</span>
                </div>
                <span className="text">Comparado el ultimo mes</span>

            </div>

        </div>
    );
};

export default FeatureTop;