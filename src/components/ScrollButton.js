import React, {useEffect, useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../styles/components/ScrollButton.css';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    const infoBands = document.getElementsByClassName("info-band");

    useEffect(() => {
        const handleScroll = () => {setIsVisible(window.scrollY === 0);};
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll);};
    }, []);

    if (isVisible && infoBands.length > 0) {
        return infoBands.length > 0 ? (
            <div className="scroll-button">
                <button onClick={() => infoBands[0].scrollIntoView({block: "center", behavior: "smooth"})}>
                    <FaArrowCircleDown
                        className="icon-position icon-style"/>
                </button>
            </div>
        ) : null;
    }
}

export default ScrollButton;
