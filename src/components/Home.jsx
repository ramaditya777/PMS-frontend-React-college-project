import React from 'react';
import homeImg from "../images/about-img.jpg";
import './Home.css';

const Home = () => {
  return(<>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <img src={homeImg} alt="Sample" className="photo" />
      </div>
</> 
)};

export default Home;
