import {useEffect, useState} from "react";
import {BsLinkedin, BsGithub, BsEnvelope, BsTelephoneFill} from "react-icons/bs";
import '../styles/parts/Footer.css';


const Footer = () => {
    const [contact, setContact] = useState(null);
    const [showPhone, setShowPhone] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch('/protected_assets/data/contact.json')
            .then(response => response.json())
            .then(data => setContact(data))
    }, []);
    return (contact &&
        <footer className="footer">
            <div className="top-footer">
                <div className="websites">
                    <span className="line"></span>
                    <a className="link" href={contact.linkedin} target="_blank" rel="noreferrer">
                        <BsLinkedin/>
                    </a>
                    <a className="link" href={contact.github} target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>

                    <div className="contact-link">
                        <a className={"contact" + (showEmail ? " show" : "")} href={"mailto:" + contact.email}>
                            {contact.email}
                        </a>
                        <div className="link" onClick={() => setShowEmail(!showEmail)}>
                            <BsEnvelope/>
                        </div>
                    </div>

                    <div className="contact-link">
                        <span className={"contact" + (showPhone ? " show" : "")}>
                            {contact.phone}
                        </span>
                        <div className="link" onClick={() => setShowPhone(!showPhone)}>
                            <BsTelephoneFill/>
                        </div>
                    </div>
                    <span className="line"></span>
                </div>
            </div>
            <div className="bottom-footer">
                <div>
                    © {year} - All rights reserved.
                </div>
                <div>
                    Developed by Antoine Le Calloch.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
