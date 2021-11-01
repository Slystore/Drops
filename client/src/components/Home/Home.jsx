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
                <div className="hvr-pop divTitle">
                    <div className="Title">DROPS</div>
                </div>
                <div className="hvr-pop divTitle2" >
                    <div className="Title2">DROPS</div>
                </div>
                <div className="hvr-pop divTitle4">
                    <div className="Title4">DROPS</div>
                </div>
               <div className="hvr-pop divTitle3">
                    <div className="Title3">DROPS</div>
                </div>
                <div className="hvr-pop divTitle5" >
                    <div className="Title5">DROPS</div>
                </div>
            </div>
        </div>
    )
}

export default Home


// <div className="hvr-pop divTitle" style={{float: 'left', marginRight: 10}}>
// <div className="Title">DROPS</div>
// <img src={img1} className="Img1" alt="imagen1"/>
// </div>