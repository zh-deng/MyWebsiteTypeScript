import Section from "../components/Section";
import img1 from "../assets/landingPage/landingpage_1.jpg";
import img2 from "../assets/landingPage/landingpage_2.jpg";
import img3 from "../assets/landingPage/landingpage_3.jpg";
import img4 from "../assets/landingPage/landingpage_4.jpg";

export interface SectionProps {
    header: string;
    text: string;
    imgURL: string;
}

const sectionList: SectionProps[] = [
    {
        header: "Header 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem modi ipsum quae blanditiis, vel accusantium? Officiis voluptates nisi impedit aperiam perspiciatis? Corrupti omnis eos asperiores ratione amet vitae delectus quis.",
        imgURL: img1,
    },
    {
        header: "Header 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem modi ipsum quae blanditiis, vel accusantium? Officiis voluptates nisi impedit aperiam perspiciatis? Corrupti omnis eos asperiores ratione amet vitae delectus quis.",
        imgURL: img2,
    },
    {
        header: "Header 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem modi ipsum quae blanditiis, vel accusantium? Officiis voluptates nisi impedit aperiam perspiciatis? Corrupti omnis eos asperiores ratione amet vitae delectus quis.",
        imgURL: img3,
    },
    {
        header: "Header 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem modi ipsum quae blanditiis, vel accusantium? Officiis voluptates nisi impedit aperiam perspiciatis? Corrupti omnis eos asperiores ratione amet vitae delectus quis.",
        imgURL: img4,
    },
];

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="landingpage__content">
                {sectionList.map((item, index) => {
                    let direction = index % 2 === 0 ? "left" : "right";
                    return (
                        <div key={item.header + index}>
                            <Section prop={item} direction={direction} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LandingPage;
