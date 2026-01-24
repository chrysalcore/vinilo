import { Outlet } from 'react-router-dom'
import { DataProvider } from './context/dataContext'
import useConnect from './hooks/useConnect'
import './App.css'
import Header from './components/sections/header/Header'
import Hero from './components/sections/hero/Hero'
import Footer from './components/sections/footer/Footer'
import Loading from './components/global/Loading'

function App() {
  const [
    data,
    loading,
    error
  ] = useConnect('https://devsapihub.com/api-fast-food')

  const categories = [...new Set(data.map(item => item.category))]

  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        {
          loading?
            <Loading />
            :
            <DataProvider value={{ categories, data }} >
              <Outlet />
            </DataProvider>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
