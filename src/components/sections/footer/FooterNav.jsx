function FooterNav({ data }) {
    return (
        <nav className="nav">
            <ul className="nav-list">
            {data.map(item => {
                return (
                    <li className="nav-list__item" key={item.name}>
                        <a href={item.href} className={({isActive}) => (isActive? 'selected nav-list__link' : 'nav-list__link')} rel="noopener noreferrer">{item.text}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}

export default FooterNav