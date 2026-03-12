// components/SearchBar.jsx
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-0 italic">
      <input 
        type="text" 
        value={value} 
        onChange={onChange}
        placeholder={placeholder || "RASTREAR KI..."} 
        className="border-4 text-black border-black px-4 py-2 font-black uppercase bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all w-64"
      />
      <button className="bg-[#5088C5] border-4 border-l-0 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#E31F26] transition-colors group">
        <svg className="w-6 h-6 text-white group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}