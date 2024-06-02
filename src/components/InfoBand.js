import '../styles/components/InfoBand.css';
import {useEffect} from "react";
import AOS from 'aos';
import PropTypes from "prop-types";
import parse from 'html-react-parser';

const getLeftOrRight = (left) => {
    return left ? "right":"left";
}

const InfoBand = ({data, position}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    const start = new Date(data.start);
    const end = new Date(data.end);
    return (
        <div className={"info-band info-on-" + getLeftOrRight(position)}>
            <div className="band-first-half" data-aos={"fade-" + getLeftOrRight(!position)}>
                <div className="info">
                    <h2>{data.title}</h2>
                    <p>{parse(data.description)}</p><br/>
                    <em>{start.toLocaleDateString('en-GB', options) + " - " + end.toLocaleDateString('en-GB', options)}</em><br/>
                    <em>{data.institution}</em><br/>
                    <em>{data.location}</em>
                </div>
                <div className="date">
                    <div>{start.toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}</div>
                </div>
            </div>
            <div className="band-second-half"  data-aos={"fade-" + getLeftOrRight(position)}>
                <img src={"/protected_assets/images/" + data.image}
                     alt={data.image}/>
            </div>
        </div>
    );
};

InfoBand.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    position: PropTypes.number.isRequired
};

export default InfoBand;
