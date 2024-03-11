import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Data from "../../Data/ProductData.json";
import { Link } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="poppins">
        <div className="w-full bg-[#FAEADD] h-[30vh] flex rounded-b justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#566B30]">Products</h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <Link className="nav-link " to="/Product">
                Product
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center gap-3 align-items-center m-2">
          {Data &&
            Data.map((item, index) => (
              <Link
                key={index}
                to={`/Product/${item.product_name}`}
                className=" nav-link"
              >
                <div className=" w-[290px] h-[400px] rounded bg-[white] mb-2 ">
                  <div className="image 80% rounded-t">
                    <img src={item.image} className="img "></img>
                  </div>
                  <div className=" border-[3px] rounded-b border-[#566B30] h-[20%] flex justify-center align-items-center">
                    <h4 className=" text-center">{item.product_name}</h4>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
