import Filtros from "./components/Filtros";
//import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentas from "./components/Rentas";

function App() {
  return (
    <div className="">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-[#7145D5] text-white h-screen w-14 fixed left-0">
        <div className="my-4">Casas</div>
        <div className="my-4">Hoteles</div>
        <div className="my-4">Apartamentos</div>
        <div className="my-4">Explora</div>
        <div className="my-4">Favoritos</div>
      </div>

      <div className="ml-16 p-4">
      {/* NavBar */}
      <Navbar/>
      {/* Filters */}
      <Filtros/>

      {/* Rentals */}
      <Rentas/>
      {/* Footer */}
      </div>
    </ div>
  ); 
} 
 
export  default App;
