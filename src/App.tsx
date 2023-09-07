import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/Hero";
import Footer from "./components/navbar/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default App;
