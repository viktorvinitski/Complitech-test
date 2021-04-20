import React, {Component} from 'react';
import styles from './MyMap.module.css'
import mapData from './../../data/floor.json'
import 'leaflet/dist/leaflet.css'
import {MapContainer, GeoJSON} from "react-leaflet";


class MyMap extends Component {

    render() {
        return (
            <div className={styles.container}>
                <MapContainer
                    className={styles.mapItem}
                    zoom={20}
                    center={[53.91712929154794 , 27.63485423374176]}
                >
                    <GeoJSON data={mapData.features}/>
                </MapContainer>
            </div>
        )
    }
}


export default MyMap
