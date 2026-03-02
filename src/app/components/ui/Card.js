// components/CharacterCard.jsx
export default function Card({ nombre = "Son Goku", raza = "Saiyajin", poder = "9001", imagen, onDetailClick }) {
  return (
    <div className="max-w-xs bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden italic transition-transform hover:-translate-y-2 h-full flex flex-col">
      {/* Cabecera */}
      <div className="bg-[#5088C5] border-b-4 border-black p-4 flex justify-between items-center">
        <h3 className="text-white font-black text-xl uppercase [text-shadow:2px_2px_0px_#000] truncate">{nombre}</h3>
        <span className="bg-[#FCEE21] border-2 border-black px-2 text-xs font-black -skew-x-12 shadow-[2px_2px_0px_0px_#000]">
          LVL {poder}
        </span>
      </div>

      {/* Espacio para la Imagen Real de la API */}
      <div className="bg-white p-4 h-64 flex items-center justify-center border-b-4 border-black relative overflow-hidden">
        {/* Un pequeño efecto de fondo para que la imagen resalte */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ddd_1px,_transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <img
          src={imagen}
          alt={nombre}
          className="h-full object-contain z-10 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)]"
        />
      </div>

      {/* Cuerpo de la card */}
      <div className="p-4 space-y-2 flex-grow bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <p className="font-black text-black uppercase">Raza: <span className="text-[#E31F26]">{raza}</span></p>

        {/* Barra de energía */}
        <div className="w-full bg-gray-200 border-2 border-black h-4 shadow-[3px_3px_0px_0px_#000]">
          <div className="bg-[#E31F26] h-full w-[85%] border-r-2 border-black animate-pulse"></div>
        </div>

        <button
          onClick={onDetailClick}
          className="w-full mt-4 bg-[#FCEE21] border-4 border-black py-2 font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          Ver Detalles
        </button>
      </div>
    </div>
  )
}