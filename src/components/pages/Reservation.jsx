import { useEffect, useRef } from 'react'
import ReservationInfo from '../sections/reservation/ReservationInfo'
import Form from "../others/Form"
import '../../assets/styles/Reservation.css'

function Reservation() {
    const ref = useRef()
    
    useEffect(() => {
        ref.current.scrollIntoView()
    }, [])

    return (
        <section ref={ref} className="reservation section" id="reservation">
            <ReservationInfo />
            <Form />
        </section>
    )
}

export default Reservation