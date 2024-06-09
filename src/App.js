import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './parts/Header';
import ExperiencesAndEducation from "./pages/ExperiencesAndEducation";
import './App.css';
import AOS from 'aos';
import Certifications from "./pages/Certifications";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <Router>
            <Header />
            <div className="App-body">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experiences-and-education" element={<ExperiencesAndEducation/>}/>
                    <Route path="/certifications" element={<Certifications/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
