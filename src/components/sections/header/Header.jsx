import { useState } from 'react'
import Logo from '../../others/Logo'
import Nav from '../../others/Nav'
import CTA from '../../others/CTA'
import '../../../assets/styles/Header.css'

function Header() {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
    }

    return (
        <header className="header">
            <Logo />
            <Nav active={active} handleMenu={handleMenu} />
            <div className='header-buttons'>
                <CTA route={'reservation'} >Reservar</CTA>
                <button className="header__btn" onClick={handleMenu}>
                    <img className="header__btn-img" src={new URL("../../../assets/icons/menu.svg", import.meta.url)} alt="menu icon" />
                </button>
            </div>
        </header>
    )
}

export default Header