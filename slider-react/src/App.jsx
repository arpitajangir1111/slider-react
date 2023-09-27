import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  

  

  return (
    <>
      <div className="slider">
        <div className="left">
          <img src="product-image" alt="product name" />
        </div>
        <div className="right">
          <h3>product-title</h3>
          <p>product-description</p>
        </div>
      </div>
      <div className="navigation">
        <button>
          <ArrowBackIosIcon />
        </button>
        <button>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default App;
