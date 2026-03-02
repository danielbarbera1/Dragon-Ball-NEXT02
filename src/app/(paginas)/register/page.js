'use client' 

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0] p-4">
      <div className="w-full max-w-md bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 italic">
        <h2 className="text-4xl font-black text-[#E31F26] uppercase mb-8 [text-shadow:3px_3px_0px_#000] tracking-tighter">
          NUEVO <span className="text-[#5088C5]">GUERRERO</span>
        </h2>
        
        <form className="space-y-4">
          <div>
            <label className="block font-black uppercase mb-1">Nombre / Nickname</label>
            <input type="text" placeholder="Ej: Veggie77" 
              className="w-full border-4 border-black p-3 font-bold outline-none focus:bg-[#FCEE21] shadow-[4px_4px_0px_0px_#000]" />
          </div>

          <div>
            <label className="block font-black uppercase mb-1">Raza (Saiyajin, Humano...)</label>
            <select className="w-full border-4 border-black p-3 font-bold outline-none focus:bg-[#FCEE21] shadow-[4px_4px_0px_0px_#000] appearance-none">
              <option>Saiyajin</option>
              <option>Humano</option>
              <option>Namekusei</option>
            </select>
          </div>
          
          <div>
            <label className="block font-black uppercase mb-1">Correo Electrónico</label>
            <input type="email" placeholder="bulma@capsulecorp.com" 
              className="w-full border-4 border-black p-3 font-bold outline-none focus:bg-[#FCEE21] shadow-[4px_4px_0px_0px_#000]" />
          </div>

          <button type="button" className="w-full bg-[#5088C5] border-4 border-black py-4 text-white font-black uppercase text-xl shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all mt-4">
            REGISTRARME EN LA CAPSULE CORP.
          </button>
        </form>
      </div>
    </div>
  )
}