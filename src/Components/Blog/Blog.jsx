import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import BlogData from "../../Data/Blog.json";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <div className="w-full bg-[#FAEADD] h-[30vh] flex rounded-b justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#7DAF19]">Blog</h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <p className="nav-link " to="/Product">
                Blog
              </p>
            </div>
          </div>
        </div>
        <div className=" row blog-main align-items-center justify-center gap-[30px] mt-5  mb-5 ">
          {BlogData &&
            BlogData.map((item, index) => (
              <div
                key={item.id}
                className="h-[570px] shadow-lg col-lg-5 col-md-6 col-sm-8 col-9  p-2"
              >
                <img
                  src={item.image}
                  className=" img-blog   h-[60%] w-[100%]"
                  alt={item.Title}
                ></img>

                <Link
                  to={`/blog/${item.id}`}
                  className=" hover:text-[#566B30] text-[#4C180A] text-[16px] text-decoration-none"
                >
                  <h3>{item.Title}</h3>
                </Link>
                <p className="textellipsis">{item.Description}</p>
                <Link
                  to={`/blog/${item.id}`}
                  className=" hover:text-[#566B30]  text-decoration-none text-[16px] flex justify-end text-end text-[#4C180A]"
                >
                  Read More{" "}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
