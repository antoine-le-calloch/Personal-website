import '../styles/components/Text.css';

const Text = ({text}) => {
    return (
        <div className="text" data-aos="fade-in">
            <span>
                {text}
            </span>
        </div>
    );
};

export default Text;
