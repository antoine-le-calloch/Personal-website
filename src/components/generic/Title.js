import '../../styles/components/Title.css';
import ScrollButton from "./ScrollButton";

const Title = ({title, subtitle}) => {
    return (
        <div className="title" data-aos="fade-in">
            <h1>{title}</h1>
            <span>{subtitle}</span>
            <ScrollButton/>
        </div>
    );
};

export default Title;
