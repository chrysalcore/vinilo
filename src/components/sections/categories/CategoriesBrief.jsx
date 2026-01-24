import { NavLink } from "react-router-dom"

function CategoriesBrief({ data }) {
    return (
        <ul className="categories-brief">
            {data.map(item => (
                <NavLink className={({ isActive }) => isActive? "categories-brief__item active" : "categories-brief__item"} to={item} >{item}</NavLink>
            ))}
        </ul>
    )
}

export default CategoriesBrief