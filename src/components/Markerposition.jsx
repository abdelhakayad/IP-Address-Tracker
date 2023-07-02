import React, { useEffect } from "react"
import { Marker,Popup, useMap } from "react-leaflet"
import icon from "./icon"

export default function Markerposition({address}){

    const position =[address.location.lat,address.location.lng]
    const map = useMap()

    useEffect (()=> {
      map.flyTo(position, 13 , {
        animate : true })
    }, [map,position])

    return (
        <>
        <Marker position={position}
            icon={icon}
          >
            <Popup >
              <b>Country </b>: {address.location.country}
              <br/> <b>Region :</b>{address.location.region} <br /> <b>City:</b> {address.location.city}
              <br/> <b>Lat:</b> {address.location.lat} <br/> <b>Lng: </b>{address.location.lng}
              <br/> <b>Postal Code:</b> {address.location.postalCode}
            </Popup>
          </Marker>
        </>
    )
}