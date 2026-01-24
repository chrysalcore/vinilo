import Nav from "../../others/Nav";
import FooterNav from './FooterNav'
import nav from "../../../data/navigation";
import ctc from "../../../data/contact";
import leg from "../../../data/legacy";

function FooterContent() {
    return (
        <div className="footer-content">
            <section className="footer-nav">
                <h3 className="footer-nav__title">Paginas</h3>
                <Nav data={nav} />
            </section>
            <section className="footer-nav">
                <h3 className="footer-nav__title">Contacto</h3>
                <FooterNav data={ctc} />
            </section>
            <section className="footer-nav">
                <h3 className="footer-nav__title">Politicas</h3>
                <FooterNav data={leg} />
            </section>
            <section className="footer-firm">
                <h2 className="footer-firm__title">Vinilo</h2>
            </section>
        </div>
    )
}

export default FooterContent