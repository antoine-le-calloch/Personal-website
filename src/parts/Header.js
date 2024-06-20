import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Switch from "react-switch";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import '../styles/parts/Header.css';

const Header = () => {
    const [checked, setChecked] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const handleSwitch = (state) => {
        const root = document.documentElement;
        if (state) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        setChecked(state);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(menuRef)
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        if(openMenu && window.innerWidth < 1000){
            document.addEventListener('mousedown', handleClickOutside);
        }else{
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu, menuRef]);

    return (
        <header className="header">
            <nav>
                <Link className="logo" to="/">
                        <img src="/logo/logo_ALC.png" alt="Logo ALC"/>
                </Link>
                <button ref={menuRef} className="open-menu-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    <span  className={openMenu ? "open" : ""}/>
                </button>
                <div ref={menuRef} className={"menu" + (openMenu ? " open" : "")}>
                    <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
                    <Link to="/experiences-and-education"  onClick={() => setOpenMenu(false)}>Experiences / Education</Link>
                    <Link to="/certifications" onClick={() => setOpenMenu(false)}>Certifications</Link>
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
