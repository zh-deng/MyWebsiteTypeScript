import {
    JobProps,
    toggleJobExpansion,
} from "../redux/features/jobsettingsSlice";
import { useAppDispatch } from "../redux/hooks";

interface JobBarProps {
    prop: JobProps;
}

const JobBar = ({ prop }: JobBarProps) => {
    const {
        id,
        title,
        description,
        location,
        level,
        industry,
        type,
        teaserClicked,
    } = prop;
    const dispatch = useAppDispatch();

    const handleExpandClick = () => {
        dispatch(toggleJobExpansion(id));
    };

    return (
        <div className="jobBar">
            <div className="jobBar__teaser" onClick={handleExpandClick}>
                <p>{title}</p>
                <p>{location}</p>
                <p>{type}</p>
                <span>
                    <p>mehr erfahren</p>
                </span>
            </div>
            <div
                className={
                    teaserClicked === true ? "jobBar__expand" : "invisible"
                }
            >
                <span>
                    <h4>Branche:</h4>
                    <p>{industry}</p>
                </span>
                <span>
                    <h4>Berufserfahrung:</h4>
                    <p>{level}</p>
                </span>
                <span>
                    <h4>Beschreibung:</h4>
                    <p>{description}</p>
                </span>
                <p>
                    <a href="">zur Stellenanzeige</a>
                </p>
            </div>
        </div>
    );
};

export default JobBar;
