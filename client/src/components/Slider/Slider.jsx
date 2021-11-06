import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'

function Slider(props) {
    
    
    return (
        <div className="SliderContainer">
            <div className="SliderTitle"><h1>Marcas más vendidas</h1></div>
            <Carousel controls={false} fade={false} style={{width:'50%', height:'200px', marginTop:'10px'}}>
                <Carousel.Item>
                    <div className="Slider">
                        <div className="Marca1"></div>
                        <div className="Marca2"></div>
                        <div className="Marca3"></div>
                        <div className="Marca4"></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Slider">
                        <div className="Marca5"></div>
                        <div className="Marca6"></div>
                        <div className="Marca7"></div>
                        <div className="Marca8"></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Slider">
                        <div className="Marca9"></div>
                        <div className="Marca10"></div>
                        <div className="Marca11"></div>
                        <div className="Marca12"></div>
                    </div>
                </Carousel.Item>
            </Carousel>
           
            {/* <div className="Slider">
                <div className="Marca1"></div>
                <div className="Marca2"></div>
                <div className="Marca3"></div>
                <div className="Marca4"></div>
                <div className="Marca5"></div>
                <div className="Marca6"></div>
            </div> */}
        </div>
    )
}



export default Slider
