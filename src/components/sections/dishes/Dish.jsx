import Stars from "../../others/Stars"

function Dish({ image, name, price }) {
    const rating = Number((Math.random() * 2 + 3).toFixed(2))

    return (
        <li className="dish">
            <img className="dish__img" src={image} alt="dish img" />
            <div className="dish-text">
                <Stars rating={rating} />
                <h3 className="dish__name">{name}</h3>
                <strong className="dish__price">${price}</strong>
            </div>
        </li>
    )
}

export default Dish