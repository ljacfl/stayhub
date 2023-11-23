import React, { useState } from "react"
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

export const InfoBar = ({precio, subtitulo, descripcion}) => {
    const [llegada,setLlegada] = useState({
        fechaLlegada: new Date(),
    })

    const [salida, setSalida] = useState({
        fechaSalida: new Date()

    })

    const handleChangeLlegada = (fechaLlegada) => {
        setLlegada({fechaLlegada:fechaLlegada})
    }

    const handleChangeSalida = (fechaSalida) => {
        setSalida({fechaSalida:fechaSalida})
    }

    const fechaReserva = () =>{
        alert(`su fecha de llegada al sitio es el dia ${llegada.fechaLlegada} y su fecha de salida del sitio es el dia ${salida.fechaSalida} `)
    }

    return (
        <>
            <div className="infobar-container">
                <div>
                    <div>
                        <h3>{precio}</h3>
                        <span>{subtitulo}</span>
                    </div>
                    <div className="description-class">
                        <span>{descripcion}</span>
                    </div>
                </div>
                <div>
                    <div className="display-flex">
                        <div>
                            <label className="lable-container">Llegada</label>
                            <Datepicker className="llegada-class"
                                selected={llegada.fechaLlegada}
                                onChange={handleChangeLlegada}
                            />
                        </div>
                        <div>
                            <label className="lable-container ">Salida</label>
                            <Datepicker className="salida-class"
                                selected={salida.fechaSalida}
                                onChange={handleChangeSalida}
                            />
                        </div>
                        
                    </div>
                    <button value = "Reservar" className="reserva-boton" onClick={() => {fechaReserva()}} > Reservar </button>
                </div>
            </div>
        </>
    )
}