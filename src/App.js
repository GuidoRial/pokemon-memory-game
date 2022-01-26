import './App.css';
import Header from "./components/Header"
import Pokeball from "./components/Pokeball"
import Scoreboard from "./components/Scoreboard"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Pokeball/>
      <Scoreboard/>
      <Footer/>
    </div>
  );
}

export default App;
