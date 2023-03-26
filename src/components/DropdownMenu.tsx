import React from "react";
import { useAppDispatch } from "../redux/hooks";

const DropdownMenu = ({category, menuList, activated, toggleFunction}: {category: string, menuList: string[], activated: string, toggleFunction: () => void}) => {
    const menu = menuList;

    return (
        <div className="dropdownmenu">
            <div className="dropdownmenu__content">
                <div className="dropdownmenu__content__category" onClick={toggleFunction}>
                    {
                        category
                    }
                    <span className="caret"></span>
                </div>
                <div className={activated === category ? "dropdownmenu__content__options" : "invisible"}>
                    <ul>
                        {
                            menuList.map((item, index) => (
                                <li
                                    key={item + index}
                                    onClick={toggleFunction}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;