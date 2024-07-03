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
            <div className="title">
                <h1 data-aos="fade-in">{introduction.title}</h1>
                <Text data-aos="fade-in" text={introduction.text}/>
            </div>
            <div className="skills">
                <div className="skill languages">
                    <h2>Computer languages</h2>
                    <div className="schema">
                        {introduction.skills.languages.map((language, index) => (
                            <div key={language.name} className="language" 
                                 style={{
                                     height: `${language.level}%`,
                                     background: introduction.colors[index],
                                     animationDelay: `${index * 0.5}s`
                                 }}>
                                {language.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill frameworks">
                    <h2>Frameworks</h2>
                    <div className="schema">
                        {introduction.skills.frameworks.map((framework, index) => (
                            <div key={framework.name} className="framework"
                                 style={{
                                     height: `${framework.level}%`,
                                     background: introduction.colors[index],
                                     animationDelay: `${index * 0.5}s`
                                 }}>
                                {framework.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill development-tools">
                    <h2>Development tools</h2>
                    <div className="schema">
                        {introduction.skills.development_tools.map((tool, index) => (
                            <div key={tool.name} className="tool"
                                 style={{
                                     height: `${tool.level}%`,
                                     background: introduction.colors[index],
                                     animationDelay: `${index * 0.5}s`
                                 }}>
                                {tool.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
