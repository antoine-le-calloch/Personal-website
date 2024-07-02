import '../styles/components/InfoBand.scss';
import PropTypes from "prop-types";
import parse from 'html-react-parser';
import {useEffect, useState} from "react";

const InfoBand = ({data, position}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    const start = new Date(data.start);
    const end = new Date(data.end);

    const getFade = (position, display) => {
        return display ? `fade-${position ? "right":"left"}` : '';
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div
            className={`info-band info-on-${position ? "right":"left"}`}
            data-aos={getFade(position,isMobile)}>
            <div className="band-first-half" data-aos={getFade(!position,!isMobile)}>
                <div className="info">
                    <h2>{data.title}</h2>
                    <div className="description smallFont">{parse(data.description)}</div>
                    <div className="italic">{`${start.toLocaleDateString('en-GB', options)} - ${end.toLocaleDateString('en-GB', options)}`}</div>
                    <div className="italic">{data.institution}</div>
                    <div className="italic">{data.location}</div>
                    {data.type && (
                        <div className="italic">{data.type}</div>
                    )}
                </div>
                <div className="date">
                <div>{start.toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}</div>
                </div>
            </div>
            <div className="band-second-half"  data-aos={getFade(position,!isMobile)}>
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
