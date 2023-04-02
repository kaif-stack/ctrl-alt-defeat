import React from 'react'
import { useGeolocated } from "react-geolocated";
import { useState, useEffect } from 'react';

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import "./style.css"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Index = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        }); 

        useEffect(() => {
          fetch("/allbusiness")
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Network response was not ok.');
            })
            .then(b => {
              setBusinesses(b.business);
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
        }, []);

        const [businesses, setBusinesses] = useState([
            { name: "Mcd", lat: 28.6759163, lng: 77.3198015 },
            { name: "Murliwala", lat: 28.6812784, lng: 77.3205532 },
            { name: "MSIT", lat: 28.6206903, lng: 77.0898796 },
            { name: "Hyundai Sho", lat: 28.6835286, lng: 77.4224202 },
            { name: "Pacific", lat: 28.6340945, lng: 77.0987653 },
            { name: "India Gate", lat: 28.6394255, lng: 77.2430126 },
            { name: "Lotus Temple", lat: 28.5814392, lng: 77.2607739 },
            { name: "EOD", lat: 28.6189922, lng: 77.3404101},
            { name: "WOW", lat: 28.5556702, lng: 77.2970889 },
            { name: "NSIT", lat: 28.6035327, lng: 77.034472 },
            { name: "DTU east campus", lat: 28.6689455, lng: 77.3012882 },
            { name: "Red Fort", lat: 28.6596051, lng: 77.2279095 },
            { name: "Pitampura", lat: 28.7036738, lng: 77.1061207 },
            { name: "GTB", lat: 28.6808761, lng: 77.3130198 },
          ]);
          
      const [userLocation, setUserLocation] = useState(null);
      const [nearestBusinesses, setNearestBusinesses] = useState([]);
    
      useEffect(() => {
        // get the user's location using the browser's Geolocation API
        if (coords) {
          setUserLocation({
            lat: coords.latitude,
            lng: coords.longitude
          });
        }
      }, [coords]);
    
      useEffect(() => {
        // calculate the distance between the user's location and each business
        if (userLocation) {
          const businessesWithDistance = businesses.map(business => {
            const distance = getDistanceFromLatLonInKm(
              userLocation.lat,
              userLocation.lng,
              business.lat,
              business.lng
            );
            return { ...business, distance };
          });
    
          // sort the businesses by their distance from the user's location
          const sortedBusinesses = businessesWithDistance.sort((a, b) => {
            return a.distance - b.distance;
          });
    
          // set the nearest businesses to the state
          setNearestBusinesses(sortedBusinesses);
        }
      }, [userLocation, businesses]);
    
      // Haversine formula to calculate distance between two points
      function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const earthRadiusKm = 6371;
    
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
    
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadiusKm * c;
    
        return distance;
      }
    
      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
      const firstFive = nearestBusinesses.slice(0,5);
      // console.log(firstFive[0])
      // const first=firstFive[0];
      // console.log(first.lat)
      const marker = { lat: 28.6808761, lng: 77.3130198 };
      const marker2 = { lat: 28.6808761, lng: 78.3130198 };
      function displayMarkers()
        {businesses.map((a) => {<Marker position={[a.lat, a.lng]}></Marker>})}
      
  return (
    <div>
        <ul>
        {firstFive.map((business, index) => (
          <li key={index}>{business.name} ({business.distance} km away)</li>
        ))}
      </ul>
      <MapContainer
              center={businesses[0]}
              zoom={12}
              className="static-map"
            //   {...interactionOptions}
            >
              <TileLayer url={osm.maptiler.url} />
              <Marker position={[marker.lat, marker.lng]}></Marker>
              <Marker position={[marker2.lat, marker2.lng]}></Marker>
              {/* {displayMarkers} */}
              {firstFive.length > 0 &&
                firstFive.map((marker) => (
                  <Marker
                    position={[marker.lat, marker.lng]}>
                  </Marker>
                ))}
            </MapContainer>
    </div>
  )
}

export default Index