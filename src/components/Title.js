import '../styles/components/Title.css';
import ScrollButton from "./ScrollButton";

const Title = ({title, subtitle}) => {
    return (
        <div className="title" data-aos="fade-in">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <ScrollButton/>
        </div>
    );
};

export default Title;
