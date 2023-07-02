import { React} from 'react'
import { MapContainer,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markerposition from './Markerposition'

const Hero = ({address}) => {

  return (
     <>
        <section>
        <MapContainer center={[address.location.lat,address.location.lng]}
          zoom={13} scrollWheelZoom={true}
          style={{
            width:'100vw',
            height:'100vh',
            zIndex:2,
          }}>
          <TileLayer
            attribution='; <a href="https://www.openstreetmap.org/copyright"></a> '
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markerposition address={address} />
        </MapContainer>
        </section>
     </>
  )
}

export default Hero