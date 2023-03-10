import "./History.css";
import history1 from "../../assets/history1.jpg";
import history2 from "../../assets/history2.jpg";

function History() {
    return (
    <div className="home-page-section" id="history">
    <section className="history-container">
     <h2 className="titles">History</h2>
     <p className="history-container-text">
    
     According to the local narration that was passed on by the elderly, "Kfarfaqoud" means the lost country because 
     it was subjected to a devastating earthquake (in the 6th century) and most of its
     small houses lost it at the time. It changed its location, as we were on the hill overlooking it 
     today. However, its presence near the coast of Damour made it valleys and caves a refuge for 
     the Ottomans to awaken those who resisted them at the previous world wide.

     <div className="history-image-container">
        <img className="history-image" src={history1} alt=""/>
        <img className="history-image2" src={history2} alt=""/>
     </div>
             
     
     
     

     </p>
    </section>
 </div>
    )
}

export default History ;