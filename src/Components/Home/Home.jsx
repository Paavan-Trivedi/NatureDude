import React from 'react'
import Navbar from '../Navbar/Navbar'
import Layout from '../Layout/Layout'
import Slider from '../Functionality/Slider/Slider'
import Service from "../../Data/ServiceCapability.json"

const Home = () => {
  const Service_data=Service
  console.log(Service_data)
  return (
   
        <Layout>

            <Slider></Slider>
            <div className=' my-16'>
              <h2 className=' text-[red] text-center mb-5'>Service Capability</h2>
            <div className=' flex flex-wrap justify-content-center align-items-center gap-3 '>
              { 
                Service&&Service.map((item,index)=>(
                  <div className=' hover:bg-[red] d-flex rounded  flex-column justify-content-center gap-4 align-items-center h-[200px] w-[250px] border-[1px] border-[black] ' key={index}>
                    <img src={item.icon} className='h-[15%] w-[13%]'></img>
                    <h4>{item.name}</h4>

                  </div>
                ))

              }

            </div></div>

        </Layout>
    
  )
}

export default Home
