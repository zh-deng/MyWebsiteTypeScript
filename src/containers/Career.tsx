import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "../components/DropdownMenu";
import { ActionSelect, addSelected, removeSelected, selectJobsettings, setFilterOpened, toggleTilemode } from "../redux/features/jobsettingsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Career = () => {
    const { tilemode, locations, level, industry, type, filterOpened, locationsSelected, levelSelected, industrySelected, typeSelected } = useAppSelector(selectJobsettings);
    const dispatch = useAppDispatch();

    const handleModeClick = () => {
        dispatch(toggleTilemode());
    };

    const dropdownTools = {
        activated: filterOpened,
        toggleFunction: (arg: string) => dispatch(setFilterOpened(arg)),
        selectFunction: (payload: ActionSelect) => dispatch(addSelected(payload)),
        unselectFunction: (payload: ActionSelect) => dispatch(removeSelected(payload))
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
                                <DropdownMenu category="Branche" menuList={industry} selectedArray={industrySelected} dropdownTools={dropdownTools} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--locations">
                                <DropdownMenu category="Standort" menuList={locations} selectedArray={locationsSelected} dropdownTools={dropdownTools} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--level">
                                <DropdownMenu category="Berufserfahrung" menuList={level} selectedArray={levelSelected} dropdownTools={dropdownTools} />
                            </div>
                            <div className="career__content__jobs__job-container__filter-container--type">
                                <DropdownMenu category="Anstellungsart" menuList={type} selectedArray={typeSelected} dropdownTools={dropdownTools} />
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