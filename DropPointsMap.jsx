bimport React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
 
// Fix default icon issue with Leaflet in React (icons not showing)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const centerPosition = [-7.7956, 110.3695]; // Yogyakarta center as per user request

function DropPointsMap({ dropPoints }) {
  return (
    <MapContainer center={centerPosition} zoom={12} style={{ height: '90vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dropPoints.map((point) => (
        <Marker key={point.id} position={[point.lat, point.lng]}>
          <Popup>
            <div>
              <strong>{point.name}</strong><br />
              Status: <span style={{ color: point.isOpen ? 'green' : 'red' }}>
                {point.isOpen ? 'Buka' : 'Tutup'}
              </span><br />
              {point.description}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default DropPointsMap;
