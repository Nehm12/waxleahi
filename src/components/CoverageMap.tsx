"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { name: "Cotonou", lat: 6.4969, lng: 2.4291, zones: 12, coverage: 100 },
  { name: "Calavi", lat: 6.4547, lng: 2.3665, zones: 10, coverage: 95 },
  { name: "Porto-Novo", lat: 6.4892, lng: 2.6289, zones: 8, coverage: 85 },
  { name: "Parakou", lat: 9.3412, lng: 2.6189, zones: 7, coverage: 80 },
  { name: "Abomey", lat: 7.1898, lng: 1.9854, zones: 5, coverage: 75 },
  { name: "Natitingou", lat: 10.3047, lng: 1.3773, zones: 4, coverage: 70 },
];

// Custom orange icon SVG
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div class="flex flex-col items-center">
        <div class="bg-brand-orange text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg font-bold text-sm">
          📍
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: "custom-icon",
  });
};

export default function CoverageMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current, {
      center: [8.5, 2.5],
      zoom: 7,
      scrollWheelZoom: true,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add markers
    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon(),
      }).addTo(map.current!);

      const popupContent = `
        <div class="text-center p-2">
          <h3 class="font-bold text-base text-gray-800">${location.name}</h3>
          <p class="text-xs text-gray-600 mt-1">${location.zones} quartiers · ${location.coverage}% couvert</p>
          <div class="mt-2 w-32 bg-gray-200 rounded-full h-1">
            <div class="bg-orange-500 h-1 rounded-full" style="width: ${location.coverage}%"></div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full rounded-xl"
      style={{ height: "500px" }}
    />
  );
}
