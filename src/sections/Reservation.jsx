import Form from "../components/Form"
import '../assets/styles/Reservation.css'

function Reservation() {
    const data = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'John Doe',
            isInput: true
        },
        {
            name: 'date',
            type: 'datetime-local',
            placeholder: '',
            isInput: true
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'johndoe@gmail.com',
            isInput: true
        },
        {
            name: 'capacity',
            type: 'number',
            placeholder: '6',
            isInput: true
        }
    ]

    return (
        <section class="reservation section">
            <div className="reservation-info">
                <header class="reservation-header section-header">
                    <h2 class="reservation-header__title section__title">¡No pierdas ḿas tiempo!</h2>
                    <p class="reservation-header__desc section__desc">Obtén ya tu reservación antes que alguien más decida antes, ¡es ahora o nunca!</p>
                </header>
                <Contact />
            </div>
            <Form data={data} />
        </section>
    )
}

function Contact() {
    const ctcData = [
        {
            name: 'Numero',
            href: 'tel:+5351505492',
            text: '+53 51505492',
            src: 'cellphone.svg'
        },
        {
            name: 'Correo Electronico',
            href: 'mailto:moulerouge@gmail.com',
            text: 'moulerouge@gmail.com',
            src: 'gmail.svg'
        },
        {
            name: 'Whatsapp',
            href: 'https://wa.me/5351505492',
            text: '+53 51505492',
            src: 'whatsapp.svg'
        }
    ]

    return (
        <ul className='contact'>   
        {ctcData.map(item => {
            return (
                <li className="contact__item" key={item.name}>
                    <img className="contact__img" src={new URL(`/src/assets/icons/${item.src}`, import.meta.url)} alt={`${item.name} icon`} />
                    <div className="contact__text">
                        <h4 className="contact__title">{item.name}</h4>
                        <a className="contact__name" href={item.href}>{item.text}</a>
                    </div>
                </li>
            )
        })}             
        </ul>
    )
}

export default Reservation