import React from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../styles/components/ScrollButton.css';

const ScrollButton = () => {
        const infoBands = document.getElementsByClassName("info-band");
        if (infoBands.length > 0) {
            return (
                <div className="scroll-button">
                    <button onClick={() => infoBands[0].scrollIntoView({block: "end", behavior: "smooth"})}>
                        <FaArrowCircleDown
                            className="icon-position icon-style"/>
                    </button>
                </div>
            );
        } else {
            return (<div></div>)
        }
};
export default ScrollButton;
