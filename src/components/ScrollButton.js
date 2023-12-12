import React from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../styles/components/ScrollButton.css';

const ScrollButton = () => {
    const goToBot = () => {
        const firstInfoBand = document.getElementsByClassName("container_infoBand")[0];
        firstInfoBand.scrollIntoView({
            block: "end",
            behavior: "smooth"});
    };
    return (
        <div className="ScrollButton">
            <button onClick={goToBot}>
                <FaArrowCircleDown
                    className="icon-position icon-style"/>
            </button>
        </div>
    );
};
export default ScrollButton;
