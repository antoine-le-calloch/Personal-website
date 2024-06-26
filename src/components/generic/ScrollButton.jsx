import React, {useEffect, useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../../styles/components/ScrollButton.scss';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollableItems = document.getElementsByClassName("scrollable");

    useEffect(() => {
        setIsVisible(window.scrollY === 0);

        const handleScroll = () => {
            setIsVisible(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollableItems.length > 0 && isVisible ? (
        <div className="scroll-button">
            <button onClick={() => scrollableItems[0].scrollIntoView({block: "center", behavior: "smooth"})}>
                <FaArrowCircleDown
                    className="icon-position icon-style"/>
            </button>
        </div>
    ) : null;
}

export default ScrollButton;
