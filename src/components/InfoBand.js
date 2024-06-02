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
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    const start = new Date(info.start);
    const end = new Date(info.end);
    return (
        <div className={"container_infoBand info_on_" + direction}>
            <div className="InfoBand" data-aos={"fade-" + direction}>
                <div className="band_description">
                    <h2>{info.title}</h2>
                    <p>{info.description}</p><br/>
                    <em>{start.toLocaleDateString('en-GB',options) + " - " + end.toLocaleDateString('en-GB',options)}</em><br/>
                    <em>{info.institution}</em><br/>
                    <em>{info.location}</em>
                </div>
                <div className="band_image">
                <img src={"/protected_assets/images/" + info.image}
                         alt={info.image}/>
                </div>
                <div className="band_date">
                    <div>{start.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
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
            title: PropTypes.string,
            description: PropTypes.string,
            institution: PropTypes.string,
            location: PropTypes.string,
            start: PropTypes.string,
            end: PropTypes.string,
        }),
    }),
};

export default InfoBand;
