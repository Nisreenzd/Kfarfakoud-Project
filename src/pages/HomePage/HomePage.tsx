import "./HomePage.css";
import React from 'react';
import image from "../../assets/teacher-desk-computer.jpg";

function HomePage() {
  return (
    <div className="homepageimage">
      <img className="image" src={image} alt="/"></img>
        <h1 className="quotes">"The mind is not a vessel to be filled, but a fire to be kindled."  - Plutarch</h1>
    </div>
  )
}

export default HomePage;