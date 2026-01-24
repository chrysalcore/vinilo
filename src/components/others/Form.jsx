import CTA from "./CTA"
import data from "../../data/reservation"

function Form() {
    return (
        <form className="form" action="">
            {data.map(item => (
                <Input {...item} key={item.name} />
            ))}
            <CTA>Submit</CTA>
        </form>
    )
}

function Input({ name, type, placeholder, isInput }) {
    return (
        <label className="form-field" htmlFor={name}>
            <span className="form-field__text">{name}</span>
            {isInput? 
                <input className="form-field__input" type={type} name={name} id={name} placeholder={placeholder} required />
                :
                <textarea className="form-field__input" name={name} id={name} placeholder={placeholder} rows='6' required></textarea>
            }
        </label>
    )
}

export default Form