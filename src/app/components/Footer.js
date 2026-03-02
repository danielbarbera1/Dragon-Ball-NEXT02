import Link from 'next/link';

// components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-[#f0f0f0] border-t-8 border-black pt-12 pb-6 px-4 font-black uppercase italic">
            <div className="container mx-auto max-w-6xl">

                {/* ============================================ */}
                {/* SECCIÓN 1: ENLACES TEMÁTICOS */}
                {/* ============================================ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                    {/* COLUMNA 1: Exploración (Antes Navegación) */}
                    <div className="text-center md:text-left group">
                        <h6 className="text-2xl font-black mb-6 text-[#5088C5] flex items-center justify-center md:justify-start gap-2 [text-shadow:3px_3px_0px_#000]">
                            <span className="bg-[#E31F26] w-3 h-8 border-2 border-black -skew-x-12"></span>
                            Exploración
                        </h6>
                        <div className="space-y-4 text-black flex flex-col items-center md:items-start">
                            {[
                                { n: 'Planeta Tierra', p: '/' },
                                { n: 'Técnicas', p: '/tecnicas' },
                                { n: 'Guerreros Z', p: '/guerreros-z' },
                                { n: 'Radar Dragón', p: '/radar' }
                            ].map((link) => (
                                <Link key={link.n} href={link.p} 
                                      className="hover:text-[#E31F26] transition-colors hover:translate-x-2 transform duration-100 flex items-center gap-2">
                                     <span className="text-[#FCEE21] [text-shadow:1px_1px_0px_#000]">★</span> {link.n}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA 2: Entrenamiento (Antes Servicios) */}
                    <div className="text-center md:text-left">
                        <h6 className="text-2xl font-black mb-6 text-[#E31F26] flex items-center justify-center md:justify-start gap-2 [text-shadow:3px_3px_0px_#000]">
                            <span className="bg-[#5088C5] w-3 h-8 border-2 border-black -skew-x-12"></span>
                            Entrenamiento
                        </h6>
                        <div className="space-y-4 text-black flex flex-col items-center md:items-start">
                            <Link href="/tecnicas#vuelo" className="hover:text-[#5088C5]">Control del Ki</Link>
                            <Link href="/tecnicas#fusiones" className="hover:text-[#5088C5]">Arte de la Fusión</Link>
                            <Link href="/tecnicas#transformacion" className="hover:text-[#5088C5]">Super Saiyajin</Link>
                            <Link href="/tecnicas#gravedad" className="hover:text-[#5088C5]">Cámara de Gravedad</Link>
                        </div>
                    </div>

                    {/* COLUMNA 3: Soporte (Radar Dragón) */}
                    <div className="text-center md:text-left">
                        <h6 className="text-2xl font-black mb-6 text-[#FCEE21] flex items-center justify-center md:justify-start gap-2 [text-shadow:3px_3px_0px_#000]">
                            <span className="bg-black w-3 h-8 border-2 border-white -skew-x-12"></span>
                            Radar Dragón
                        </h6>
                        <div className="space-y-3 bg-black p-4 border-4 border-[#5088C5] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white not-italic font-bold">
                            <p>📧 kaiosama@enma-daio.com</p>
                            <p>📱 +34 900 GOKU-Z</p>
                            <p>📍 Capsule Corp. - Sector West City</p>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* SECCIÓN 2: SEPARADOR ESTILO MANGA */}
                {/* ============================================ */}
                <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-b-4 border-black"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-6 bg-[#FCEE21] border-4 border-black -skew-x-12 shadow-[4px_4px_0px_0px_#000]">
                            <span className="text-black font-black text-xl tracking-tighter">Z-FIGHTERS ONLY</span>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* SECCIÓN 3: LOGO E ICONOS */}
                {/* ============================================ */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="mb-2">
                            <span className="text-4xl font-black text-[#5088C5] [text-shadow:4px_4px_0px_#000] tracking-tighter italic">
                                DRAGON<span className="text-[#E31F26]">BALL Z</span>
                                <span className="text-[#FCEE21] ml-2 text-2xl">WEB</span>
                            </span>
                        </div>
                        <p className="text-black text-sm font-bold">
                            © {new Date().getFullYear()} - ¡EL PODER ES NUESTRO!
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {['G', 'T', 'L'].map((icon, i) => (
                            <a key={i} href="#" 
                               className="bg-[#FCEE21] border-4 border-black w-12 h-12 flex items-center justify-center text-black text-xl font-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ============================================ */}
                {/* SECCIÓN 4: REGLAS DEL TORNEO (Legales) */}
                {/* ============================================ */}
                <div className="mt-12 pt-6 border-t-4 border-black flex flex-wrap justify-center gap-6 text-black font-bold text-sm">
                    <Link href="/privacidad" className="hover:underline decoration-4 decoration-[#E31F26]">Leyes de la Tierra</Link>
                    <Link href="/terminos" className="hover:underline decoration-4 decoration-[#5088C5]">Reglas del Torneo</Link>
                    <Link href="/cookies" className="hover:underline decoration-4 decoration-[#FCEE21]">Semillas del Ermitaño</Link>
                </div>

            </div>
        </footer>
    );
}