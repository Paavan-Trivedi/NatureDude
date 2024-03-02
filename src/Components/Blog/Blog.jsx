import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import BlogData from "../../Data/Blog.json"


const Blog = () => {
  return (
    <Layout>
      <div className="w-full bg-[#DDB88C] h-[30vh] flex rounded justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#566B30]">Blog</h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <Link className="nav-link " to="/Product">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className=' row align-items-center justify-center gap-[30px] mt-5 mb-5  '>
          {
            BlogData&&BlogData.map((item,index)=>(
              <div key={item.id} className='h-[400px] w-[100%]  border col-lg-5 col-md-10 bg-[#DDB88C]'>
                <img src='' className='  h-[50%]' alt={item.Title}></img>
                <Link to={`/blog/${item.id}`} className=' nav-link text-[35px]  hover:text-[#566B30]'><h3>{item.Title}</h3></Link>
                <p className='textellipsis'>{item.Description}</p>
                <Link to={`/blog/${item.id}`} className=' nav-link text-[35px] text-end hover:text-[#566B30]'>Read More </Link>
              </div>
            ))

          }
        </div>
    </Layout>
  )
}

export default Blog
