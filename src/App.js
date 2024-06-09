import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './parts/Header';
import Home from './pages/Home';
import Certifications from "./pages/Certifications";
import ExperiencesAndEducation from "./pages/ExperiencesAndEducation";
import Projects from './pages/Projects';
import AOS from 'aos';
import './App.css';

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
