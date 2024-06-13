import {useEffect, useState} from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import '../styles/parts/Footer.css';


const Footer = () => {
    const [contact, setContact] = useState(false);
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch('/protected_assets/data/contact.json')
            .then(response => response.json())
            .then(data => setContact(data))
    }, []);
    return (
        <footer className="footer">
            <div className="top-footer">
                <div className="websites">
                    <span className="line"></span>
                    <a href={contact.linkedin} target="_blank" rel="noreferrer">
                        <BsLinkedin/>
                    </a>
                    <a href={contact.github} target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>
                    <span className="line"></span>
                </div>
            </div>

            <div className="bottom-footer">
                <a href={"mailto:" + contact.email}><i>{contact.email}</i></a>
                <div>
                    © {year} - All rights reserved. Developed by Antoine Le Calloch.
                </div>
                <div><i>{contact.phone}</i></div>
            </div>
        </footer>
    );
};

export default Footer;
