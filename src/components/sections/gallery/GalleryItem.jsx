function GalleryItem({ title, desc, img }) {
    return (
        <li className="gallery-list__item" key={title}>
            <picture className='gallery-list__pict'>
                <img loading='lazy' className='gallery-list__img' src={new URL(`../../../assets/imgs/${img}`, import.meta.url)} alt="offers icon" />
            </picture>
            <div className='gallery-list__text'>
                <h3 className="gallery-list__title">{title}</h3>
                <p className="gallery-list__desc">{desc}</p>
            </div>
        </li>
    )
}

export default GalleryItem