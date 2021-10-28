import React from 'react';
import img1 from '../../assets/nikeAirForce1.jpg';
import img2 from '../../assets/airJordan1.jpg';
import img3 from '../../assets/thunderSpectra.jpg';
import img4 from '../../assets/yeezy500.jpg';
import img5 from '../../assets/vans.jpg';
import './Home.css';

function Home() {
    return (
        <div className="HomeContainer">
            <div className="Images">
                <div className="hvr-pop divTitle" style={{float: 'left', marginRight: 10}}>
                    <div className="Title">DROPS</div>
                    <img src={img1} height="600"/>
                </div>
                <div className="hvr-pop divTitle2" style={{float: 'left', marginRight: 10, marginBottom: 5}}>
                    <div className="Title2">DROPS</div>
                    <img src={img2} height="285"/>
                </div>
                <div className="hvr-pop divTitle3" style={{float: 'left'}}>
                    <div className="Title3">DROPS</div>
                    <img src={img3} height="235"/
                ></div>
                <div className="hvr-pop divTitle4" style={{float: 'left', marginRight: 10,}}>
                    <div className="Title4">DROPS</div>
                    <img src={img4} height="306"/>
                </div>
                <div className="hvr-pop divTitle5" style={{float: 'left', position:'relative', bottom: 47}}>
                    <div className="Title5">DROPS</div>
                    <img src={img5} height="352"/>
                </div>
            </div>
        </div>
    )
}

export default Home
