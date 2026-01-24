import { useNavigate } from "react-router-dom"

function CTA({ children, route }) {
    const nav = useNavigate()

    const handleClick = () => {
        nav(route)
    }

    return (
        <div className="cta">
            <button className="cta__btn btn" onClick={handleClick}>{children}</button>
        </div>
    )
}

export default CTA