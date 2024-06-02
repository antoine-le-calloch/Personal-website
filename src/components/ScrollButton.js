import React, {useEffect, useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../styles/components/ScrollButton.css';

const ScrollButton = () => {
        const [infoBandExists, setInfoBandExists] = useState(false);
        useEffect(() => {
            const infoBandElement = document.querySelector(".info-band");
            if (infoBandElement) {
                setInfoBandExists(true)
            }
        }, []);

        const goToBot = () => {
            const firstInfoBand = document.getElementsByClassName('info-band')[0];
            firstInfoBand.scrollIntoView({
                block: "end",
                behavior: "smooth"
            });
        };
        if (infoBandExists) {
            return (
                <div className="scroll-button">
                    <button onClick={goToBot}>
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
