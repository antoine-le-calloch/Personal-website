import AOS from 'aos';
import '../styles/components/Title.css';
import ScrollButton from "../components/ScrollButton";
import {useEffect} from "react";

const Title = (data) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <div className="Title">
            <div className="Title-text" data-aos="fade-in">
                <h1>{data.text}</h1>
                <h2>{data.subText}</h2>
            </div>
            <div>
                <ScrollButton/>
            </div>
        </div>
    );
};

export default Title;
