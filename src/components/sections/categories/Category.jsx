function Category({ name, desc, src, href }) {
    return (
        <li className="category" key={name}>
            <a href={href} className="category__link">
                <img loading="lazy" className="category__icon" src={new URL(`../../../assets/icons/${src}`, import.meta.url)} alt={`${name} icon`} />
                <h3 className="category__name">{name}</h3>
                <p className="category__desc">{desc}</p>
            </a>
        </li>
    )
}

export default Category;