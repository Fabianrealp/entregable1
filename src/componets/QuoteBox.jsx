import "./styles/QuoteBox.css";
import { getRandon } from "../utils/ramdom";

const imgPlanets=["/images/planet1.1.jpg","/images/planet2.2.jpg","/images/planet3.3.jpg","/images/planet4.4.jpg"]
const QuoteBox = ({ handleChangeQuote, quote}) => {
  return (
    <section className="quoteBox">
      <h1>INFOGALAX</h1>
      <section className="quoteBoxCenter">
        <article>
          <p>{quote.phrase}</p>
        </article>
        <button className="changebutton" onClick={handleChangeQuote}>
          <box-icon name="refresh" className="refresh"></box-icon>
        </button>
      </section>
      
      <footer className="imgposition">
      <img src= {getRandon(imgPlanets)}/>
        <h4>Fuente: {quote.author}</h4>
      </footer>
      
    </section>
  );
};

export default QuoteBox
