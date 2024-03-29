import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Error/NotFound";
import WhyUS from "./Components/WhyUs/WhyUS";
import Product from "./Components/Product/Product";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductRoute from "./Components/ProductRoutes/ProductRoute";
import BlogsComponent from "./Components/BlogsComponent/BlogsComponent";
import Data from "./Data/Blog.json";

function App() {
  const params = useParams();
  const [blogData, setBlogData] = useState(Data[params.id - 1]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/WhyUs" Component={WhyUS}></Route>
        <Route path="/Product" Component={Product}></Route>
        <Route path="/Product/:id" Component={ProductRoute}></Route>
        <Route path="/Blogs" Component={Blog}></Route>
        <Route path={`/Blogs/:id`} Component={BlogsComponent}></Route>

        <Route path="/AboutUs" Component={About}></Route>
        <Route path="/ContactUs" Component={ContactUs}></Route>

        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
