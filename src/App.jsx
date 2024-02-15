import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Error/NotFound";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Home}></Route>
    <Route path="*" Component={NotFound}></Route>

   

   </Routes>
   </BrowserRouter>
  );
}

export default App;
