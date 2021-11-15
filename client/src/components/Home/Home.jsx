import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="HomeContainer">
            <div className="Images">
                <div className="hvr-pop divTitle">
                    <div className="HomeContent">
                        <div className="Title">DROPS</div>
                        <p>Tendencia en calzado urbano y deportivo de las mejores marcas</p>
                    </div>
                </div>
                <div className="hvr-pop divTitle2" >
                    <div className="HomeContent2">
                        <div className="Title2">DROPS</div>
                        <p>Diseños que no encontrarás en ningún otro lado</p>
                    </div>
                </div>
                <div className="hvr-pop divTitle4">
                    <div className="HomeContent4">
                        <div className="Title4">DROPS</div>
                        <p>Sé el centro de atención a donde vayas</p>
                    </div>
                </div>
                <div className="hvr-pop divTitle3">
                    <div className="HomeContent3">
                        <div className="Title3">DROPS</div>
                        <p>Calidad y durabilidad en todos nuestros productos</p>
                    </div>
                </div>
                <div className="hvr-pop divTitle5" >
                    <div className="HomeContent5">
                        <div className="Title5">DROPS</div>
                        <p>Comodidad y estilo en tus pies</p>
                    </div>
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