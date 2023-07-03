import { React} from 'react'

const Hero = ({address}) => {



  return (
    <>

        <section className='relative z-20 '>

          <div className='flex  md:flex-row sm sm:flex-col shadow-lg bg-white lg:py-8 md:py-5 rounded-[0.5rem] lg:left-[37rem] md:left-[6.5rem] sm:left-[15%] lg:-top-[5rem] md:-top-[3.5rem] sm:-top-[8rem] absolute'>
            <div className=' sm:px-16 sm:py-5 md:py-0 flex flex-col  md:items-start  sm:items-center  md:border-e-[0.15rem]  '>
              <h1 className='text-secondary uppercase font-bold pb-1 lg:text-[0.8rem] text-[0.70rem] '>ip address</h1>
              <h1 className='font-medium lg:text-lg text-base md:mr-4 lg:mr-4  '>{address.ip}</h1>

            </div>

            <div className=' sm:px-16  sm:pb-5 flex flex-col  md:items-start sm:items-center md:border-e-[0.15rem] '>
              <h1 className='text-secondary uppercase font-bold pb-1 lg:text-[0.8rem] text-[0.70rem] '>location</h1>
              <h1 className='font-medium capitalize lg:text-lg text-base md:w-[90%] md:mr-4 lg:mr-4 '>{address.location.city}</h1>
            </div>

            <div className=' sm:px-16  sm:pb-5 flex flex-col  md:items-start sm:items-center md:border-e-[0.15rem] '>
              <h1 className='text-secondary uppercase font-bold pb-1 lg:text-[0.8rem] text-[0.70rem] '>timezone</h1>
              <h1 className='font-medium uppercase lg:text-lg text-base md:mr-4 lg:mr-4  '>{address.location.timezone} UTC</h1>
            </div>

            <div className=' sm:px-16  sm:pb-5 flex flex-col  md:items-start sm:items-center'>
              <h1 className='text-secondary uppercase font-bold pb-1 lg:text-[0.8rem] text-[0.70rem] '>isp</h1>
              <h1 className='font-medium capitalize lg:w-[90%]  lg:text-lg text-base  sm:w-[8rem] sm:text-center  '>{address.isp}</h1>
            </div>

          </div>


        </section>





    </>
  )
}

export default Hero
