import '../../styles/components/Title.scss';
import ScrollButton from "./ScrollButton";
import PropTypes from "prop-types";

const Title = ({title, subtitle}) => {
    return (
        <div className="title" data-aos="fade-in">
            <h1>{title}</h1>
            <div className="mediumFont">{subtitle}</div>
            <ScrollButton/>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default Title;
