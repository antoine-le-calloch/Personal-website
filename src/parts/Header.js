import {Link} from "react-router-dom";
import '../styles/parts/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="links">
                <div>
                    <Link className="header-logo" to="/">
                        <img src="/logo/logo_ALC.png" alt="Logo ALC"/>
                    </Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/experiences-and-education">Experiences/Education</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
