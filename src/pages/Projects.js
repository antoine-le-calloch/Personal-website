import Title from "../components/Title";
import {useEffect, useState} from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/protected_assets/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div>
            <Title title={projects.title}
                   subtitle={projects.subtitle}/>
        </div>
    );
};

export default Projects;
