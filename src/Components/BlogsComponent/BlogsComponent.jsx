import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Data from "../../Data/Blog.json";

const BlogsComponent = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState(Data[params.id - 1]);
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
          <p className=" text-justify">{blogData.Description}</p>
          {blogData.others.map((item, index) => (
            <div className="" key={index}>
              <h4 className="#566B30">{item.title}</h4>
              <p className=" text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsComponent;
