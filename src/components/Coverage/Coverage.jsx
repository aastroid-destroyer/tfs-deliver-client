import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router'
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
    const wareHouses = useLoaderData();

    const position = [23.6850, 90.3563]

    return (
        <div>
            <MapContainer
                className='w-full h-[590px]'
                center={position}
                zoom={8}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    wareHouses.map((data, index) => (
                        <Marker
                            key={index}
                            position={[data.latitude, data.longitude]}
                        >
                            <Popup>
                                <div>
                                    <h2>{data.city}</h2>
                                    <p>{data.covered_area.join(', ')}</p>
                                    <p>Status: {data.status}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    )
}

export default Coverage