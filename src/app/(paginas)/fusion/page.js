'use client'
import React, { useState } from 'react';
import{fusionsData} from '@/app/data/fusions';

export default function FusionPage() {
  const [selectedFusion, setSelectedFusion] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-10 font-mono italic overflow-hidden">
      
      {/* HEADER ESTILO MANGA */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
          EL ARTE DE LA <span className="text-[#FCEE21]">FUSIÓN</span>
        </h1>
        <div className="bg-[#E31F26] text-white inline-block px-4 py-1 font-bold uppercase mt-4 -rotate-2">
          Dos guerreros, un solo destino
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* LISTA DE RITUALES */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black border-l-8 border-[#FCEE21] pl-4 mb-8">RITUALES DISPONIBLES</h3>
          {fusionsData.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFusion(f)}
              className={`w-full p-6 border-4 text-left transition-all group
                ${selectedFusion?.id === f.id ? 'bg-white text-black border-white translate-x-4' : 'border-gray-800 hover:border-[#5088C5]'}`}
            >
              <p className="text-xs font-bold opacity-60">{f.method}</p>
              <h4 className="text-3xl font-black uppercase">{f.name}</h4>
            </button>
          ))}
        </div>

        {/* VISUALIZADOR DE FUSIÓN */}
        <div className="lg:col-span-2 relative min-h-[500px] flex items-center justify-center border-8 border-dashed border-gray-800 p-8 bg-zinc-900/50 rounded-3xl">
          {!selectedFusion ? (
            <div className="text-center opacity-30">
              <span className="text-8xl block mb-4 animate-pulse">☯️</span>
              <p className="font-black text-xl uppercase">Selecciona un ritual de fusión</p>
            </div>
          ) : (
            <div className="w-full animate-in fade-in zoom-in duration-500 text-center">
              {/* Círculos de Energía de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-[#FCEE21]/20 rounded-full blur-3xl animate-pulse"></div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="flex justify-around items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-black mb-2"></div>
                    <span className="text-xs font-bold">GUERRERO A</span>
                  </div>
                  <span className="text-4xl font-black text-[#FCEE21] animate-bounce">⚡</span>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-black mb-2"></div>
                    <span className="text-xs font-bold">GUERRERO B</span>
                  </div>
                </div>

                <div className="bg-white text-black p-8 border-8 border-black shadow-[15px_15px_0px_0px_#E31F26] -rotate-1">
                  <h2 className="text-5xl font-black uppercase mb-4 italic">{selectedFusion.name}</h2>
                  <p className="font-bold text-sm mb-6 leading-tight">{selectedFusion.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="bg-black text-white p-3">
                      <p className="text-[10px] text-[#FCEE21]">MÉTODO</p>
                      <p className="font-black text-sm uppercase">{selectedFusion.method}</p>
                    </div>
                    <div className="bg-black text-white p-3">
                      <p className="text-[10px] text-[#FCEE21]">ESTADO</p>
                      <p className="font-black text-sm uppercase">ESTABLE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}