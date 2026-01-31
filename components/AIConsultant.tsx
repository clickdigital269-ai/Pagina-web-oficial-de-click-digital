
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BotIcon, ZapIcon } from './Icons';

const AIConsultant: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Actúa como un experto en Click Digital. El usuario tiene un negocio de: "${businessType}". 
      Explícale en 3 puntos breves y profesionales cómo la IA y la automatización (agentes de IA, WhatsApp, n8n) pueden ayudarle específicamente a ahorrar tiempo y dinero. 
      Mantén un tono cercano pero profesional. Usa viñetas claras. Máximo 150 palabras.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "Lo siento, hubo un problema generando la sugerencia. Por favor intenta de nuevo.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setResponse("No pudimos conectar con nuestro motor de IA en este momento. ¡Contáctanos por WhatsApp para una asesoría directa!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo puede la IA mejorar tu negocio?</h2>
          <p className="text-slate-400 text-lg">Prueba nuestro consultor virtual impulsado por Click Digital IA</p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
          <form onSubmit={handleConsultation} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Describe brevemente tu empresa o rubro:</label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="Ej: Clínica dental, Tienda de ropa, Agencia de viajes..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !businessType.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <BotIcon />
                  <span>Obtener Estrategia IA Gratuita</span>
                </>
              )}
            </button>
          </form>

          {response && (
            <div className="mt-8 p-6 bg-slate-900/50 border border-slate-700 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-start space-x-3">
                <div className="bg-teal-500/20 p-2 rounded-lg">
                  <ZapIcon />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-teal-400 mb-3">Estrategia recomendada:</h4>
                  <div className="text-slate-300 whitespace-pre-line text-sm leading-relaxed">
                    {response}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                <a 
                  href="https://wa.me/50762124398" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                >
                  ¿Te gusta este plan? Implementémoslo juntos →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
