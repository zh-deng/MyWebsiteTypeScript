import React from "react";
import companyLogo_bright from "../assets/logo/logo_transparent.png";
import companyLogo_dark from "../assets/logo/logo_transparent_dark.png"
import germanFlag from "../assets/countryFlag/germany.png";
import ukFlag from "../assets/countryFlag/uk.png";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectLanguageswitch, switchLanguage } from "../redux/features/languageswitchSlice";
import { selectDarkmode } from "../redux/features/darkmodeSlice";
import Darkmodeswitch from "../components/Darkmodeswitch";
import { selectMobileswitch, toggleMobile, toggleProduct, toggleService } from "../redux/features/mobileswitchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { defaultLanguage } = useAppSelector(selectLanguageswitch);
    const { darkmode } = useAppSelector(selectDarkmode);
    const { mobile, productMobile, serviceMobile } = useAppSelector(selectMobileswitch);
    const dispatch = useAppDispatch();

    const handleCountryClick = () => {
        dispatch(switchLanguage());
    }

    const handleMobileClick = () => {
        dispatch(toggleMobile());
    }

    const handleMobileProductClick = () => {
        dispatch(toggleProduct());
    }

    const handleMobileServiceClick = () => {
        dispatch(toggleService());
    }

    return (
        <div className="navbar">
            <div className="navbar__content">
                <Link to="/">
                    <div className="navbar__content__logo">
                        {
                            darkmode === true ? <img src={companyLogo_bright} alt="Company Logo"/> : <img src={companyLogo_dark} alt="Company Logo"/>
                        }
                    </div>
                </Link>
                <div className="navbar__content__links-container">
                    <div className="navbar__content__links-container__web">
                        <div className="navbar__content__links-container__web--darkmode">
                            <Darkmodeswitch />
                        </div>
                        <div className="navbar__content__links-container__web__container">
                            <Link to="/Produkte"><p>Produkte<span className="caret" /></p></Link>
                            <div className="navbar__content__links-container__web__container--expand">
                                <Link to=""><p>Produkt 1</p></Link>
                                <Link to=""><p>Produkt 2</p></Link>
                                <Link to=""><p>Produkt 3</p></Link>
                                <Link to=""><p>Produkt 4</p></Link>
                                <Link to=""><p>Produkt 5</p></Link>
                            </div>
                        </div>
                        <div className="navbar__content__links-container__web__container">
                            <Link to="/Services"><p>Services<span className="caret" /></p></Link>
                            <div className="navbar__content__links-container__web__container--expand">
                                <Link to=""><p>Service A</p></Link>
                                <Link to=""><p>Service B</p></Link>
                                <Link to=""><p>Service C</p></Link>
                            </div>
                        </div>
                        <Link to="/Unternehmen"><p>Unternehmen</p></Link>
                        <Link to="/Karriere"><p>Karriere</p></Link>
                        <Link to="/Impressum"><p>Impressum</p></Link>
                        <Link to="/Login"><p>Login</p></Link>
                        <div className="navbar__content__links-container__web__country" data-current={defaultLanguage === true ? "DE" : "EN"}>
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
                        <div className="navbar__content__links-container__mobile__container">
                            <div className="navbar__content__links-container__mobile__container--regular" onClick={handleMobileProductClick}>
                                <Link to="/Produkte"><p>Produkte<span className="caret" /></p></Link>
                            </div>
                            <div className={productMobile === true ? "navbar__content__links-container__mobile__container--expand" : "invisible"} onClick={handleMobileClick}>
                                <Link to="/Produkte"><p>Produkt 1</p></Link>
                                <Link to="/Produkte"><p>Produkt 2</p></Link>
                                <Link to="/Produkte"><p>Produkt 3</p></Link>
                                <Link to="/Produkte"><p>Produkt 4</p></Link>
                                <Link to="/Produkte"><p>Produkt 5</p></Link>
                            </div>
                        </div>
                        <div className="navbar__content__links-container__mobile__container">
                            <div className="navbar__content__links-container__mobile__container--regular" onClick={handleMobileServiceClick}>
                                <Link to="/Services"><p>Services<span className="caret" /></p></Link>
                            </div>
                            <div className={serviceMobile === true ? "navbar__content__links-container__mobile__container--expand" : "invisible"} onClick={handleMobileClick}>
                                <Link to="/Services"><p>Service A</p></Link>
                                <Link to="/Services"><p>Service B</p></Link>
                                <Link to="/Services"><p>Service C</p></Link>
                            </div>
                        </div>
                            <span onClick={handleMobileClick}>
                                <Link to="/Unternehmen"><p>Unternehmen</p></Link>
                                <Link to="/Karriere"><p>Karriere</p></Link>
                                <Link to="/Impressum"><p>Impressum</p></Link>
                            </span>
                    </div>
                    <div className="navbar__content__links-container__symbol-container">
                        <div className="navbar__content__links-container__symbol-container__icons">
                            <div className="navbar__content__links-container__symbol-container__icons--darkmode">
                                <Darkmodeswitch />
                            </div>
                            <Link to="/Login">
                                <CgProfile />
                            </Link>
                            <div className="navbar__content__links-container__symbol-container__icons__country" onClick={handleCountryClick} data-current={defaultLanguage === true ? "DE" : "EN"}>
                                {
                                    defaultLanguage === true ? <img src={germanFlag} alt="German Flag"/> : <img src={ukFlag} alt="British Flag"/>
                                }
                            </div>
                        </div>
                        <FiMenu className="navbar__content__links-container__symbol-container__hamburger" onClick={handleMobileClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;