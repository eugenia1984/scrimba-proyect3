import "./MemeStyles.css";

function Meme( { text } ) {
  return (
    <main>
      <form className="form">
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
        <button className="form-button"> { text} </button>
      </form>
    </main>
  );
}

export default Meme;