'use client'
import React, { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, characterId, type = 'character' }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen && characterId) {
            setLoading(true);
            // Determinamos el endpoint según el tipo
            const endpoint = type === 'planet' ? 'planets' : 'characters';

            fetch(`https://dragonball-api.com/api/${endpoint}/${characterId}`)
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error recuperando datos:", err);
                    setLoading(false);
                });
        }
    }, [isOpen, characterId, type]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white border-8 border-black shadow-[15px_15px_0px_0px_#E31F26] w-full max-w-4xl max-h-[90vh] overflow-y-auto font-mono italic">

                {/* Header */}
                <div className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-10 border-b-4 border-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                        {type === 'planet' ? 'EXPEDIENTE PLANETARIO' : 'DATOS DE'}: <span className="text-[#FCEE21]">{loading ? "???" : data?.name}</span>
                    </h2>
                    <button onClick={onClose} className="bg-[#E31F26] border-4 border-white text-white px-4 py-1 font-black hover:bg-white hover:text-[#E31F26] transition-all">
                        CERRAR
                    </button>
                </div>

                {loading ? (
                    <div className="p-20 text-center font-black text-2xl animate-pulse uppercase">Sincronizando Scouter...</div>
                ) : (
                    <div className="p-6 space-y-8">
                        {/* Sección Superior: Imagen e Info Principal */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex justify-center items-center bg-gray-100 border-4 border-black p-4 shadow-[8px_8px_0px_0px_#000]">
                                <img src={data.image} alt={data.name} className="h-80 object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.1)]" />
                            </div>

                            <div className="space-y-4">
                                <div className="bg-[#5088C5] border-4 border-black p-4 text-white shadow-[8px_8px_0px_0px_#000]">
                                    <h3 className="font-black uppercase text-xl mb-4 border-b-2 border-white inline-block">Especificaciones</h3>
                                    <div className="space-y-2 font-bold uppercase text-sm">
                                        {type === 'character' ? (
                                            <>
                                                <p>RAZA: <span className="text-black">{data.race}</span></p>
                                                <p>KI BASE: <span className="text-[#FCEE21]">{data.ki}</span></p>
                                                <p>AFILIACIÓN: <span className="text-black">{data.affiliation}</span></p>
                                            </>
                                        ) : (
                                            <>
                                                <p>ESTADO: <span className={data.isDestroyed ? "text-red-500" : "text-green-400"}>
                                                    {data.isDestroyed ? "DESTRUIDO" : "HABITABLE"}
                                                </span></p>
                                                <p>SISTEMA: <span className="text-black">Universo 7</span></p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="p-2 border-l-4 border-[#E31F26] bg-gray-50">
                                    <p className="text-xs font-bold text-gray-700 leading-tight">{data.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sección Inferior: Transformaciones O Habitantes */}
                        <div className="pt-6 border-t-4 border-black">
                            <h3 className="text-2xl text-black font-black uppercase bg-[#FCEE21] border-4 border-black inline-block px-4 mb-8 shadow-[6px_6px_0px_0px_#000] -skew-x-6">
                                {type === 'planet' ? 'Habitantes Registrados' : 'Línea de Evolución'}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {/* Lógica para Personajes (Transformaciones) */}
                                {type === 'character' && data.transformations?.length > 0 &&
                                    data.transformations.map((t) => (
                                        <div key={t.id} className="group border-4 text-black border-black p-3 bg-white shadow-[5px_5px_0px_0px_#000] hover:translate-y-[-5px] transition-all">
                                            <img src={t.image} className="h-40 w-full object-contain mb-3" />
                                            <p className="text-[10px]   font-black uppercase text-center border-t-2 border-black pt-2">{t.name}</p>
                                        </div>
                                    ))
                                }

                                {/* Lógica para Planetas (Habitantes) */}
                                {type === 'planet' && data.characters?.length > 0 &&
                                    data.characters.map((c) => (
                                        <div key={c.id} className="group border-4 text-black border-black p-3 bg-white shadow-[5px_5px_0px_0px_#5088C5] hover:translate-y-[-5px] transition-all">
                                            <img src={c.image} className="h-40 w-full object-contain mb-3" />
                                            <p className="text-[10px] font-black uppercase text-center border-t-2 border-black pt-2">{c.name}</p>
                                        </div>
                                    ))
                                }

                                {/* Si no hay nada que mostrar */}
                                {((type === 'character' && !data.transformations?.length) ||
                                    (type === 'planet' && !data.characters?.length)) && (
                                        <div className="col-span-full p-4 bg-gray-200 border-2 border-dashed border-black text-center font-bold text-gray-500 italic">
                                            NO SE DETECTAN REGISTROS ADICIONALES
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}