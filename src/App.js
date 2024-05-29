import './App.css';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './parts/Header';
import ExperiencesAndEducation from "./pages/ExperiencesAndEducation";

function App() {
    return (
        <Router>
            <Header />
            <div className="App-body">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experiencesAndEducation" element={<ExperiencesAndEducation/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
