import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className=' flex'>
        <Navbar></Navbar>
<div className='w-[100%] px-1'>
        {children}
      <Footer></Footer>
        </div>      
    </div>
  )
}

export default Layout
