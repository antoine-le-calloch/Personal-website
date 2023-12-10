import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './parts/Header';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="App-body">
                <Routes>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
