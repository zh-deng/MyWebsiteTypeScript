import React from "react";
import { CiSun } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { changeAnimation, selectDarkmode, toggleDarkmode } from "../redux/features/darkmodeSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const Darkmodeswitch = () => {
    const { animation, darkmode } = useAppSelector(selectDarkmode);
    const dispatch = useAppDispatch();

    const handleThemeClick = () => {
        dispatch(changeAnimation("zoomOut"));
        setTimeout(() => {
            dispatch(toggleDarkmode());
            dispatch(changeAnimation("zoomIn"));
        }, 1000);
    };

    const handleThemeAnimation:() => string = () => {
        switch(animation) {
            case "zoomOut":
                return "darkmodeswitch--zoomOut";
            case "zoomIn":
                return "darkmodeswitch--zoomIn";
            default:
                return "";
        }
    };
    
    return (
        <div className="darkmodeswitch" onClick={handleThemeClick}>
            {
                darkmode === true ?
                <CiSun className={handleThemeAnimation()} /> :
                <MdOutlineDarkMode className={handleThemeAnimation()} />
            }
        </div>
    );
};

export default Darkmodeswitch;