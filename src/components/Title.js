import AOS from 'aos';
import '../styles/components/Title.css';
import {useEffect} from "react";

const Title = ({title, subtitle}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <div className="title">
            <div className="title-subtitle" data-aos="fade-in">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
};

export default Title;
