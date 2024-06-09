import '../styles/pages/Home.css';
import {useEffect, useState} from "react";
import Text from "../components/Text";

const Home = () => {
    const [introduction, setIntroduction] = useState([]);

    useEffect(() => {
        fetch('/protected_assets/data/introduction.json')
            .then(response => response.json())
            .then(data => setIntroduction(data))
    }, []);
    return (
        <div className="home" data-aos="fade-in">
            <h1>{introduction.title}</h1>
            <Text text={introduction.text}/>
        </div>
    );
};

export default Home;
