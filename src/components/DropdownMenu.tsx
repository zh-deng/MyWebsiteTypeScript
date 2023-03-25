import React from "react";

const DropdownMenu = ({category, menuList}: {category: string, menuList: string[]}) => {

    const menu = menuList;
    return (
        <div className="dropdownmenu">
            <div className="dropdownmenu__content">
                <div className="dropdownmenu__content__category">
                    {
                        category
                    }
                    <span className="caret"></span>
                </div>
                <div className="dropdownmenu__content__options">
                    <ul>
                        {
                            menuList.map((item, index) => (
                                <li
                                    key={item + index}
                                    onClick={() => {}}
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