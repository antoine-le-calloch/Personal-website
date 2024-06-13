import '../styles/parts/Footer.css';
import {BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-footer">
                <div className="links">
                    <a href="https://www.linkedin.com/in/antoine-le-calloch" target="_blank" rel="noreferrer">
                        <BsLinkedin/>
                    </a>
                    <a href="https://github.com/antoine-le-calloch" target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>
                    <a href="mailto:email">Email</a>
                </div>
            </div>

            <div className="bottom-footer">
                <div>
                    &copy; 2021 - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
