import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  setTooltipContent
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const IncomeMap = () => {
  return (
    <ComposableMap
    className="map"
      projectionConfig={{
        scale: 150
      }}
    >
      <ZoomableGroup>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="gainsboro"
              stroke="#D6D6DA"
              onMouseEnter={() => {
                setTooltipContent(`${geo.properties.name}`);
            }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "lightblue",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
            }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="skyblue" stroke="royalblue" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D",fontSize:"10px" }}
          >
            {name}
          </text>
        </Marker>
      ))}
       </ZoomableGroup>
    </ComposableMap>
  );
};

export default IncomeMap;
