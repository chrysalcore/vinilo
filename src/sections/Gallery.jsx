import '../assets/styles/Gallery.css'

function Gallery() {
    const items = [
        {
            title: 'Instantáneas de Sabor',
            desc: 'Echa ya un vistazo nuestras creaciones, el ambiente acogedor y los momentos que definen la experiencia Vinilo.',
            img: 'esthetic.png'
        },
        {
            title: 'Ofertas Irresistibles',
            desc: '¿Una deliciosa pizza verde?¿Un enorme algodón de azúcar acompañado de helado? Descubre todas de nuestras sorpresas.',
            img: 'offers.png'
        },
        {
            title: 'Precios de Ensueño',
            desc: '¿Quieres disfrutar junto a personas especiales sin preocuparte por gastar demasiado?.',
            img: 'context.png'
        }
    ]

    return (
        <section className="gallery section">
            <header className="section-header">
                <h2 className="section__title">Instantáneas de Sabor</h2>
                <p className="section__desc">Echa ya un vistazo nuestras creaciones, el ambiente acogedor y los momentos que definen la experiencia Vinilo</p>
            </header>
            <ul className="gallery-list">
                {items.map(item => {
                    return (
                        <li className="gallery-list__item" key={item.title}>
                            <picture className='gallery-list__pict'>
                                <img loading='lazy' className='gallery-list__img' src={new URL(`/src/assets/imgs/${item.img}`, import.meta.url)} alt="offers icon" />
                            </picture>
                            <div className='gallery-list__text'>
                                <h3 className="gallery-list__title">{item.title}</h3>
                                <p className="gallery-list__desc">{item.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Gallery