import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './parts/Header';
import Footer from "./parts/Footer";
import Home from './pages/Home';
import Certifications from "./pages/Certifications";
import ExperiencesAndEducation from "./pages/ExperiencesAndEducation";
import AOS from 'aos';

function App() {
    /* Initialize AOS */
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    return (
        <Router>
            <Header />
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experiences-and-education" element={<ExperiencesAndEducation/>}/>
                    <Route path="/certifications" element={<Certifications/>}/>
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
