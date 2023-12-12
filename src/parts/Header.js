import {Link} from "react-router-dom";
import '../styles/parts/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <nav className="links">
                <div>
                    <Link className="Header-logo" to="/">
                        <img src="/logo_ALC.png" alt="Logo"/>
                    </Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
