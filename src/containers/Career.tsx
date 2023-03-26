import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "../components/DropdownMenu";
import { selectJobsettings, setFilterOpened, toggleIndustry, toggleLevel, toggleLocations, toggleTilemode, toggleType } from "../redux/features/jobsettingsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Career = () => {
    const { tilemode, locations, level, industry, type, locationsActivated, levelActivated, industryActivated, typeActivated, filterOpened } = useAppSelector(selectJobsettings);
    const dispatch = useAppDispatch();

    const handleModeClick = () => {
        dispatch(toggleTilemode());
    };

    const handleIndustryClick = () => {
        dispatch(setFilterOpened("Branche"))
    };

    const handleLocationsClick = () => {
        dispatch(setFilterOpened("Standort"))
    };

    const handleLevelClick = () => {
        dispatch(setFilterOpened("Berufserfahrung"))
    }

    const handleTypeClick = () => {
        dispatch(setFilterOpened("Anstellungsart"))
    }

    return (
        <div className="career">
            <div className="career__content">
                <div className="career__content__hero">
                    Werde einer von uns
                </div>
                <div className="career__content__jobs">
                    <div className="career__content__jobs__job-container">
                        <div className="career__content__jobs__job-container__filter-container">
                            <div className="career__content__jobs__job-container__filter-container--industry">
                                <DropdownMenu category="Branche" menuList={industry} activated={filterOpened} toggleFunction={handleIndustryClick} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--locations">
                                <DropdownMenu category="Standort" menuList={locations} activated={filterOpened} toggleFunction={handleLocationsClick} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--level">
                                <DropdownMenu category="Berufserfahrung" menuList={level} activated={filterOpened} toggleFunction={handleLevelClick} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--type">
                                <DropdownMenu category="Anstellungsart" menuList={type} activated={filterOpened} toggleFunction={handleTypeClick} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--mode" onClick={handleModeClick}>
                                <span>
                                    {
                                        tilemode === true ? <BsFillGridFill /> : <FaBars />
                                    }
                                </span>
                            </div>
                        </div>
                        <div 
                            className={
                                tilemode === false ?
                                "career__content__jobs__job-container__items--regular" :
                                "career__content__jobs__job-container__items--grild"
                            }
                        >
                            Databased fetched items
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;