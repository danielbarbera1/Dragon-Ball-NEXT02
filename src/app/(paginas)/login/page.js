export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0] p-4">
      <div className="w-full max-w-md bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 italic">
        <h2 className="text-4xl font-black text-[#5088C5] uppercase mb-8 [text-shadow:3px_3px_0px_#000] tracking-tighter">
          ENTRAR AL <span className="text-[#E31F26]">COMBATE</span>
        </h2>
        
        <form className="space-y-6">
          <div>
            <label className="block font-black uppercase mb-1">Tu Correo de Guerrero</label>
            <input type="email" placeholder="goku@capsulecorp.com" 
              className="w-full border-4 border-black p-3 font-bold outline-none focus:bg-[#FCEE21] transition-colors shadow-[4px_4px_0px_0px_#000]" />
          </div>
          
          <div>
            <label className="block font-black uppercase mb-1">Contraseña Ki</label>
            <input type="password" placeholder="********" 
              className="w-full border-4 border-black p-3 font-bold outline-none focus:bg-[#FCEE21] transition-colors shadow-[4px_4px_0px_0px_#000]" />
          </div>

          <button className="w-full bg-[#E31F26] border-4 border-black py-4 text-white font-black uppercase text-xl shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            ELEVAR PODER (LOGIN)
          </button>
        </form>
        
        <p className="mt-6 font-bold text-center">
          ¿No tienes cuenta? <a href="/registro" className="text-[#5088C5] underline decoration-4">¡Únete al Torneo!</a>
        </p>
      </div>
    </div>
  )
}