import Nav from "../components/Nav";
import SocialInfo from "../components/SocialInfo";
import "../assets/styles/Footer.css";

function Footer() {
    const sectNav = [
        {
            href: '',
            text: 'Inicio'
        },
        {
            href: '',
            text: 'Categorias'
        },
        {
            href: '',
            text: 'Sobre Nosotros'
        },
        {
            href: '',
            text: 'Galeria'
        },
        {
            href: '',
            text: 'Reservacion'
        }
    ]

    const ctcNav = [
        {
            href: 'tel:5351505492',
            text: '+53 51505492'
        },
        {
            href: 'mailto:contact@vinilo.com',
            text: 'contact@vinilo.com'
        },
        {
            href: '',
            text: 'Joaquin Aguero #265, Camaguey Cuba'
        },
        {
            href: '',
            text: 'Lunes - Viernes / 12:00 m - 10:00 p.m'
        }
    ]

    const legcNav = [
        {
            href: '',
            text: 'Politica de Privacidad'
        },
        {
            href: '',
            text: 'Terminos y condiciones'
        },
        {
            href: '',
            text: 'Avisos Legales'
        }
    ]

    return (
        <footer className="footer section">
            <div className="footer-layout">
                <section className="footer-nav">
                    <h3 className="footer-nav__title">Sections</h3>
                    <Nav list={sectNav} />
                </section>
                <section className="footer-nav">
                    <h3 className="footer-nav__title">Contact</h3>
                    <Nav list={ctcNav} />
                </section>
                <section className="footer-nav">
                    <h3 className="footer-nav__title">Legacy</h3>
                    <Nav list={legcNav} />
                </section>
                <section className="footer-firm">
                    <h2 className="footer-firm__title">Vinilo</h2>
                </section>
            </div>
            <nav className="footer-sm">
                <SocialInfo />
            </nav>
            <div className="footer-rights">
                <small className="footer-rights__copy">&copy;Todos los derechos reservados 2025</small>
                <small className="footer-rights__auth">Hecho por <a href="">Chrysal Core</a></small>
            </div>
        </footer>
    )
}

export default Footer