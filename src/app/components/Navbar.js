'use client' // Importante para usar hooks
import { useEffect, useState } from 'react'
import { supabase } from '@/app/utils/supabase' // Asegúrate que esta ruta sea correcta
import Link from 'next/link'

export default function Navbar() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        // 1. Verificar sesión inicial
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setUser(session?.user ?? null)
        }
        checkUser()

        // 2. Escuchar cambios de estado (Login/Logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        alert("¡Sesión cerrada, Guerrero!")
    }

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

                    {/* SECCIÓN DINÁMICA DE USUARIO */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            /* MENU DESPLEGABLE DEL GUERRERO LOGUEADO */
                            <div className="relative group">
                                <button className="flex items-center gap-2 border-4 border-black p-1 bg-white shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                    <div className="w-10 h-10 bg-[#FCEE21] border-2 border-black overflow-hidden">
                                        <img 
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                                            alt="Avatar" 
                                        />
                                    </div>
                                    <span className="font-black italic uppercase text-xs pr-2 hidden sm:block text-black">
                                        {user.email.split('@')[0]}
                                    </span>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-1 w-48 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] hidden group-hover:block animate-in fade-in zoom-in duration-100">
                                    <Link href="/perfil" className="block p-3 font-black uppercase italic text-sm text-black hover:bg-[#FCEE21] border-b-2 border-black">
                                        Mi Perfil
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="w-full text-left p-3 font-black uppercase italic text-sm text-white bg-[#E31F26] hover:bg-black transition-colors"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* BOTONES DE LOGIN Y REGISTER (SI NO HAY SESIÓN) */
                            <>
                                <Link 
                                    href="/login" 
                                    className="text-sm text-black font-black italic uppercase hover:text-[#5088C5] transition-colors"
                                >
                                    Login
                                </Link>
                                
                                <Link 
                                    href="/register" 
                                    className="bg-[#E31F26] text-white px-5 py-2 border-4 border-black font-black italic uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}