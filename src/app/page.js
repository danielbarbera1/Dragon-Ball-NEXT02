import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] italic">

      {/* ============================================ */}
      {/* SECCIÓN HERO: BIENVENIDA ÉPICA */}
      {/* ============================================ */}
      <section className="relative bg-white border-b-8 border-black py-20 px-4 overflow-hidden">
        {/* Decoración de fondo (Rayas de acción manga) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,_#000_0,_#000_1px,_transparent_0,_transparent_50%)] bg-[length:10px_10px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="md:w-1/2 space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                <span className="text-[#5088C5] [text-shadow:5px_5px_0px_#000]">PLANETA</span><br />
                <span className="text-[#E31F26] [text-shadow:5px_5px_0px_#000]">TIERRA</span>
              </h1>
              <p className="text-xl font-bold text-black max-w-lg uppercase">
                ¡Bienvenido a la base de operaciones de los Guerreros Z! Aquí comienza tu aventura para convertirte en el más fuerte del universo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/register" className="bg-[#FCEE21] border-4 border-black px-8 py-3 font-black text-black uppercase shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  ¡Inicia tu Entrenamiento!
                </Link> 
                <Link href="/guerreros_z" className="bg-[#5088C5] border-4 border-black px-8 py-3 font-black text-black uppercase shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Ver Guerreros Z
                </Link>
              </div>
            </div>

            {/* Representación de la Esfera de 4 Estrellas */}
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-[#FCEE21] border-8 border-black rounded-full shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative">
                <div className="grid grid-cols-2 gap-2 text-6xl text-[#E31F26] animate-pulse">
                  <span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECCIÓN DE NOTICIAS O SECCIONES */}
      {/* ============================================ */}
      <section className="container mx-auto max-w-6xl py-16 px-4">
        <h2 className="text-4xl text-black font-black mb-12 uppercase italic flex items-center gap-4">
          <span className="bg-[#E31F26] h-10 w-4 border-2 border-black -skew-x-12 "></span>
          Últimos Reportes del Radar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] group ">
            <div className="bg-[#5088C5] h-40 border-4 border-black mb-4 overflow-hidden relative">
              <div className=" text-center absolute inset-0 flex items-center justify-center text-black font-black text-2xl uppercase  group-hover:scale-110 transition-transform">Corporación Cápsula</div>
            </div>
            <h3 className="text-2xl text-black font-black mb-2 uppercase">Tecnología Saiyajin</h3>
            <p className="text-black font-bold mb-4 opacity-70">Descubre los nuevos modelos de naves espaciales y armaduras de combate.</p>
            <Link href="/tecnologia" className="text-[#E31F26] font-black uppercase underline decoration-4">Leer más</Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] group">
            <div className="bg-[#FCEE21] h-40 border-4 border-black mb-4 flex items-center justify-center">
              <span className="text-6xl group-hover:rotate-12 transition-transform">☁️</span>
            </div>
            <h3 className="text-2xl text-black font-black mb-2 uppercase">Nube Voladora</h3>
            <p className=" text-black font-bold mb-4 opacity-70">Solo los de corazón puro podrán acceder a esta sección exclusiva.</p>
            <Link href="/guerreros_z" className="text-[#E31F26] font-black uppercase underline decoration-4">Explorar</Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] group">
            <div className="bg-[#E31F26] h-40 border-4 border-black mb-4 flex items-center justify-center">
              <span className="text-white font-black text-5xl group-hover:scale-110 transition-transform italic">Z</span>
            </div>
            <h3 className=" text-black text-2xl font-black mb-2 uppercase">Torneo de Artes Marciales</h3>
            <p className=" text-black font-bold mb-4 opacity-70">¡Las inscripciones están abiertas! ¿Tienes lo necesario para ganar?</p>
            <Link href="/register" className="text-[#E31F26] font-black uppercase underline decoration-4">Registrate</Link>
          </div>

        </div>
      </section>

    </main>
  );
}
