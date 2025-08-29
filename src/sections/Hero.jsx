import SocialInfo from "../components/SocialInfo"
import '../assets/styles/Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-firm">
                <h1 className="hero__title">Vinilo</h1>
                <p className="hero__slogan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis tenetur voluptates doloribus quas officiis non, cum, repellendus assumenda tempore illo eveniet deleniti nam? Libero voluptatum totam soluta illo inventore?</p>
                <button className="hero__cta button">Contactar</button>
            </div>
            <SocialInfo />
        </section>
    )
}

export default Hero