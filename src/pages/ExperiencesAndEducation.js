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
            <div className="infoBands" data-aos="fade-in">
                <span className="arrow"></span>
                <span className="timeline"></span>
                {infoBands.map((infoBand, index) => (
                    <div className={"infoBand band_" + (index % 2 ? "right" : "left")}>
                        <InfoBand key={infoBand.title} info={infoBand} direction={index % 2 ? "right" : "left"}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesAndEducation;
