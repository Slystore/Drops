import React from 'react';
import ReactPlayer from 'react-player'
import intro from '../../assets/intro.mp4';
import './Brand.css'

function Brand() {
    return (
        <div className="ContainerBrand">
            {/* <ReactPlayer url={intro} width='1520px' height='700px' playing="true" controls="true"/> */}
            <ReactPlayer url={intro}  width='100%' height='100%' playing="true" controls="false" loop="true" onReady/>
        </div>
    )
}

export default Brand
