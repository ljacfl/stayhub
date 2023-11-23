import React from "react";
import house1 from "../assets/casa1.jpg";
import house2 from "../assets/casa2.jpg";
import house3 from "../assets/casa3.jpeg";
import house4 from "../assets/casa4.jpg";
//import house5 from "../assets/house5.jpg";
import Renta from "./Renta";

const Rentas = () => {
  const rentas = [
    { title: "Medellin, Antioquia", image: house1, price: "450.000 COP / 110 USD" },
    { title: "Cali, Valle del Cauca", image: house2, price: "350.000 COP / 86 USD" },
    { title: "Bogotá, Cundinamarca", image: house3, price: "430.000 COP / 106 USD" },
    { title: "Manizales, Caldas", image: house4, price: "290.000 COP / 72 USD" },
    { title: "Medellin, Antioquia", image: house1, price: "450.000 COP / 110 USD" },
    { title: "Cali, Valle del Cauca", image: house2, price: "350.000 COP / 86 USD" },
    { title: "Bogotá, Cundinamarca", image: house3, price: "430.000 COP / 106 USD" },
    { title: "Manizales, Caldas", image: house4, price: "290.000 COP / 72 USD" },
    { title: "Medellin, Antioquia", image: house1, price: "450.000 COP / 110 USD" },
    { title: "Cali, Valle del Cauca", image: house2, price: "350.000 COP / 86 USD" },
    { title: "Bogotá, Cundinamarca", image: house3, price: "430.000 COP / 106 USD" },
    { title: "Manizales, Caldas", image: house4, price: "290.000 COP / 72 USD" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentas.map((renta) => (
          <Renta
            title={renta.title}
            image={renta.image}
            price={renta.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentas;
