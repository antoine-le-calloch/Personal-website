import '../styles/components/InfoBand.css';
import {useEffect} from "react";
import AOS from 'aos';
import PropTypes from "prop-types";

const InfoBand = ({info, direction}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <div className={"container_infoBand info_on_" + direction}>
            <div className="InfoBand" data-aos={"fade-" + direction}>
                <div className="band_description">
                    <h2>{info.diploma ?? ""}</h2>
                    <p>{info.speciality ?? ""}</p><br/>
                    <em>{info.location ?? ""}</em><br/>
                    <em>{info.date ?? ""}</em>
                </div>
                <div className="band_image">
                    <img src={"/protected_assets/images/" + info.image}
                         alt={info.image}/>
                </div>
                <div className="band_date">
                    <div>{new Date(info.start).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
                </div>
            </div>
        </div>
    );
};

InfoBand.propTypes = {
    data: PropTypes.shape({
        info: PropTypes.shape({
            image: PropTypes.string,
            imageLocation: PropTypes.string,
            diploma: PropTypes.string,
            speciality: PropTypes.string,
            location: PropTypes.string,
            date: PropTypes.string,
        }),
    }),
};

export default InfoBand;
