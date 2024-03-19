import React, { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../Layout/Layout";
import ButtonComp from "../ButtonComp";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const productNames = [
    "Snacks",
    "Spices",
    "Edible Oils",
    "Baked Goods",
    "Blended Spices",
    "Pulses & Grains",
    "Beverages",
    "Instant Mixes",
    "Flours",
    "Sauces & Syrups",
    "RTE Foods",
    "Pickles",
    "Condiments",
    "Miscellaneous",
    "Tea & Coffee",
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
    company: Yup.string().required("Your Company Name is required"),
    address: Yup.string(),
    cityProvince: Yup.string(),
    country: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    identity: Yup.string().required("Identity is required"),
    products: Yup.array(),
    comments: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      address: "",
      cityProvince: "",
      country: "",
      phone: "",
      email: "",
      identity: "",
      products: [],
      comments: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await emailjs.sendForm(
          "service_1yvgbhp",
          "template_ai6jwhu",
          formRef.current,
          {
            publicKey: "VechTS5YlLmurwtzw",
          }
        );
        console.log("SUCCESS!", response);
        // setLoading(false)
        // toast.success("Email sent successfully!");
        formik.resetForm();
        navigate("/");
      } catch (error) {
        // setLoading(false)
        console.log("FAILED...", error);
        // toast.error("Failed to send email. Please try again later.");
      }
    },
  });

  // const sendEmail = async () => {
  //   setLoading(true);
  // };

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const handleCheckboxChange = (productName) => {
    formik.setFieldValue(
      "products",
      formik.values.products.includes(productName)
        ? formik.values.products.filter((item) => item !== productName)
        : [...formik.values.products, productName]
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div
        style={{
          backgroundImage: "url(images/ContactUs/ContactUsBG.jpg)",
          backgroundSize: "contain",
        }}
        className="w-[100%] flex flex-col poppins justify-center items-center "
      >
        <div className="w-full bg-[#FAEADD] h-[30vh] flex rounded-b justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#7DAF19]">Contact Us</h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <p className="nav-link " to="/WhyUs">
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          ref={formRef}
          className="bg-[rgba(255,255,255,0.6)] backdrop-blur-[3px] w-[100%] row  justify-center items-center  p-6 rounded shadow-md"
        >
          <div className="row justify-content-center">
            <label className=" lg:col-3 col-6 block w-[200px] mb-2 text-base font-bold text-[#566B30]">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={handleChange}
              className="col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none  rounded"
              required
            />
          </div>

          <div className="row justify-content-center">
            <label className=" lg:col-3 col-6 block mt-3 w-[200px] mb-2 text-base font-bold text-[#566B30]">
              Your Company Name:
            </label>
            <input
              type="text"
              name="company"
              value={formik.values.company}
              onChange={handleChange}
              className="col-6 w-[300px] h-[56px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none  rounded"
              required
            />
          </div>

          <div className="row justify-content-center">
            <label className=" lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Your Address:
            </label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={handleChange}
              className=" col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none rounded"
            />
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              City & Province:
            </label>
            <input
              type="text"
              name="cityProvince"
              value={formik.values.cityProvince}
              onChange={handleChange}
              className="col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none rounded"
            />
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Country:
            </label>
            <input
              type="text"
              name="country"
              value={formik.values.country}
              onChange={handleChange}
              className="col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none rounded"
            />
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Your Phone no.:
            </label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={handleChange}
              className="col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 rounded outline-none"
            />
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={handleChange}
              className="col-6 w-[300px] p-2 bg-transparent border-b-[#4C180A] border-b-2 outline-none rounded"
              required
            />
          </div>

          <div className="row justify-content-center my-3">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              I Am (Identity Who you are)
            </label>
            <div className="col-6 row justify-center align-items-center">
              <label className="col-12 row">
                <input
                  type="radio"
                  name="identity"
                  value="Consumer"
                  checked={formik.values.identity === "Consumer"}
                  onChange={handleChange}
                  className="col-2 form-radio h-[20px] w-[20px] text-blue-500"
                />
                <span className="col-10">Importer</span>
              </label>

              <label className="col-12 row">
                <input
                  type="radio"
                  name="identity"
                  value="Retailer"
                  checked={formik.values.identity === "Retailer"}
                  onChange={handleChange}
                  className="form-radio col-2  h-[20px] w-[20px] text-blue-500"
                />
                <span className=" col-10">Supermarkets</span>
              </label>

              <label className="col-12 row">
                <input
                  type="radio"
                  name="identity"
                  value="Supplier"
                  checked={formik.values.identity === "Supplier"}
                  onChange={handleChange}
                  className="col-2 form-radio h-5 w-5 text-blue-500"
                />
                <span className="col-10">Supplier</span>
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Products Interested In:
            </label>
            <div className="col-6 row ">
              {productNames.map((productName, index) => (
                <label key={index} className="col-12 col-lg-6 row">
                  <input
                    type="checkbox"
                    name="products"
                    value={productName}
                    checked={formik.values.products.includes(productName)}
                    onChange={() => handleCheckboxChange(productName)}
                    className="lg:col-2  col-2 bg-transparent h-[20px] w-[20px] text-blue-500"
                  />
                  <span className=" col-10">{productName}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="row justify-content-center">
            <label className="lg:col-3 col-6 block w-[200px] mt-4 mb-2 text-base font-bold text-[#566B30]">
              Your Comments:
            </label>
            <textarea
              name="comments"
              value={formik.values.comments}
              onChange={handleChange}
              className="col-6 w-[300px] bg-transparent p-2 border-b-[#4C180A] border-b-2 rounded"
            />
          </div>
          <div className="flex py-4 justify-center items-center">
            <ButtonComp onClick={formik.handleSubmit} Bname={"Submit"} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
