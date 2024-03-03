import React from "react";
import Layout from "../Layout/Layout";

const WhyUS = () => {
  const steps = [
    {
      id: "1",
      title: "Step 1: Procurement ",
      desc: "Understanding the nature and format of the consignee's product requirements is essential for making informed procurement decisions. Whether sourcing raw materials or finished products, it's crucial to inspect and check product quality to maintain high standards and prevent issues downstream.",
    },
    {
      id: "2",
      title: "Step 2: Sourcing and Transport ",
      desc: "Once the procurement process is complete, it's time to source goods from various manufacturers and suppliers. Establishing strong relationships with reliable partners is key to ensuring a steady supply of quality products. Inland transport plays a critical role in moving goods from suppliers to warehouses efficiently and cost-effectively.",
    },
    {
      id: "3",
      title: "Step 3: Warehouse Management ",
      desc: "Efficient warehouse management is essential for optimizing inventory levels and minimizing storage costs. Nature Dude's pre-stuffing and shipment inspections help identify any issues before goods are loaded for transport.",
    },
    {
      id: "4",
      title: "Step 4: Container Stuffing and Sealing ",
      desc: "Container stuffing is a crucial step in the shipping process, and Nature Dude's use of AI technology has advanced this process more efficiently than ever. By accurately calculating the optimal placement of goods within containers, businesses can maximize space utilization and reduce shipping costs. Self-sealing containers add an extra layer of security and ensure the integrity of goods during transit.",
    },
    {
      id: "5",
      title: "Step 5: Export Documentation and Customs Clearance ",
      desc: "Navigating export documentation and customs clearance can be complex and time-consuming. Working with Nature Dude leveraging automated solutions can help streamline this process and ensure compliance with regulations. Efficient clearance reduces transit times and minimizes the risk of delays or penalties.",
    },
    {
      id: "6",
      title: "Step 6: Departure and Documentation",
      desc: "Once all export documentation is in order, goods are ready to depart from the origin port. Timely transmission of shipping documents to the consignee ensures smooth customs clearance at the destination port. Effective communication and collaboration between all stakeholders are essential to avoid delays and ensure timely delivery.",
    },
    {
      id: "7",
      title: "Step 7: Arrival and Distribution ",
      desc: "Real-time tracking and visibility enable businesses to monitor shipments and proactively address any issues that may arise during transit. Nature Dude's team helps and guides consignees through clearance and regulation of importing. Upon arrival at the destination port, the container is ready for clearance and transportation to the consignee's final destination for off-loading.",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col poppins py-5 px-2 justify-center  items-center">
        <h2 className="text-[#7DAF19] py-3">Supply Chain Optimization</h2>
        <div className="flex flex-col justify-center border-r-[#7DAF19] border-b-[#7DAF19] border-l-[#4C180A] border-t-[#4C180A] border-4 rounded-lg xl:w-[90%] xl:h-[550px] lg:w-[90%] lg:h-[550px] md:w-[90%] md:h-[550px]  items-center">
          <div className="w-[90%]">
            <img src="./images/WhyUs/FlowChart.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] text-[#4C180A] text-base py-4">
          Optimizing your supply chain in today's fast-paced global market is
          crucial for maintaining a competitive edge and maximizing efficiency.
          From procurement to delivery, at each step in the supply chain
          process, Nature Dude plays a vital role in ensuring the timely
          delivery of goods while minimizing costs.
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {steps.map((items, index) => (
            <div class="flex flex-col  w-[90%] h-[370px] border-[2px] border-lime-800 border-tl rounded-tr-[100px] rounded-bl-[100px] xl:h-[280px] lg:h-[250px] md:h-[290px] sm:h-[310px] border-dashed ">
              <div class="w-[150px] bg-transparent absolute h-[150px] border-l-amber-950 border-t-amber-950 border-t-[15px] border-l-[15px]"></div>
              <div class="flex pt-4 justify-center items-center">
                <h4 class="text-[#7DAF19] w-full px-4 py-2 text-2xl font-bold text-left">
                  {items.title}
                </h4>
              </div>

              <div class="flex justify-center items-center">
                <div class="w-full px-4 mt-5 text-base relative h-[100px] text-[#674422] flex flex-col justify-center items-center">
                  <p>{items.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] text-[#4C180A] text-base py-4">
          Nature Dude focuses on each step of the supply chain process and
          leveraging technology and best practices that reduce costs and enhance
          customer satisfaction. Our team always stays agile, to changing market
          conditions, and embraces innovation to stay ahead in today's
          competitive landscape.
        </div>
      </div>
    </Layout>
  );
};

export default WhyUS;
