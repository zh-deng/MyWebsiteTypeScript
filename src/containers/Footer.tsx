import React from "react";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__socials">
                    <div className="footer__content__socials__heading">
                        <h5>Social Media</h5>
                    </div>
                    <div className="footer__content__socials__icons">
                        <a href="https://de-de.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <GrFacebook />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram />
                        </a>
                        <a href="https://twitter.com/?lang=de" target="_blank" rel="noopener noreferrer">
                            <BsTwitter />
                        </a>
                    </div>
                </div>
                <div className="footer__content__links-container">
                    <div className="footer__content__links-container__column">
                        <div className="footer__content__links-container__column--first">
                            <h3>
                                Links - Spalte 1
                            </h3>
                            <a href=""><p>Spalte 1 - Link 1</p></a>
                            <a href=""><p>Spalte 1 - Link 2</p></a>
                            <a href=""><p>Spalte 1 - Link 3</p></a>
                            <a href=""><p>Spalte 1 - Link 4</p></a>
                            <a href=""><p>Spalte 1 - Link 5</p></a>
                        </div>
                        <div className="footer__content__links-container__column--second">
                            <h3>
                                Links-Spalte 2
                            </h3>
                            <a href=""><p>Spalte 2 - Link 1</p></a>
                            <a href=""><p>Spalte 2 - Link 2</p></a>
                            <a href=""><p>Spalte 2 - Link 3</p></a>
                            <a href=""><p>Spalte 2 - Link 4</p></a>
                            <a href=""><p>Spalte 2 - Link 5</p></a>
                        </div>
                        <div className="footer__content__links-container__column--third">
                            <h3>
                                Links-Spalte 3
                            </h3>
                            <a href=""><p>Spalte 3 - Link 1</p></a>
                            <a href=""><p>Spalte 3 - Link 2</p></a>
                            <a href=""><p>Spalte 3 - Link 3</p></a>
                            <a href=""><p>Spalte 3 - Link 4</p></a>
                            <a href=""><p>Spalte 3 - Link 5</p></a>
                        </div>
                    </div>
                </div>
                <div className="footer__content__copyright">
                    <h5>
                        Design by Zhihao Deng
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;