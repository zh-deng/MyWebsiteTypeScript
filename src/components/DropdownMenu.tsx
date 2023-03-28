import React, { useEffect, useRef } from "react";
import { ActionSelect } from "../redux/features/jobsettingsSlice";

interface DropdownProps {
    category: string;
    menuList: string[];
    selectedArray: string[];
    dropdownTools: {
        activated: string;
        toggleFunction: (arg: string) => void;
        selectFunction: (payload: ActionSelect) => void;
        unselectFunction: (payload: ActionSelect) => void;
    };
    dropdownRef: React.RefObject<HTMLDivElement>;
    buttonRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenu = ({
    category,
    menuList,
    selectedArray,
    dropdownTools,
    dropdownRef,
    buttonRef,
}: DropdownProps) => {
    const handleSelectClick = (item: string) => {
        selectedArray.includes(item)
            ? dropdownTools.unselectFunction({
                  category: category,
                  argument: item,
              })
            : dropdownTools.selectFunction({
                  category: category,
                  argument: item,
              });
    };

    return (
        <div className="dropdownmenu">
            <div className="dropdownmenu__content">
                <div
                    className="dropdownmenu__content__category"
                    onClick={() => dropdownTools.toggleFunction(category)}
                    ref={buttonRef}
                >
                    {category}
                    <span className="caret"></span>
                </div>
                <div
                    className={
                        dropdownTools.activated === category
                            ? "dropdownmenu__content__options"
                            : "invisible"
                    }
                    ref={dropdownRef}
                >
                    <ul>
                        {menuList.map((item, index) => (
                            <li
                                key={item + index}
                                className={
                                    selectedArray.includes(item)
                                        ? "highlight"
                                        : ""
                                }
                                onClick={() => handleSelectClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
