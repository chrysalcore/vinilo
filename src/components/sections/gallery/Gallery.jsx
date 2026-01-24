import '../../../assets/styles/Gallery.css'
import GalleryItem from './GalleryItem'
import data from '../../../data/gallery'

function Gallery() {
    return (
        <ul className="gallery-list">
            {data.map(item => (
                <GalleryItem {...item} />
            ))}
        </ul>
    )
}

export default Gallery