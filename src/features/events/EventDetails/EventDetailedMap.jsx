import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='orange' />;

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14;
  return (
    <Segment attached='bottom'>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDexVwoh02BY7IYdSi0cI20dkUF7SwzmpM' }}
          defaultCenter={(lat, lng)}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
