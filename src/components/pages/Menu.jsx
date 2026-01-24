import { useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"
import { useData } from "../../context/dataContext"
import CategoriesBrief from "../sections/categories/CategoriesBrief"

function Menu() {
    const { categories } = useData()
    const ref = useRef()

    useEffect(() => {
        ref.current.scrollIntoView()
    }, [])

    return (
        <section ref={ref} className="menu section">
            <CategoriesBrief data={categories} />
            <Outlet />
        </section>
    )
}

export default Menu