import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface Address {
    address: string;
    label: string;
}

interface MapComponentProps {
    addresses: Address[];
}

const MapComponent: React.FC<MapComponentProps> = ({ addresses }) => {
    const [placemarks, setPlacemarks] = useState<{coordinates: number[], label: string}[]>([]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const updatedPlacemarks: {coordinates: number[], label: string}[] = [];
                for (const address of addresses) {
                    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=bcab05a6-54b1-440f-ad20-ab56a61617e8&geocode=${encodeURIComponent(address.address)}`);
                    const data = await response.json();
                    const geoObjects = data.response.GeoObjectCollection.featureMember;
                    if (geoObjects && geoObjects.length > 0) {
                        const coordinates = geoObjects[0].GeoObject.Point.pos.split(' ').map(Number);
                        updatedPlacemarks.push({ coordinates: [coordinates[1], coordinates[0]], label: address.label });
                    } else {
                        console.error(`No coordinates found for address: ${address.address}`);
                    }
                }
                setPlacemarks(updatedPlacemarks);
            } catch (error) {
                console.error('Failed to fetch coordinates:', error);
            }
        };

        fetchCoordinates();
    }, [addresses]);

    console.log(placemarks)

    return (
        <YMaps query={{ apikey: 'bcab05a6-54b1-440f-ad20-ab56a61617e8' }}>
            <div>
                <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} style={{ width: '100%', height: '400px' }}>
                    {placemarks.map((placemark, index) => (
                        <Placemark key={index} geometry={placemark.coordinates} properties={{ balloonContent: placemark.label }} />
                    ))}
                </Map>
            </div>
        </YMaps>
    );
};

export default MapComponent;
