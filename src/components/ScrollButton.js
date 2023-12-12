import React, {useEffect, useState} from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';
import '../styles/components/ScrollButton.css';

const ScrollButton = () => {
        const [infoBandExists, setInfoBandExists] = useState(false);
        useEffect(() => {
            const infoBandElement = document.querySelector(".container_infoBand");
            if (infoBandElement) {
                setInfoBandExists(true)
            }
        }, []);

        const goToBot = () => {
            const firstInfoBand = document.getElementsByClassName('container_infoBand')[0];
            firstInfoBand.scrollIntoView({
                block: "end",
                behavior: "smooth"
            });
        };
        if (infoBandExists) {
            return (
                <div className="ScrollButton">
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
