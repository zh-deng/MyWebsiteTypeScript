import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__content__heading">
                    <h1>Change</h1>
                </div>
                <div className="hero__content__slogan">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dignissimos nostrum recusandae eligendi hic fugit,
                        quam omnis. Deserunt saepe debitis illum!
                    </p>
                </div>
                <div className="hero__content__button">
                    <Link to="/Registrierung"><p>Starten Sie durch!</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
