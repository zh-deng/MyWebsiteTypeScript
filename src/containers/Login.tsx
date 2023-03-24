import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUi, togglePasswordVisibility } from "../redux/features/uiSlice";
import loginWelcomeBack from "../assets/login/login_welcomeback.jpg";

const Login = () => {
    const { passwordHidden } = useAppSelector(selectUi);
    const dispatch = useAppDispatch();

    const handlePasswordClick = () => {
        dispatch(togglePasswordVisibility());
    }

    return (
        <div className="login">
            <div className="login__content">
                <div className="login__content__left">
                </div>
                <div className="login__content__right">
                    <div className="login__content__right__switch-container">
                        <div className="login__content__right__switch-container--login">
                            <h1>
                                Log-In
                            </h1>
                        </div>
                        <div className="login__content__right__switch-container--register">
                            <h1>
                                Registrieren
                            </h1>
                        </div>
                    </div>
                    <div className="login__content__right__login">
                        <div className="login__content__right__login__form">
                            <form>
                                <div className="form__field">
                                    <div className="form__field__email">
                                        <h6>
                                            Email-Adresse
                                        </h6>
                                        <div className="form__field__email__input">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email-Adresse"
                                                required
                                            />
                                            <HiOutlineMail />
                                        </div>
                                    </div>
                                    <div className="form__field__password">
                                        <h6>
                                            Passwort
                                        </h6>
                                        <div className="form__field__password__input">
                                            <input
                                                type={passwordHidden === true ? "password" : "text"}
                                                name="password"
                                                id="password"
                                                placeholder="Passwort"
                                                required
                                            />
                                            <div className="form__field__password__input--icon" onClick={handlePasswordClick}>
                                                {
                                                    passwordHidden === true ? <AiOutlineLock /> : <AiOutlineUnlock />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__forgot-password">
                                    <a href="">
                                        <p>
                                            Passwort vergessen
                                        </p>
                                    </a>
                                </div>
                                <div className="form__button">
                                    <input
                                        type="submit"
                                        value="Anmelden"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;