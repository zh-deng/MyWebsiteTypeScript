import React from "react";
import companyLogo_bright from "../assets/logo/logo_transparent.png";
import companyLogo_dark from "../assets/logo/logo_transparent_dark.png"
import germanFlag from "../assets/countryFlag/germany.png";
import ukFlag from "../assets/countryFlag/uk.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectLanguageswitch, switchLanguage } from "../redux/features/languageswitchSlice";
import { selectDarkmode } from "../redux/features/darkmodeSlice";
import Darkmodeswitch from "../components/Darkmodeswitch";
import { selectMobileswitch, toggleMobile } from "../redux/features/mobileswitchSlice";

const Navbar = () => {
    const { defaultLanguage } = useAppSelector(selectLanguageswitch);
    const { darkmode } = useAppSelector(selectDarkmode);
    const { mobile } = useAppSelector(selectMobileswitch);
    const dispatch = useAppDispatch();

    const handleCountryClick = () => {
        dispatch(switchLanguage());
    }

    const handleMobileClick = () => {
        dispatch(toggleMobile());
    }

    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__content__logo">
                    {
                        darkmode === true ? <img src={companyLogo_bright} alt="Company Logo"/> : <img src={companyLogo_dark} alt="Company Logo"/>  
                    }
                </div>
                <div className="navbar__content__links-container">
                    <div className="navbar__content__links-container__web">
                        <div className="navbar__content__links-container__web--darkmode">
                            <Darkmodeswitch />
                        </div>
                        <div className="navbar__content__links-container__web__container">
                            <p><a href="#products">Produkte<span className="caret" /></a></p>
                            <div className="navbar__content__links-container__web__container--expand">
                                <p><a href="#tbd"></a>Produkt 1</p>
                                <p><a href="#tbd"></a>Produkt 2</p>
                                <p><a href="#tbd"></a>Produkt 3</p>
                                <p><a href="#tbd"></a>Produkt 4</p>
                                <p><a href="#tbd"></a>Produkt 5</p>
                            </div>
                        </div>
                        <div className="navbar__content__links-container__web__container">
                            <p><a href="#services">Services<span className="caret" /></a></p>
                            <div className="navbar__content__links-container__web__container--expand">
                                <p><a href="#tbd"></a>Service A</p>
                                <p><a href="#tbd"></a>Produkt B</p>
                                <p><a href="#tbd"></a>Produkt C</p>
                            </div>
                        </div>
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
                    <div className={mobile === true ? "navbar__content__links-container__mobile" : "invisible"}>
                        <div className="navbar__content__links-container__mobile__exit">
                            <span onClick={handleMobileClick}>
                                <p>Schließen</p>
                                <ImCross />
                            </span>
                        </div>
                        <p><a href="#products">Produkte<span className="caret" /></a></p>
                        <p><a href="#services">Services<span className="caret" /></a></p>
                        <p><a href="#company">Unternehmen</a></p>
                        <p><a href="#career">Karriere</a></p>
                        <p><a href="#impressum">Impressum</a></p>
                    </div>
                    <div className="navbar__content__links-container__symbol-container">
                        <div className="navbar__content__links-container__symbol-container__icons">
                            <div className="navbar__content__links-container__symbol-container__icons--darkmode">
                                <Darkmodeswitch />
                            </div>
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
                        <FiMenu className="navbar__content__links-container__symbol-container__hamburger" onClick={handleMobileClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar