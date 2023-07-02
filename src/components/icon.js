import * as L from 'leaflet'
import { iconLocation } from '../assets'

export default L.icon({
    iconUrl: iconLocation,
    iconRetinaUrl: iconLocation,
    popupAnchor: [-0,-0],
    iconSize: [46,55]
  })