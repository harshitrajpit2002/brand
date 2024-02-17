import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on </p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
       <div className="hero-image">
       <img src="/images/hero.png" alt="" /> 
       </div> 
    </main>
  );
};

export default Hero;
