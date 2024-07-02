import React, {useEffect, useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../../styles/components/ScrollButton.scss';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(window.scrollY === 0)
        const updateVisibility = () => {
            setIsVisible(window.scrollY === 0);
        };
        window.addEventListener('scroll', updateVisibility);
        return () => {
            window.removeEventListener('scroll', updateVisibility);
        };
    }, []);
    
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return isVisible ? (
        <div className="scroll-button">
            <button onClick={() => handleScroll()}>
                <FaArrowCircleDown
                    className="icon-position icon-style"/>
            </button>
        </div>
    ) : null;
}

export default ScrollButton;
