import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "./map.css"

const Map = () => {
    const position = [-34.61315, -58.37723]
    return (
        <div>
            <MapContainer center={position} zoom={10}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Drops Store
                    </Popup>
                </Marker>
            </MapContainer>,
        </div>
    );
};

export default Map;