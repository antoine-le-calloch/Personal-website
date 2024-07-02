import '../../styles/components/Text.scss';

const Text = ({text}) => {
    return (
        <div className="text" data-aos="fade-in">
            <div className="mediumFont">
                {text}
            </div>
        </div>
    );
};

export default Text;
