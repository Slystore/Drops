import React from 'react';
import ReactPlayer from 'react-player'
import intro from '../../assets/intro.mp4';
import './Brand.css'

function Brand() {
    return (
        <div className="ContainerBrand">
            <ReactPlayer url={intro}  width='100%' height='100%' playing={true} controls={false} loop={true}/>
        </div>
    )
}

export default Brand
