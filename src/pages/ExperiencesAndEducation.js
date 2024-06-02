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

    const items = [...experiences, ...education]
    items.sort((a, b) => {
        return new Date(b.start) - new Date(a.start);
    });
    return (
        <div className="experiences-and-education">
            <div>
                <Title {...{
                    text: "Experience and education",
                    subText: "My professional and academic background"
                }} />
            </div>
            <div className="items" data-aos="fade-in">
                <span className="arrow"></span>
                <span className="timeline"></span>
                {items.map((item, index) => {
                    return (
                        <div className={"item " + (index % 2 ? "right":"")}>
                            <InfoBand key={item.title} data={item} position={index % 2}/>
                        </div>
                    )})}
            </div>
        </div>
    );
};

export default ExperiencesAndEducation;
