import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUi, togglePasswordVisibility } from "../redux/features/uiSlice";
import { Link } from "react-router-dom";

const Registration = () => {
    const { passwordHidden } = useAppSelector(selectUi);
    const dispatch = useAppDispatch();

    const handlePasswordClick = () => {
        dispatch(togglePasswordVisibility());
    };

    return (
        <div className="registration">
            <div className="registration__content">
                <div className="registration__content__left">
                    <div className="registration__content__left__switch-container">
                        <div className="registration__content__left__switch-container--registration">
                            <h1>Registrieren</h1>
                        </div>
                    </div>
                    <div className="registration__content__left__registration">
                        <div className="registration__content__left__registration__form">
                            <form>
                                <div className="form__field">
                                    <div className="form__field__firstname">
                                        <h6>Vorname</h6>
                                        <div className="form__field__firstname__input">
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Vorname"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form__field__lastname">
                                        <h6>Nachname</h6>
                                        <div className="form__field__lastname__input">
                                            <input
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Nachname"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form__field__email">
                                        <h6>Email-Adresse</h6>
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
                                        <h6>Passwort</h6>
                                        <div className="form__field__password__input">
                                            <input
                                                type={
                                                    passwordHidden === true
                                                        ? "password"
                                                        : "text"
                                                }
                                                name="password"
                                                id="password"
                                                placeholder="Passwort"
                                                required
                                            />
                                            <div
                                                className="form__field__password__input--icon"
                                                onClick={handlePasswordClick}
                                            >
                                                {passwordHidden === true ? (
                                                    <AiOutlineLock />
                                                ) : (
                                                    <AiOutlineUnlock />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__field__password">
                                        <h6>Passwort bestätigen</h6>
                                        <div className="form__field__password__input">
                                            <input
                                                type={
                                                    passwordHidden === true
                                                        ? "password"
                                                        : "text"
                                                }
                                                name="passwordCheck"
                                                id="passwordCheck"
                                                placeholder="Passwort"
                                                required
                                            />
                                            <div
                                                className="form__field__password__input--icon"
                                                onClick={handlePasswordClick}
                                            >
                                                {passwordHidden === true ? (
                                                    <AiOutlineLock />
                                                ) : (
                                                    <AiOutlineUnlock />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__button">
                                    <input
                                        type="submit"
                                        value="Konto eröffnen"
                                    />
                                </div>
                                <div className="form__field__login-link">
                                    <Link to="/Login">
                                        <p>Du hast schon ein Konto? Log-In</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="registration__content__right">
                    <div className="registration__content__right__switch-container">
                        <Link to="/Login">
                            <div className="registration__content__right__switch-container--login">
                                <h1>Log-In</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
