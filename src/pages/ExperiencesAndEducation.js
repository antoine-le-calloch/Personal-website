import Title from "../components/Title";
import InfoBand from "../components/InfoBand";
import {useEffect, useState} from "react";
import '../styles/pages/ExperiencesAndEducation.css';

const ExperiencesAndEducation = () => {
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetch('/protected_assets/data/experiences.json')
            .then(response => response.json())
            .then(data => setExperiences(data))
            .catch(error => console.error(error));

        fetch('/protected_assets/data/education.json')
            .then(response => response.json())
            .then(data => setEducation(data))
            .catch(error => console.error(error));
    }, []);

    const infoBands = [...experiences, ...education]
    infoBands.sort((a, b) => {
        return new Date(b.start) - new Date(a.start);
    });

    return (
        <div className="experiencesAndEducation">
            <div>
                <Title {...{
                    text: "Experience and education",
                    subText: "My professional and academic background"
                }} />
            </div>
            <div className="infoBands">
                <span data-aos="fade-in" className="timeline"></span>
                {infoBands.map((infoBand, index) => (
                    <InfoBand key={infoBand.diploma} info={infoBand} direction={index%2?"right":"left"}/>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesAndEducation;
