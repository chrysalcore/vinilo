import SocialInfo from "../../others/SocialInfo"
import '../../../assets/styles/Hero.css'
import CTA from "../../others/CTA"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-firm">
                <h1 className="hero__title">Vinilo</h1>
                <p className="hero__slogan"><strong>Cada pizza es un clásico y cada bocado tiene su nota.</strong><br />Disfruta de la auténtica pizza artesanal en un ambiente que rinde homenaje a los grandes éxitos de todos los tiempos.</p>
                <CTA route={'reservation'} >Contactar</CTA>
            </div>
            <SocialInfo />
        </section>
    )
}

export default Hero