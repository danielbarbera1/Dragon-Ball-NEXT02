// components/Navbar.jsx
import Link from 'next/link'

export default function Navbar() {
    const menuItems = [
        { nombre: 'Planeta Tierra', path: '/' },
        { nombre: 'Planetas', path: '/planetas' },
        { nombre: 'Guerreros Z', path: '/guerreros_z' }, 
        { nombre: 'Radar del Dragon', path: '/radar' }
    ];

    return (
        <div className="w-full bg-[#f0f0f0] border-b-4 border-black sticky top-0 z-50 shadow-[0_4px_0_0_#000]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    <div className="flex items-center space-x-8">
                        {/* Logo */}
                        <Link href="/" className="text-3xl font-black italic tracking-tighter transition-transform hover:scale-105">
                            <span className="text-[#5088C5] [text-shadow:3px_3px_0px_#000]">DRAGON</span>
                            <span className="text-[#E31F26] [text-shadow:3px_3px_0px_#000]"> BALL Z</span>
                        </Link>

                        {/* Navegación Principal */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.nombre}
                                    href={item.path} 
                                    className="px-4 py-2 text-black font-black uppercase italic text-sm hover:bg-[#FCEE21] hover:text-[#E31F26] border-2 border-transparent hover:border-black transition-all duration-75 skew-x-[-12deg] group"
                                >
                                    <span className="inline-block skew-x-[12deg] flex items-center gap-1">
                                        <span className="opacity-0 group-hover:opacity-100 text-[#E31F26] transition-opacity">★</span>
                                        {item.nombre}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* BOTONES DE LOGIN Y REGISTER (LADO DERECHO) */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            href="/login" 
                            className="text-sm font-black italic uppercase hover:text-[#5088C5] transition-colors"
                        >
                            Login
                        </Link>
                        
                        <Link 
                            href="/register" 
                            className="bg-[#E31F26] text-white px-5 py-2 border-4 border-black font-black italic uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            Registrarse
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}