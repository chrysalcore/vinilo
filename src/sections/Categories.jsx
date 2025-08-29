import "../assets/styles/Categories.css";

function Categories() {
    const data = [
        {
            href: '',
            name: 'Pizza',
            src: 'pizza.svg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            href: '',
            name: 'Pasta',
            src: 'pasta.svg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            href: '',
            name: 'Bebidas',
            src: 'drink.svg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            href: '',
            name: 'Postres',
            src: 'dessert.svg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ]

    return (
        <section className="categories section">
            <header className="section-header">
                <h2 className="section__title">Sabores Auténticos</h2>
                <p className="section__desc">Explora nuestro menú, desde clásicos atemporales hasta innovaciones de temporada.¡Cada receta es un equilibrio de texturas y sabores!</p>
            </header>
            <ul className="categories-list">
                {data.map(item => {
                    return (
                        <li className="category">
                            <a href={item.href} className="category__link">
                                <img className="category__icon" src={new URL(`../assets/icons/${item.src}`, import.meta.url)} alt={`${item.name} icon`} />
                                <h3 className="category__name">{item.name}</h3>
                                <p className="category__desc">{item.desc}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button className="categories__button button">Ver Menú</button>
        </section>
    )
}

export default Categories