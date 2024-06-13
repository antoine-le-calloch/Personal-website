import '../../styles/components/Text.css';
import PropTypes from "prop-types";

const Text = ({text}) => {
    return (
        <div className="text" data-aos="fade-in">
            <span>
                {text}
            </span>
        </div>
    );
};

Text.propTypes = {
    text: PropTypes.string.isRequired
};

export default Text;
