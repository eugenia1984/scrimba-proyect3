import './App.css';
import Header from './components/header/Header';
import Meme from './components/meme/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme text="Get a new meme image"/>
    </div>
  );
}

export default App;
