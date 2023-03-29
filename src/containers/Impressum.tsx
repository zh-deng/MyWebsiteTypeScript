import ceoPortrait from "../assets/impressum/impressum_ceo.png";
import addressPicture from "../assets/impressum/impressum_address.png";

const Impressum = () => {
    return (
        <div className="impressum">
            <div className="impressum__content">
                <div className="impressum__content__contact">
                    <div className="impressum__content__contact--info">
                        <h2>Kontakt</h2>
                        <p>
                            Herr Max Mustermann <br />
                            CEO von MyWebsite GmbH
                        </p>
                    </div>
                    <div className="impressum__content__contact--img">
                        <img src={ceoPortrait} />
                    </div>
                </div>
                <div className="impressum__content__address">
                    <div className="impressum__content__address--info">
                        <h2>Adresse</h2>
                        <p>
                            MyWebsite GmbH <br />
                            Musterstraße 33 <br />
                            80643 München
                        </p>
                    </div>
                    <div className="impressum__content__address--img">
                        <img src={addressPicture} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
