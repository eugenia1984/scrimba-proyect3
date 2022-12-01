import "./MemeStyles.css";
import { memesData } from "../../memesData.js";

function Meme( { text } ) {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(url)
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form-input" 
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form-input"  
        />
        <button 
          className="form-button"
          onClick={ getMemeImage }> 
          { text} 
        </button>
      </div>
    </main>
  );
}

export default Meme;