import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {
  return (
    <div className=' bg-[#e6c4c4] h-[100vh] w-[25%]'>
        <div className=' boredr border-b-4 border-[#7DAF19] pb-10'>
            <img src='images/logo.png'></img>

        </div>
        

        <div className=' flex flex-col justify-center align-items-center gap-4 py-3 boredr border-b-4 border-[#7DAF19] pb-10'>
        <Link  to="/"  className=' text-[#674422] active:text-[#db5b5b]  text-decoration-none'>Home</Link>
        <Link to="/WhyUs" className=' text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none'>Why Us?</Link>
        <Link to="/Product" className=' text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none'>Product Category</Link>
        <Link to="/Blog" className=' text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none'>Blog</Link>
        <Link to="/AboutUs" className=' text-[#674422] active:text-[brown] hover:text-[rgb(165,42,42)] text-decoration-none'>About Us</Link>
        <Link to="/ContactUs" className=' text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none'>Contact Us</Link>


        </div>
        <div className="flex justify-center gap-4 text-[#674422] py-3 border-b-4 border-[#7DAF19] pb-10">
        <a href="#" className="text-[#674422]" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
        <a href="#" className="text-[#674422]" target="_blank"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
        <a href="#" className="text-[#674422]" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
        <a href="#" className="text-[#674422]" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>


 
     
          
 
        </div>
    </div>
  )
}

export default Navbar
