import React from 'react'

const Footer = () => {

    const CurrentYear=new Date().getFullYear()
  return (
    <div className=' bg-black text-[white] h-[60px] flex justify-center align-items-center'>
<p>copyright @{CurrentYear} All Rights Reserved Tea shop</p>
      
    </div>
  )
}

export default Footer
