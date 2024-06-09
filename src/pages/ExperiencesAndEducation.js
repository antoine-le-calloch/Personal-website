import Title from "../components/generic/Title";
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

        fetch('/protected_assets/data/education.json')
            .then(response => response.json())
            .then(data => setEducation(data))
    }, []);

    const items = [...experiences, ...education]
    items.sort((a, b) => {
        return new Date(b.start) - new Date(a.start);
    });
    return (
        <div className="experiences-and-education">
            <div>
                <Title title={"Experience and education"}
                       subtitle={"My professional and academic background"} />
            </div>
            <div className="items" data-aos="fade-in">
                <span className="arrow"></span>
                <span className="timeline"></span>
                {items.map((item, index) => {
                    return (
                        <div key={item.title} className={"item " + (index % 2 ? "right":"")}>
                            <InfoBand data={item} position={index % 2}/>
                        </div>
                    )})}
            </div>
        </div>
    );
};

export default ExperiencesAndEducation;
