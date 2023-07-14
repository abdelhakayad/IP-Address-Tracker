import { React, useState, useEffect } from 'react'
import Style from '../Style'
import { iconArrow } from '../assets'
import Hero from './Hero'
import Map from './Map'

const Nav = () => {

  const [address, setAddress] = useState(null)
  const [ipAddress, setIpAddress] = useState("")
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_FaNwNVTNtafLPS0vG5ZjElB018V8r`)
        const data = await res.json()
        setAddress(data)
      }

      getData()

    } catch (error) {
      console.trace(error)
    }

  }, [])

  async function getNewAddress(){
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_FaNwNVTNtafLPS0vG5ZjElB018V8r&${
        checkIpAddress.test(ipAddress)
        ? `ipAddress=${ipAddress}`
        : checkDomain.test(ipAddress)
        ? `domain=${ipAddress}`
        :""
      }`)
      const data = await res.json()
      setAddress(data)

  }

  function handleSubmit(e){
    e.preventDefault()
    getNewAddress()
    setIpAddress("")
  }

  return (
    <>
      <section className={`w-full ${Style.flexCenter} `}>
        <div className="w-full z-20 bg-[url('./assets/bg-desk.png')]  bg-no-repeat bg-center bg-cover ">
          <h1 className='py-3 lg:pt-9  text-white sm:text-[1rem] md:text-[1.4rem] lg:text-[2rem] font-medium '>IP Address Tracker</h1>
          <form onSubmit={handleSubmit} autoComplete='off' className={` lg:pb-[15rem] md:pb-[6rem]  sm:pb-[10rem] ${Style.flexCenter}`}>
            <input
              className=' sm:w-[50%] md:w-[30%] p-2 lg:text-lg  lg:p-3 rounded-s-md outline-none placeholder: pl-2 text-sm placeholder:lg:text-base placeholder:sm:text-[0.75rem] '
              id="ipaddress"
              name="ipaddress"
              placeholder='Search for any IP adress or domain'
              type="text"
              required
              value={ipAddress}
              onChange={(e)=> setIpAddress(e.target.value)}
             />
            <button type="submit" className='bg-primary p-[0.77rem] lg:p-[1.21rem] rounded-e-md text-white hover:bg-secondary'><img src={iconArrow} alt="" className='w-[13px] h-[13px] object-contain' /></button>
          </form>
        </div>
      </section>
     { address && <>
      <Hero address={address}  />
      <Map address={address} />
      </>
      }
    </>
  )
}

export default Nav
