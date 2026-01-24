import data from "../../../data/contact"

function Contact() {
    return (
        <ul className='contact'>   
        {data.slice(0,3).map(item => {
            return (
                <li className="contact__item" key={item.name}>
                    <img loading="lazy" className="contact__img" src={new URL(`../../../assets/icons/${item.src}`, import.meta.url)} alt={`${item.name} icon`} />
                    <div className="contact__text">
                        <h3 className="contact__title">{item.name}</h3>
                        <a className="contact__name" href={item.href} rel="noopener norreferer" target="blank">{item.text}</a>
                    </div>
                </li>
            )
        })}             
        </ul>
    )
}

export default Contact