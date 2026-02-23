"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    name: "Gaza Office",
    position: [31.5017, 34.4668] as [number, number],
    description: "Main Office – Gaza City",
  },
  {
    name: "Nuseirat Office",
    position: [31.4473, 34.3925] as [number, number],
    description: "Branch Office – Nuseirat Camp",
  },
];

const ContactMap = () => {
  return (
    <MapContainer
      center={[31.48, 34.43]} // منتصف غزة تقريبًا
      zoom={12}
      className="h-[350px] w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ContactMap;
