import { useParams } from "react-router-dom"
import { useData } from "../../../context/dataContext"
import '../../../assets/styles/Dishes.css'
import DishesList from './DishesList'

function Dishes() {
    const { category } = useParams()
    const { data } = useData()

    return (
        <section className="dishes">
            <h2 className="section__title">Platos</h2>
            <DishesList data={data} category={category} />
        </section>
    )
}

export default Dishes