import {Link} from "react-router-dom";
import '../styles/parts/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <nav className="links">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
