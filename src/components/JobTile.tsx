import { JobProps } from "../redux/features/jobsettingsSlice";

interface JobBarProps {
    prop: JobProps;
}

const JobTile = ({ prop }: JobBarProps) => {
    const { title, description, location, type } = prop;

    return (
        <div className="jobTile">
            <div className="jobTile__teaser">
                <p>{title}</p>
                <span>
                    <h4>Standort:</h4>
                    <p>{location}</p>
                </span>
                <span>
                    <h4>Anstellungsart:</h4>
                    <p>{type}</p>
                </span>
                <span>
                    <p>{description}</p>
                </span>
                <div className="jobTile__teaser__link">
                    <p>
                        <a href="">zur Stellenanzeige</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobTile;
