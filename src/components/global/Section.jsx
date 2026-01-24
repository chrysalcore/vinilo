import SectionHeader from "./SectionHeader"
import data from "../../data/headers"

function Section({ children, type }) {
    return (
        <section className={`${type} section`}>
            <SectionHeader {...data[type]} />
            {children}
        </section>
    )
}

export default Section