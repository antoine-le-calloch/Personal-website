import '../styles/pages/Home.scss';
import {useEffect, useState} from "react";
import Text from "../components/generic/Text";

const Home = () => {
    const [introduction, setIntroduction] = useState(null);

    useEffect(() => {
        fetch('/protected_assets/data/introduction.json')
            .then(response => response.json())
            .then(data => setIntroduction(data))
    }, []);
    return introduction && (
        <div className="home">
            <h1 data-aos="fade-in">{introduction.title}</h1>
            <Text data-aos="fade-in" text={introduction.text}/>
        </div>
    );
};

export default Home;
