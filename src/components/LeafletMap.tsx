import React, { useEffect, useRef, useState } from "react";

interface Landmark {
  id: string;
  name: string;
  desc: string;
  lat: number;
  lng: number;
  color: string; // bg-brand-purple, bg-brand-green, etc.
}

interface LeafletMapProps {
  activePin: string;
  onActivePinChange: (id: string) => void;
  landmarks: Landmark[];
}

export default function LeafletMap({ activePin, onActivePinChange, landmarks }: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Check and wait for global Leaflet (L) from index.html
  useEffect(() => {
    const checkL = () => {
      if ((window as any).L) {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkL()) return;

    const interval = setInterval(() => {
      if (checkL()) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Initialize the map and markers
  useEffect(() => {
    if (!isLoaded || !mapContainerRef.current) return;

    const L = (window as any).L;
    if (!L) return;

    // Base coordinates (Goma Himbi 1, Avenue Présidentielle)
    const centerLatLng = [-1.6775, 29.2155];

    // Create Map if it doesn't exist yet
    if (!mapRef.current) {
      try {
        const map = L.map(mapContainerRef.current, {
          center: centerLatLng,
          zoom: 15,
          zoomControl: true,
          scrollWheelZoom: false, // Prevent page scroll hijacking
        });

        // Add a high-contrast elegant tile layer
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }).addTo(map);

        mapRef.current = map;

        // CRITICAL FIX: Invalidate map size after a short delay so tiles load perfectly
        setTimeout(() => {
          map.invalidateSize();
        }, 300);
      } catch (err) {
        console.error("Error creating map", err);
      }
    }

    const map = mapRef.current;
    if (!map) return;

    const markers: Record<string, any> = {};

    // Clear any existing markers before rendering new ones
    Object.entries(markersRef.current).forEach(([_, marker]) => {
      (marker as any).remove();
    });

    // Add landmarks pins to the map
    landmarks.forEach((landmark) => {
      const colorHex = landmark.id === "hq" 
        ? "#6d28d9" // purple-700
        : landmark.id === "school" 
          ? "#10b981" // emerald-500
          : landmark.id === "clinic"
            ? "#ef4444" // red-500
            : "#f59e0b"; // amber-500

      const pingColorHex = landmark.id === "hq" ? "rgba(109, 40, 217, 0.4)" : "rgba(16, 185, 129, 0.4)";

      // Create beautiful custom HTML pin markers
      const iconHtml = `
        <div class="relative flex items-center justify-center cursor-pointer" style="width: 32px; height: 32px;">
          <span class="absolute inline-flex h-8 w-8 rounded-full animate-ping opacity-75" style="background-color: ${pingColorHex}; left: 0; top: 0;"></span>
          <div class="w-7 h-7 rounded-full flex items-center justify-center border-2 border-white text-white shadow-lg transition-transform duration-200 transform hover:scale-110" style="background-color: ${colorHex};">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: "custom-goma-marker-wrapper",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -12],
      });

      const marker = L.marker([landmark.lat, landmark.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-1.5 text-left" style="font-family: system-ui, sans-serif; min-width: 140px;">
            <strong class="block text-sm text-slate-900 font-bold" style="margin-bottom: 2px;">${landmark.name}</strong>
            <span class="text-xs text-slate-500 leading-normal block">${landmark.desc}</span>
          </div>
        `);

      marker.on("click", () => {
        onActivePinChange(landmark.id);
      });

      markers[landmark.id] = marker;
    });

    markersRef.current = markers;

    // Trigger map invalidation on window resize too
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, landmarks]);

  // Handle active pin switching (fly smoothly to focus point and open popup)
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;
    const targetLandmark = landmarks.find((l) => l.id === activePin);
    if (targetLandmark) {
      mapRef.current.flyTo([targetLandmark.lat, targetLandmark.lng], 16, {
        duration: 1.2,
      });

      const marker = markersRef.current[activePin];
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 1200);
      }
    }
  }, [activePin, isLoaded, landmarks]);

  // Clean up Leaflet on component unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-[220px] bg-slate-100 rounded-2xl border border-slate-300 flex flex-col items-center justify-center space-y-2">
        <div className="w-6 h-6 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
        <span className="text-gray-400 text-xs font-mono">Chargement de la carte de Goma...</span>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[220px] rounded-2xl border border-slate-200 overflow-hidden shadow-sm z-10"
      style={{ minHeight: "220px" }}
    />
  );
}
