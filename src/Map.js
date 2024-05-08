import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function MyGoogleMap() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <div className='map'>
              <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, like markers, info windows, etc. here */}
        <Marker position={center} />
      </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default React.memo(MyGoogleMap);
