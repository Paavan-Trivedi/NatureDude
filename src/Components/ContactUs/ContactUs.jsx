import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../Layout/Layout";

const ContactUs = () => {
  const formRef = useRef();
  const productNames = [
    "Agarbatti",
    "Bakery Products",
    "Beverages",
    "Blended Spices",
    "Condiments",
    "Confectionary",
    "Edible Oils",
    "Flours",
    "Healthy Snacks",
    "Instant/Dessert Mix",
    "Khakhra",
    "Miscellaneous",
    "Mukhwas",
    "Papad",
    "Pickles",
    "Pulses & Grains",
    "Sauces, Chutneys & Syrup",
    "Snacks",
    "Spices",
    "Sweets",
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
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
          "service_npyr5kq",
          "template_ck62dun",
          formRef.current,
          {
            publicKey: "319fc32Gfc-Nvhmfi",
          }
        );
        console.log("SUCCESS!", response);
        // setLoading(false)
        // toast.success("Email sent successfully!");
        formik.resetForm();
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

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8">
        <form
          onSubmit={formik.handleSubmit}
          ref={formRef}
          className="bg-white  p-6 rounded shadow-md"
        >
          <label className="block mb-2 text-sm font-bold text-[#7DAF19]">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 outline-none  rounded"
            required
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Your Address:
          </label>
          <input
            type="text"
            name="address"
            value={formik.values.address}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 outline-none rounded"
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            City & Province:
          </label>
          <input
            type="text"
            name="cityProvince"
            value={formik.values.cityProvince}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 outline-none rounded"
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={formik.values.country}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 outline-none rounded"
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Your Phone no.:
          </label>
          <input
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 rounded outline-none"
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            className="w-full p-2 border-b-[#4C180A] border-b-2 outline-none rounded"
            required
          />

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            I Am (Identity Who you are)
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="identity"
                value="Consumer"
                checked={formik.values.identity === "Consumer"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Consumer</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="identity"
                value="Retailer"
                checked={formik.values.identity === "Retailer"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Retailer</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="identity"
                value="Supplier"
                checked={formik.values.identity === "Supplier"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Supplier</span>
            </label>
          </div>

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Products Interested In
          </label>
          <div className="flex flex-col">
            {productNames.map((productName, index) => (
              <label key={index} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="products"
                  value={productName}
                  checked={formik.values.products.includes(productName)}
                  onChange={() => handleCheckboxChange(productName)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2">{productName}</span>
              </label>
            ))}
          </div>

          <label className="block mt-4 mb-2 text-sm font-bold text-[#7DAF19]">
            Your Comments
          </label>
          <textarea
            name="comments"
            value={formik.values.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
