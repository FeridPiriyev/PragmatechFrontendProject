
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import BigSlider from "./components/BigSlider";
import Footer from "./components/Footer";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo";
import Stepthree from "./components/Stepthree";
import Smallslider from "./components/Smallslider";



function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Stepone/>
                <BigSlider />
                <Smallslider />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;    