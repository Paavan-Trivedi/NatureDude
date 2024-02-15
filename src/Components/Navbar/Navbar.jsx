import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-[#DDB88C] h-[100vh] w-[25%]'>
        <div className=' boredr border-b-2 border-[brown] pb-10'>
            <img src='images/logo.png'></img>

        </div>
        

        <div className=' flex flex-col justify-center align-items-center gap-4 py-3'>
        <NavLink exact to="/" activeClassName='active-navlink' className=' text-[white] active:text-[brown] hover:text-[brown] text-decoration-none'>Home</NavLink>
        <NavLink to="/whyus" className=' text-[white] active:text-[brown] hover:text-[brown] text-decoration-none'>Why Us?</NavLink>
        <NavLink to="/category" className=' text-[white] active:text-[brown] hover:text-[brown] text-decoration-none'>Product Category</NavLink>
        <NavLink to="/blog" className=' text-[white] active:text-[brown] hover:text-[brown] text-decoration-none'>Blog</NavLink>
        <NavLink to="/about" className=' text-[white] active:text-[brown] hover:text-[rgb(165,42,42)] text-decoration-none'>About Us</NavLink>
        <NavLink to="/contact" className=' text-[white] active:text-[brown] hover:text-[brown] text-decoration-none'>Contact Us</NavLink>


        </div>
    </div>
  )
}

export default Navbar
