import "./Culture.css" ;
import beitlchouf2 from "../../assets/beitlchouf2.jpg";
import beblchouf from "../../assets/beblchouf.jpg";
import beblchouf2 from "../../assets/beblchouf2.jpg";

function Culture (){
   return (
    <div className="home-page-section" id="culture" >
     <div className="Culture-container">
        <h3 className="title">Culture</h3>
        <p className="culture-container-text">
            "Beib el Chouf" is the first autonomous culture center in the world. Located in the valleys 
             between the villages of "Bsheftin" and "Kfarfakoud". This center used to promote
            and educate practical sustainable solutions in Lebanon. The design is inspired by traditional 
            Lebanese architecture from the Chouf district.</p>
            
            <img className="beblchouf" src={beblchouf} alt="" />
      

            </div>

            <div className="home-section">
            <p className="beibelchouf-text">
            This culture center is a self-operating building that is capable of generating its own
            electricity, processing its own sewage, producing its own water, growing food, and maintaining
            comfortable temperatures naturally without relying on infrastructural support services.
            This building operates without producing any carbon emissions and it is built mostly out of natural
             & repurposed materials. </p>
             <img className="beblchouf2" src={beblchouf2} alt=""/>

             <p className="beibelchouf2-text">
             It is the profound combination of ancient and modern building techniques
             that makes this building operate completely self-sufficient.It has been  recognized by the
             UN-Habitat as one of the twenty top innovative solutions in contribution to the Sustainable 
             Development Goals (SDGs) and the New Urban Agenda.</p>
                   
            


            </div>

      
         
            
         </div>


   ) 
}

export default Culture ;