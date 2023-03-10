import React from 'react'
import "./Geography.css";
import kfarfakoud from "../../assets/kfarfakoud2.jpg";

import view from "../../assets/viewpic.jpg";

function Geography() {
    return(
        <div className="home-page-section" id="geography">
          <section className="geography-section">
            <h4 className="titles">Geography</h4>
            <p className="geography-container-text">
            The village of "Kfarfqoud" has transcended its geographical surroundings,
            but has remained true to the environment from which it emerged.
            It is located in the Al-Manasif region in the Chouf district,
            on a stepped plateau surmounted by a huge rocky sheer,
            separating it from its neighbor, Deir al-Qamar.
            "Kfarfaqoud" is 15 km from the district center of Beiteddine, 
            34 km from the Mount Lebanon Governorate in Baabda,
            and 38 km from the capital Beirut, and it is about 450 km above sea level.
            At the top of the town of "Kafrfaqoud", a highway passes that connects
            the neighboring villages to each other, and this highway is considered a 
            vital development outlet for the towns of the Al-Manasif area. 


            </p>
            </section> 
            
            <img className="view" src={view} alt="" />
            
            <img className="kfarfakoud" src={kfarfakoud} alt="" />
        </div>
    )
}
    


export default Geography;