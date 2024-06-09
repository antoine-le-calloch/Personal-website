import Title from "../components/generic/Title";
import {useEffect, useState} from "react";

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    useEffect(() => {
        fetch('/protected_assets/data/certifications.json')
            .then(response => response.json())
            .then(data => setCertifications(data))
    }, []);
    return (
        <div>
            <Title title={certifications.title}
                     subtitle={certifications.subtitle}/>
        </div>
    );
};

export default Certifications;
