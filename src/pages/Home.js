import '../styles/pages/Home.css';
import Title from "../components/Title";
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
        <div className="home">
            <Title title={"Antoine Le Calloch"} subtitle={"Personal Website"}/>
            <Text text={introduction.text} />
        </div>
    );
};

export default Home;
