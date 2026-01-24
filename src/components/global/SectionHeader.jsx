function SectionHeader({ title, desc }) {
    return (
        <header className="section-header">
            <h2 className="section__title">{title}</h2>
            <p className="section__desc">{desc}</p>
        </header>
    )
}

export default SectionHeader