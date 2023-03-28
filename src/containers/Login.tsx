import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUi, togglePasswordVisibility } from "../redux/features/uiSlice";
import { Link } from "react-router-dom";

const Login = () => {
    const { passwordHidden } = useAppSelector(selectUi);
    const dispatch = useAppDispatch();

    const handlePasswordClick = () => {
        dispatch(togglePasswordVisibility());
    };

    return (
        <div className="login">
            <div className="login__content">
                <div className="login__content__left">
                    <div className="login__content__left__switch-container">
                        <Link to="/Registrierung">
                            <div className="login__content__left__switch-container--registration">
                                <h1>Registrieren</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="login__content__right">
                    <div className="login__content__right__switch-container">
                        <div className="login__content__right__switch-container--login">
                            <h1>Log-In</h1>
                        </div>
                    </div>
                    <div className="login__content__right__login">
                        <div className="login__content__right__login__form">
                            <form>
                                <div className="loginForm__field">
                                    <div className="loginForm__field__email">
                                        <h6>Email-Adresse</h6>
                                        <div className="loginForm__field__email__input">
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
                                    <div className="loginForm__field__password">
                                        <h6>Passwort</h6>
                                        <div className="loginForm__field__password__input">
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
                                                className="loginForm__field__password__input--icon"
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
                                <div className="loginForm__forgot-password">
                                    <a href="">
                                        <p>Passwort vergessen</p>
                                    </a>
                                </div>
                                <div className="loginForm__button">
                                    <input type="submit" value="Anmelden" />
                                </div>
                                <div className="loginForm__field__register-link">
                                    <Link to="/Registrierung">
                                        <p>
                                            Noch kein Konto? Registriere dich
                                            jetzt!
                                        </p>
                                    </Link>
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
