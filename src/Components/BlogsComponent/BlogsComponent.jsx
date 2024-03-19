import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Data from "../../Data/Blog.json";

const BlogsComponent = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState(Data[params.id - 1]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <div className="w-full bg-[#FAEADD] h-[30vh] flex rounded-b justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#7DAF19] w-[30%] textellipsis text-center">
              {blogData.Title}
            </h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <Link className="nav-link " to="/Blog">
                Blog
              </Link>
              /{params.id}
            </div>
          </div>
        </div>

        <div className=" container mb-5 mt-5">
          <h2 className=" text-[#4C180A]">{blogData.Title}</h2>
         {/* <img src={blogData.image} className="h-[500px] "></img> */}
          <p className=" text-justify">{blogData.Description}</p>

          {blogData.others.map((item, index) => (
            <div className=" mb-5" key={index}>
              <h4 className=" mb-3">{item.title}</h4>
              
              <p className=" text-justify">{item.description}</p>
              {item.description2 &&(
              <p className=" text-justify">{item.description2}</p>)}


              {item.list&&item.list.map((item, index) => (
              <ul className=" text-justify" key={index}>
                <li>- {item}</li>
              </ul>

              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsComponent;
