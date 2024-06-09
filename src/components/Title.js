import '../styles/components/Title.css';

const Title = ({title, subtitle}) => {
    return (
        <div className="title">
            <div className="title-subtitle" data-aos="fade-in">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
};

export default Title;
