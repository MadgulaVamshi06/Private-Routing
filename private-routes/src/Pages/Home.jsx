import React from "react";

const Home = () => {
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 >
        Welcome to Online Store   
      </h1>
     <p >Where innovation meets excellence.</p>
      <img
        src="https://img.freepik.com/free-vector/shopping-online-landing-page-concept_23-2148539970.jpg?size=626&ext=jpg"
        alt=""
        width="1000px"
        style={{ display: 'block', margin: '0 auto' }}/>

      <h2 >
        At E-COMMERECE, we’re more than just a brand; we’re a promise of quality
        and dedication. Our journey began with a simple idea: to deliver
        outstanding products and services that make life easier and more
        enjoyable. Our team is driven by passion, creativity, and the relentless
        pursuit of perfection.
      </h2>

      <h2 >
        Our Commitment to You We believe in creating value for our customers
        through innovative solutions. Our products are designed with you in
        mind, ensuring that each item we offer meets the highest standards of
        functionality and design.
      </h2>

      <h4 >
        Explore Our Offerings Dive into our diverse range of products, each
        crafted to enhance your daily routine. From the latest tech gadgets to
        eco-friendly home essentials, we’ve got something for everyone.
      </h4> 
    
    </div>
  );
};

export default Home;