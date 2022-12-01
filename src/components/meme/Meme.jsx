import React, { useState } from "react";
import "./MemeStyles.css";
import { memesData } from "../../memesData.js";

function Meme( { text } ) {
  const [ memeImage, setMemeImage ] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    setMemeImage( url)
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
      <img src={memeImage} alt="meme" className="meme-img"/>
    </main>
  );
}

export default Meme;