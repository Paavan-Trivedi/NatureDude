import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import Data from "../../Data/ProductData.json";

const ProductRoute = () => {
  const params = useParams();
  const [productData, setProductData] = useState("");
  
  useEffect(() => {
    if(params.id){
      setProductData(Data.filter((item) => item.product_name === params.id));
    }
  }, [params.id]); // Include params.id in the dependency array

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        <div className="w-full bg-[#DDB88C] h-[30vh] flex rounded-b justify-center align-items-center">
         <div className=" text-center">
          <h2 className="text-[#566B30]">{params.id}</h2>
          <div className=" text-[#4C180A] flex"><Link className="nav-link " to="/">Home </Link> / <Link className="nav-link " to="/Product">Product</Link>/{params.id}</div>
         </div>
        </div>
        <div className="w-[100%] flex flex-wrap justify-center gap-3 p-1 mt-2  ">
          {productData && productData[0].details.map((item,index)=>(
        
              <div key={index} className="  h-[200px] relative w-[270px] mb-2 bg-gradient-to-b from-[#4C180A] to-[#DDB88C]  rounded flex flex-col gap-4 justify-center align-items-center  border-[3px] border-[#4C180A]  mt-[100px]">
                <img src={item.image} alt={item.name} className="h-[200px] w-[200px] rounded-[50%]  border-[3px]  border-[#DDB88C]  bg-[#4C180A] object-contain absolute top-[-50%] "></img>

                <h3 className="list-decimal text-center text-pretty underline absolute bottom-5 text-[#4C180A] overflow-hidden whitespace-normal w-[270px]">{item.name}</h3>          
                
             
              </div>
         
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductRoute;
