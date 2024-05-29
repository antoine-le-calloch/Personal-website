import Title from "../components/Title";
import InfoBand from "../components/InfoBand";
import {useEffect, useState} from "react";

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

    return (
        <div>
            <div>
                <Title {...{
                    text: "Experience and education",
                    subText: "My professional and academic background"
                }} />
            </div>
            <div>
                {experiences.map((experience) => (
                    <InfoBand key={experience.diploma} info={experience} />
                ))}
                {education.map((education) => (
                    <InfoBand key={education.diploma} info={education}/>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesAndEducation;
