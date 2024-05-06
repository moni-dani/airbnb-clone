import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.png";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";
import house11 from "../assets/house10.jpg";
import house12 from "../assets/house12.jpg";
import house13 from "../assets/house13.jpg";
import house14 from "../assets/house14.jpg";
import house15 from "../assets/house15.jpg";






import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "Departamento en Mérida", image: house1, price: "350 MXN " },
    { title: "Departamento en Mérida", image: house2, price: "1,000 MXN" },
    { title: "Departamento en Mérida", image: house3, price: "450 MXN" },
    { title: "Loft en Mérida", image: house15, price: "1,541 MXN" },
    { title: "Departamento en Mérida", image: house5, price: "1,700 MXN" },
    { title: "Residencia en Mérida", image: house4, price: "1,200 MXN" },
    { title: "Condominio en Mérida", image: house11, price: "1,350 MXN" },
    { title: "Loft en Mérida", image: house7, price: "980 MXN" },
    { title: "Departamento en Mérida", image: house14, price: "2,000 MXN" },
    { title: "Habitación en Mérida", image: house13, price: "900 MXN" },
    { title: "Loft en Mérida", image: house12, price: "1,000 MXN" },
    { title: "Residencia en Mérida", image: house9, price: "560 MXN" },
    { title: "Departamento en Mérida", image: house3, price: "745 MXN" },
    { title: "Condominio en Mérida", image: house8, price: "1,541 MXN" },
    { title: "Condominio en Mérida", image: house6, price: "1,200 MXN" },

  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;