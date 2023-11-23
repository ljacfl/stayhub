export const Title = ({titulo, puntuacion, ubicacion}) =>{
    return (
        <>
        <div className="title-container">

            <h3 className="lexend-type">{titulo}</h3>
            <span className="span-puntuacion lato-type" >{puntuacion}</span>
            <span className="lato-type">{ubicacion}</span>

        </div>
            
        </>
    )
}