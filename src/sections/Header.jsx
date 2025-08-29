import Nav from '../components/Nav'
import '../assets/styles/Header.css'

function Header() {
    const navInfo = [
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

    return (
        <header className="header">
            <img className="header__logo" src={new URL("/src/assets/icons/vinilo.svg", import.meta.url)} alt="main logo" />
            <Nav list={navInfo} />
            <div className='header-buttons'>
                <button className='header__btn-res'>Reservation</button>
                <button className="header__btn-menu">
                    <img className="header__btn-menu-img" src={new URL("/src/assets/icons/menu.svg", import.meta.url)} alt="menu icon" />
                </button>
            </div>
        </header>
    )
}

export default Header