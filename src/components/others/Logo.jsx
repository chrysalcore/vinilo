import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to='' className='logo'>
            <img className="logo__img" src={new URL("../../assets/icons/vinilo.svg", import.meta.url)} alt="home logo" />
        </Link>
    )
}

export default Logo;