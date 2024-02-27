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

  return (
    <Layout>
      <div>
        <div className="w-full bg-[#E6C4C4] h-[30vh] flex rounded justify-center align-items-center">
         <div className=" text-center">
          <h2>{params.id}</h2>
          <div className=" text-[red] flex"><Link className="nav-link " to="/">Home </Link> / <Link className="nav-link " to="/Product">Product</Link>/{params.id}</div>
         </div>
        </div>
        <div className=" h-[60vh] w-[100%] flex  flex-col flex-wrap p-3">
          {productData && productData[0].details.map((item,index)=>(
        
              <dl key={index}>
                <dt className=" list-decimal  text-pretty"> {item.name}</dt>
                {item.item&&
                
                item.item?.map((item,index)=>(
                  <dd className=" ms-3" key={index}>{item}</dd>
                ))
                }
              </dl>
         
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductRoute;
