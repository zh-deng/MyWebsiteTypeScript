import React, { useEffect, useRef } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "../components/DropdownMenu";
import JobBar from "../components/JobBar";
import {
    ActionSelect,
    addSelected,
    removeSelected,
    selectJobsettings,
    setFilteredJobs,
    setFilterOpened,
    toggleTilemode,
} from "../redux/features/jobsettingsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Career = () => {
    const {
        tilemode,
        locations,
        level,
        industry,
        type,
        filterOpened,
        locationsSelected,
        levelSelected,
        industrySelected,
        typeSelected,
        fetchedJobs,
        filteredJobs
    } = useAppSelector(selectJobsettings);
    const dispatch = useAppDispatch();

    const industryRef = useRef<HTMLDivElement>(null);
    const locationsRef = useRef<HTMLDivElement>(null);
    const levelRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                (industryRef || locationsRef || levelRef || typeRef) &&
                !industryRef.current?.contains(event.target as Node) &&
                !locationsRef.current?.contains(event.target as Node) &&
                !levelRef.current?.contains(event.target as Node) &&
                !typeRef.current?.contains(event.target as Node)
            ) {
                dispatch(setFilterOpened(""));
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [filterOpened]);

    useEffect(() => {
        dispatch(setFilteredJobs(fetchedJobs));
    }, []);

    useEffect(() => {
        filterFetchedJobs();
    }, [locationsSelected, levelSelected, industrySelected, typeSelected]);

    const filterFetchedJobs = () => {
        let currentList = [...fetchedJobs];
        let filteredList = [];
        currentList.map((job) => {
            locationsSelected.length > 0 && locationsSelected.includes(job.location)
        });
    };

    const handleModeClick = () => {
        dispatch(toggleTilemode());
    };

    const dropdownTools = {
        activated: filterOpened,
        toggleFunction: (arg: string) => dispatch(setFilterOpened(arg)),
        selectFunction: (payload: ActionSelect) =>
            dispatch(addSelected(payload)),
        unselectFunction: (payload: ActionSelect) =>
            dispatch(removeSelected(payload)),
    };

    return (
        <div className="career">
            <div className="career__content">
                <div className="career__content__hero">
                    <h3>
                        Finde deinen Traumjob
                    </h3>
                </div>
                <div className="career__content__jobs">
                    <div className="career__content__jobs__job-container">
                        <div className="career__content__jobs__job-container__filter">
                            <div className="career__content__jobs__job-container__filter__container">
                                <div className="career__content__jobs__job-container__filter__container--industry">
                                    <DropdownMenu
                                        category="Branche"
                                        menuList={industry}
                                        selectedArray={industrySelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={industryRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--locations">
                                    <DropdownMenu
                                        category="Standort"
                                        menuList={locations}
                                        selectedArray={locationsSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={locationsRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--level">
                                    <DropdownMenu
                                        category="Berufserfahrung"
                                        menuList={level}
                                        selectedArray={levelSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={levelRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--type">
                                    <DropdownMenu
                                        category="Anstellungsart"
                                        menuList={type}
                                        selectedArray={typeSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={typeRef}
                                    />
                                </div>
                            </div>
                            <div
                                className="career__content__jobs__job-container__filter__container--mode"
                                onClick={handleModeClick}
                            >
                                <span>
                                    {tilemode === true ? (
                                        <BsFillGridFill />
                                    ) : (
                                        <FaBars />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="career__content__jobs__job-container__items">
                            <div
                                className={
                                    tilemode === false
                                        ? "career__content__jobs__job-container__items--bar"
                                        : "career__content__jobs__job-container__items--grid"
                                }
                            >
                                {
                                    filteredJobs.map((item) => {
                                        return (
                                            <div
                                                key={"jobID " + item.id}
                                            >
                                                <JobBar prop={item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={filteredJobs.length === 0 ? "career__content__jobs__job-container__items--empty" : "invisible"}>
                                <h2>
                                    Derzeit gibt es keine Jobs mit dieser Anforderung.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
