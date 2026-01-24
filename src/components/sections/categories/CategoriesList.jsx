import "../../../assets/styles/Categories.css";
import Category from "./Category";
import data from "../../../data/categories";

function CategoriesList() {
    return (
        <>
            <ul className="categories-list">
                {data.map(item => (
                    <Category {...item} />
                ))}
            </ul>
        </>
    )
}

export default CategoriesList