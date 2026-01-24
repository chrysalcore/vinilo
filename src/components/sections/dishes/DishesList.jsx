import Dish from './Dish'

function DishesList({ data, category }) {
    data = data.filter(item => item.category == category)

    return (
        <ul className="dishes-list">    
            {data.map(item => (
                <Dish {...item} />
            ))}
        </ul>
    )
}

export default DishesList