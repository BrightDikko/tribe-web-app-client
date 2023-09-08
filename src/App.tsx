import './App.css';
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import HomePageHero from "./components/pages/home/HomePageHero";
import TribeFeederHeading from "./components/pages/tribe-feeder/TribeFeederHeading";
import FeederHero from "./components/pages/tribe-feeder/FeederHero";

function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*<TribeFeederHeading/>*/}
            {/*TODO: Save images within codebase, in case they get taken down from web*/}
            <HomePageHero/>
            {/*<FeederHero/>*/}
            <Footer/>
        </div>
    );
}

export default App;
