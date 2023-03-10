import "./HomePage.css";

import beitlchouf from "../../assets/beitlchouf3.jpg";
import Header from "../../components/Header/Header";
import homepage from "../../assets/home.jpg";

function HomePage () {
    return (
        <div className="home-page-conatiner">
            <section className="top-section"> 
                <img className="homepage" src={homepage} alt="" />             
                <h1 className="top-section-title"> KFARFAKOUD قَرّيَتِي </h1>
            </section>

        
        </div>
    )
}

export default HomePage;