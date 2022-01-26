import "./App.css";
import Header from "./components/Header";
import Pokeball from "./components/Pokeball";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Header />
            <Pokeball />
            <Scoreboard />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
