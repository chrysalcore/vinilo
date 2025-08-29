import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Categories from './sections/Categories'
import About from './sections/About'
import Gallery from './sections/Gallery'
import Reservation from './sections/Reservation'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <Categories />
        <About />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}

export default App
