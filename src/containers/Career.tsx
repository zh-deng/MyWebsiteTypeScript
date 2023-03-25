import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "../components/DropdownMenu";
import { selectJobsettings, toggleTilemode } from "../redux/features/jobsettingsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Career = () => {
    const { tilemode, locations, level, industry, type } = useAppSelector(selectJobsettings);
    const dispatch = useAppDispatch();

    const handleModeClick = () => {
        dispatch(toggleTilemode());
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
                                <DropdownMenu category="Branche" menuList={industry}/>
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--locations">
                                <DropdownMenu category="Standort" menuList={locations}/>
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--level">
                                <DropdownMenu category="Berufserfahrung" menuList={level}/>
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--type">
                                <DropdownMenu category="Anstellungsart" menuList={type}/>
                            </div>
                        </div>
                        <div className="career__content__jobs__job-container__mode" onClick={handleModeClick}>
                            {
                                tilemode === true ? <BsFillGridFill /> : <FaBars />
                            }
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