// components/DragonButton.jsx
export default function Button({ text = "Invocar Shenlong" }) {
  return (
    <button className="relative px-8 py-3 bg-[#E31F26] border-4 border-black text-white font-black uppercase italic text-lg tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group overflow-hidden">
      {/* Brillo interno */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      
      <span className="relative flex items-center gap-2">
        <span className="text-[#FCEE21] animate-pulse">★</span>
        {text}
        <span className="text-[#FCEE21] animate-pulse">★</span>
      </span>
    </button>
  )
}