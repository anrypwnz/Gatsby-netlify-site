import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


export default function MapBlock() {

  const mapData = {
    center: [55.761462, 37.634452],
    zoom: 14.5,
  };

  const coordinates = [55.761462, 37.634452];

  return (
    <YMaps>
      <Map defaultState={mapData} width={'100%'} height={'400px'}>
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  )
}
