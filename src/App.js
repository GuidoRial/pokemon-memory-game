import "./App.css";
import Header from "./components/Header";
import Pokeball from "./components/Pokeball";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Header />
            <Pokeball />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
