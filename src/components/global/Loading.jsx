function Loading() {
    return (
        <div className="loading section">
            <img className="loading__img" src={new URL("../../assets/icons/vinilo.svg", import.meta.url).href} alt="load icon" />
            <h2 className="loading__text">Cargando...</h2>
        </div>
    )
}

export default Loading;