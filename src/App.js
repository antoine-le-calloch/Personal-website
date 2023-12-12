import './App.css';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './parts/Header';
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";

function App() {
    return (
        <Router>
            <Header />
            <div className="App-body">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/experiences" element={<Experiences/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
