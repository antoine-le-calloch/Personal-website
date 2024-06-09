import '../styles/components/Text.css';

const Text = ({text}) => {
    return (
        <div className="text" data-aos="fade-in">
            {text}
        </div>
    );
};

export default Text;
