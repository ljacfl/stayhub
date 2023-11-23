import { Carousel } from "../components/Carousel"
import { ImgBar } from "../components/ImgBar"
import { Title } from "../components/title"
import { InfoBar } from "../components/InfoBar"



export const Reserva = () => {
    return(
        <>
            <div className="reserva-container">
                <div >
                    <Title {...{titulo: "casa frente a la playa", puntuacion:8.5, ubicacion: "Isla Baru, Bolivar"}}/>
                    <Carousel/>
                    <ImgBar/>

                </div>
                <InfoBar {...{precio: "100000 COP",subtitulo:"por renta", descripcion:"De los mejores lugares para relajarse"}}/>
            </div>
        </>
        
    )
   
}