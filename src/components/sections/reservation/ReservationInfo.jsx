import SectionHeader from "../../global/SectionHeader"
import Contact from "./Contact"
import data from "../../../data/headers"

function ReservationInfo() {
    return (
        <div className="reservation-info">
            <SectionHeader {...data['reservation']} />
            <Contact />
        </div>
    )
}

export default ReservationInfo