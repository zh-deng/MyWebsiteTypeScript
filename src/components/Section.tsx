import { SectionProps } from "../containers/LandingPage";

interface PropAttr {
    prop: SectionProps;
    direction: string;
}

const Section = ({ prop, direction }: PropAttr) => {
    const { header, text, imgURL } = prop;
    return (
        <div className="section">
            <div
                className={
                    direction === "left"
                        ? "section__content"
                        : "section__content text--right"
                }
            >
                <div className="section__content__info">
                    <h2>{header}</h2>
                    <p>{text}</p>
                </div>
                <div className="section__content__image">
                    <img src={imgURL} />
                </div>
            </div>
        </div>
    );
};

export default Section;
