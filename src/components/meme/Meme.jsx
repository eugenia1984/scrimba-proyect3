import React, { useState } from "react";
import "./MemeStyles.css";
import { memesData } from "../../memesData.js";

function Meme( { text } ) {
  const [ meme, setMeme ] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });

  const [ allMemesImages, setAllMemesImages ] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const  url  = memesArray[randomNumber].url;
    setMeme( prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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
      <img src={meme.randomImage} alt="meme" className="meme-img"/>
    </main>
  );
}

export default Meme;