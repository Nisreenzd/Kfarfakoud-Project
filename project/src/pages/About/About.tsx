import "./About.css";
import baladiyi from "../../assets/baladiyi.jpg";

import estkshef from "../../assets/estkshf.jpg";
import cave1 from "../../assets/image1.jpg";
import cave2 from "../../assets/2image.jpg";
import cave3 from "../../assets/3image.jpg";
import bag1 from "../../assets/bag1.jpg";
import bag2 from "../../assets/bag2.jpg";
import beitlchouf1 from "../../assets/beitlchouf1.jpg";
import beitlchouf2 from "../../assets/beitlchouf2.jpg";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import ainaldayaa from "../../assets/ainaldayaa.jpg";
import pic from "../../assets/picture3.jpg";
import zd from "../../assets/zd.jpg";
import nasr from "../../assets/nasr.jpg";
import ad from "../../assets/ad.jpg";




function About() {
  return (
    <div className="home-page">
      <div className="home-page-section" id="about">
        <div className="About-container">
          <h2 className="titles">About</h2></div>

        <div className="about-container">
          <p className="About-container-text">
            The name "Kfarfaqud" is divided into two parts: "Kafra" and "Faqud". "Kafra" is a Syriac word,
            and if it's added it becomes "Kafr", which means the village. As for "Faqude", it means the command,
            the authoritarian ruler, or the government official. </p>

          <img className="pic" src={pic} alt="" /> </div>

        <div className="municipality-container">
          <p className="municipality-text">
            The town of Kfarfaqoud consists of a municipality concerned with public affairs;
            It was established nearly 19 years ago ,consists of one mayor and a municipal council of 12 members
            and two mayors; It's one of the modern municipalities, and one of the mountain towns that depend mainly
            on agriculture, trade, and a little industry. Its population exceeds 2,800 people.
            Kafr Faqoud is distinguished by its many families: Zahreddine, Nasr, Aman al-Din, L Arawi, Kamal al-Din
            and Murad, who have a relationship of intimacy and love. </p>

          <div className="cards-container">
            <div className="card1">
              <img className="zd" src={zd} alt="" />
            </div>

            <div className="card2">
              <img className="nasr" src={nasr} alt="" />
            </div>
          </div>

          <div className="card3">
            <img className="ad" src={ad} alt="" /> 
        </div>

        </div>



        <div className="home-section-container">

          <p className="container-text">
            Touristically, the municipality of "Kfarfaqoud", a short time ago, communicated and coordinated with the
            Lebanese Association for the Study of Natural Caves. A specialized mission from the association,
            accompanied by the municipal council, went to visit the natural landmark in the town called
            provided with an accurate and detailed scientific report to be developed this natural landmark
            is on the list of natural caves in Lebanon.</p>

          <div className="carousal-container">
            <Carousel className="slideshow-image">
              <Carousel.Item>
                <img className="image1" src={cave1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image2" src={cave2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image3" src={cave3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="home-section-container">
            <p className="bags-text-container">
              Addition to that , the Environment Committee has done tremendous and creative work. It has been able to achieve
              many environmental goals, as it launched a campaign ( كيس قماش ولا مية نيلون) to
              replace the use of nylon bags, after the environmental campaign that was launched recently
              through the straw basket. </p>
            <img className="bag2" src={bag2} alt="" />
          </div>

          <div className="container-text"></div>
          <p className="crafttext"> In the context of its initiative, the municipality distributed these baskets to shops and homes
            for citizens to use to carry their needs, and they are distributed free of charge. In addition to
            being a means of raising awareness about reducing the use of plastic, they contribute to strengthening
            the rural economy and providing income for those who work in this traditional craft.</p>
          <img className="bag1" src={bag1} alt="" /></div>


      </div>


      <div className="ain al dayaa">
        <p className="ain"> Kafrfaqoud is known for both agriculture, industry and trade. On the agricultural level, the town
          is characterized by the cultivation of gnark. It is rich in water, as there are many water springs
          (Abu Daher spring, Shalout spring, Marj springs, Ain Al-Maqsaba, Ain Al-Halala), and an archaeological
          spring (Ain Al-Daya'a) that has been restored by the municipality of Kafr Faqoud.</p>
        <div className="ain">
          <img className="ainaldayaa" src={ainaldayaa} alt="" /></div>
      </div>



      <div className="home-section">

        <p className="container-text">
          However, Kfarfakoud was distinguished by the establishment of the first firewood factory
          in the Manasef Al-Shouf area since 1963, which became famous and exported many industries abroad.
        </p>
      </div>

    </div>



  )
}




export default About;