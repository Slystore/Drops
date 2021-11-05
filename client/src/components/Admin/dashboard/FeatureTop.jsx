import { border } from '@mui/system';
import React from 'react';
import "./featureTop.css"
const FeatureTop = () => {
    return (
        <div className='boxes'>
            <div className="box">
                <p className='title'>Clientes</p>
                <div className='div'>
                    <p className='number'>2150</p>
                    <span>+ 10%</span>
                </div>
                <span className="text">Comparado el ultimo mes</span>

            </div>
            <div className="box">
                <p className='title'>Visitas</p>
                <div className='div'>
                    <p className='number'> 5500</p>
                    <span>+ 15%</span>
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