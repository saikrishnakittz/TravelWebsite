import React from "react";
import "./app.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Offers from "./Components/Offers/Offers";
import About from "./Components/About/About";


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home/>
      <Popular/>
      <Offers/>
      <About/>
      <Blog/>
      <Footer/> */}
    </div>
  );
};

export default App;
