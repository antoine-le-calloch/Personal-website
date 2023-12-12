import '../styles/components/InfoBand.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const InfoBand = (data) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <div className="container_infoBand">
            <div className={"InfoBand image_on_" + data.imageLocation}
                 data-aos={"fade-" + data.imageLocation}>
                <div className={'band_image image_on_' + data.imageLocation}>
                    <img src={data.image} alt="Stephane Hessel high school"/>
                </div>
                <div className="band_description">
                    <h2>{data.diploma ?? ""}</h2>
                    <p>{data.speciality ?? ""}</p><br/>
                    <em>{data.location ?? ""}</em><br/>
                    <em>{data.date ?? ""}</em>
                </div>
            </div>
        </div>
    );
};

export default InfoBand;
