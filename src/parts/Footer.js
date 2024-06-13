import '../styles/parts/Footer.css';
import {BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-footer">
                <div className="sites">
                    <span className="line"></span>
                    <a href="https://www.linkedin.com/in/antoine-le-calloch" target="_blank" rel="noreferrer">
                        <BsLinkedin/>
                    </a>
                    <a href="https://github.com/antoine-le-calloch" target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>
                    <span className="line"></span>
                </div>
                <div className="infos">
                    <a href="mailto:email">Email</a>
                </div>
            </div>

            <div className="bottom-footer">
                <div>
                    © 2024 - All rights reserved. Developed by Antoine Le Calloch.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
