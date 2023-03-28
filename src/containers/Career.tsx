import { useEffect, useRef } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "../components/DropdownMenu";
import JobBar from "../components/JobBar";
import JobTile from "../components/JobTile";
import {
    ActionSelect,
    addSelected,
    JobProps,
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
        filteredJobs,
    } = useAppSelector(selectJobsettings);
    const dispatch = useAppDispatch();

    const industryRef = useRef<HTMLDivElement>(null);
    const locationsRef = useRef<HTMLDivElement>(null);
    const levelRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);

    const industryButtonRef = useRef<HTMLDivElement>(null);
    const locationsButtonRef = useRef<HTMLDivElement>(null);
    const levelButtonRef = useRef<HTMLDivElement>(null);
    const typeButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                industryButtonRef.current?.contains(event.target as Node) ||
                locationsButtonRef.current?.contains(event.target as Node) ||
                levelButtonRef.current?.contains(event.target as Node) ||
                typeButtonRef.current?.contains(event.target as Node)
            ) {
                return;
            }
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
        let filteredList: JobProps[] = [];
        currentList.map((job) => {
            (locationsSelected.length < 1 &&
                industrySelected.length < 1 &&
                levelSelected.length < 1 &&
                typeSelected.length < 1 &&
                (filteredList = [...filteredList, job])) ||
                ((locationsSelected.includes(job.location) ||
                    locationsSelected.length < 1) &&
                    (industrySelected.includes(job.industry) ||
                        industrySelected.length < 1) &&
                    (levelSelected.includes(job.level) ||
                        levelSelected.length < 1) &&
                    (typeSelected.includes(job.type) ||
                        typeSelected.length < 1) &&
                    (filteredList = [...filteredList, job]));
        });
        dispatch(setFilteredJobs(filteredList));
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
                    <h3>Finde deinen Traumjob</h3>
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
                                        buttonRef={industryButtonRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--locations">
                                    <DropdownMenu
                                        category="Standort"
                                        menuList={locations}
                                        selectedArray={locationsSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={locationsRef}
                                        buttonRef={locationsButtonRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--level">
                                    <DropdownMenu
                                        category="Berufserfahrung"
                                        menuList={level}
                                        selectedArray={levelSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={levelRef}
                                        buttonRef={levelButtonRef}
                                    />
                                </div>
                                <div className="career__content__jobs__job-container__filter__container--type">
                                    <DropdownMenu
                                        category="Anstellungsart"
                                        menuList={type}
                                        selectedArray={typeSelected}
                                        dropdownTools={dropdownTools}
                                        dropdownRef={typeRef}
                                        buttonRef={typeButtonRef}
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
                                    tilemode === true
                                        ? "career__content__jobs__job-container__items--grid"
                                        : "invisible"
                                }
                            >
                                {filteredJobs.map((item) => {
                                    return (
                                        <div key={"jobID " + item.id}>
                                            <JobTile prop={item} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div
                                className={
                                    tilemode === false
                                        ? "career__content__jobs__job-container__items--bar"
                                        : "invisible"
                                }
                            >
                                {filteredJobs.map((item) => {
                                    return (
                                        <div key={"jobID " + item.id}>
                                            <JobBar prop={item} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div
                                className={
                                    filteredJobs.length === 0
                                        ? "career__content__jobs__job-container__items--empty"
                                        : "invisible"
                                }
                            >
                                <h2>
                                    Derzeit gibt es keine Jobs mit dieser
                                    Anforderung.
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
