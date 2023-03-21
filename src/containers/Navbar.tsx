import React from "react";
import companyLogo from "../assets/logo_transparent.png";
import germanFlag from "../assets/countryFlag/germany.png";
import ukFlag from "../assets/countryFlag/uk.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineLogin, MdOutlineDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectLanguageswitch, switchLanguage } from "../redux/features/languageswitchSlice";
import { selectdarkmode, toggleDarkmode } from "../redux/features/darkmodeSlice";

const Navbar = () => {
    const { defaultLanguage } = useAppSelector(selectLanguageswitch);
    const { darkmode } = useAppSelector(selectdarkmode);
    const dispatch = useAppDispatch();
    const handleCountryClick = () => {
        dispatch(switchLanguage());
    }
    const handleThemeClick = () => {
        dispatch(toggleDarkmode());
    }
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__content__logo">
                    <img src={companyLogo} alt="Company Logo"/>
                </div>
                <div className="navbar__content__links-container">
                    <div className="navbar__content__links-container__web">
                        <div className="navbar__content__links-container__web__theme" onClick={handleThemeClick}>
                            {
                                darkmode === true ? <CiSun /> : <MdOutlineDarkMode />
                            }
                        </div>
                        <p><a href="#products">Produkte</a></p>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#company">Unternehmen</a></p>
                        <p><a href="#career">Karriere</a></p>
                        <p><a href="#impressum">Impressum</a></p>
                        <p><a href="#login">Login</a></p>
                        <div className="navbar__content__links-container__web__country">
                            {
                                defaultLanguage === true ? <img src={germanFlag} alt="German Flag"/> : <img src={ukFlag} alt="British Flag"/>
                            }
                            <div className="navbar__content__links-container__web__country--hover" onClick={handleCountryClick}>
                                {
                                    defaultLanguage === false ? <img src={germanFlag} alt="German Flag"/> : <img src={ukFlag} alt="British Flag"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="navbar__content__links-container__mobile">
                        <p><a href="#products">Produkte</a></p>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#company">Unternehmen</a></p>
                        <p><a href="#career">Karriere</a></p>
                        <p><a href="#impressum">Impressum</a></p>
                    </div>
                    <div className="navbar__content__links-container__symbol-container">
                        <div className="navbar__content__links-container__symbol-container__icons">
                            <CiSun className="navbar__content__links-container__symbol-container__icons--sun" />
                            <MdOutlineLogin />
                            <div className="navbar__content__links-container__symbol-container__icons__country">
                                {
                                    defaultLanguage === true ? <img src={germanFlag} alt="German Flag"/> : <img src={ukFlag} alt="British Flag"/>
                                }
                                <div className="navbar__content__links-container__symbol-container__icons__country--hover" onClick={handleCountryClick}>
                                    {
                                        defaultLanguage === false ? <img src={germanFlag} alt="German Flag"/> : <img src={ukFlag} alt="British Flag"/>
                                    }
                                </div>
                            </div>
                        </div>
                        <FiMenu className="navbar__content__links-container__symbol-container__hamburger" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar