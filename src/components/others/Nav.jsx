import { NavLink } from 'react-router-dom'
import nav from '../../data/navigation'

function Nav({ data = nav, active, handleMenu }) {
    return (
        <nav className={active? "nav active" : "nav"}>
            <ul className="nav-list">
            {data.map(item => {
                return (
                    <li className="nav-list__item" key={item.name}>
                        <NavLink to={item.href} className={({isActive}) => (isActive? 'selected nav-list__link' : 'nav-list__link')} rel="noopener noreferrer" onClick={handleMenu}>{item.text}</NavLink>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default Nav