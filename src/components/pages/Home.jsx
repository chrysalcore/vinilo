import CTA from '../others/CTA'
import Section from '../global/Section'
import CategoriesList from '../sections/categories/CategoriesList'
import About from '../sections/about/About'
import Gallery from '../sections/gallery/Gallery'

function Home() {
    return (
        <>
            <Section type={'categories'} >
                <CategoriesList />
                <CTA route={'menu'} >Ver Menu</CTA>
            </Section>
            <About />
            <Section type={'gallery'} >
                <Gallery />
            </Section>
        </>
    )
}

export default Home