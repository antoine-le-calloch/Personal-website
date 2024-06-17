import {useState} from "react";
import {Link} from "react-router-dom";
import Switch from "react-switch";
import '../styles/parts/Header.css';

const Header = () => {
    const [checked, setChecked] = useState(false);
    const handleSwitch = (state) => {
        setChecked(state);
        const root = document.documentElement;
        if (state) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };
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
                    <Link to="/experiences-and-education">Experiences / Education</Link>
                    <Link to="/certifications">Certifications</Link>
                    <Switch checked={checked} onChange={state => handleSwitch(state)} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
