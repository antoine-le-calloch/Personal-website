import {useState} from "react";
import {Link} from "react-router-dom";
import Switch from "react-switch";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import '../styles/parts/Header.css';

const Header = () => {
    const [checked, setChecked] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const root = document.documentElement;
    const handleSwitch = (state) => {
        setChecked(state);
        if (state) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };
    const handleMenuMobile = () => {
    };
    return (
        <header className="header">
            <nav>
                <Link className="logo" to="/">
                        <img src="/logo/logo_ALC.png" alt="Logo ALC"/>
                </Link>
                <button className="open-menu-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    <span  className={openMenu ? "open" : ""}/>
                </button>
                <div className={"menu" + (openMenu ? " open" : "")}>
                    <Link to="/">Home</Link>
                    <Link to="/experiences-and-education">Experiences / Education</Link>
                    <Link to="/certifications">Certifications</Link>
                    {/* use css var primary color */}
                    <Switch className="switch" checked={checked} onChange={state => handleSwitch(state)}
                            uncheckedIcon={<BsFillSunFill />}
                            checkedIcon={<BsFillMoonStarsFill/>}/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
