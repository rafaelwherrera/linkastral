// components/PricingSection.tsx
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
    return (
        <section id="pricing" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Título Místico */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500">
                        Libere seu Poder Estelar
                    </h2>
                    <p className="text-xl md:text-2xl text-yellow-100/80 italic">
                        Acesso Mágico por Tempo Limitado!
                    </p>
                </div>

                {/* Cartão de Preço Único e Destacado */}
                <div className="flex justify-center">
                    <div className="cursor-default w-full max-w-lg bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm border-4 border-yellow-400 rounded-2xl p-10 shadow-2xl shadow-purple-500/50 transition-all duration-500 hover:shadow-yellow-400/70 relative transform scale-100 hover:scale-[1.02]">

                        {/* Etiqueta de Promoção Surreal */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
    bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-lg font-black 
    tracking-wider border-2 border-white shadow-xl rotate-0 
    hover:rotate-2 transition-transform duration-300 text-center">
                            OFERTA RELÂMPAGO!
                        </div>


                        <div className="text-center mb-8 pt-4">
                            <h3 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
                                Portal de Acesso Único
                            </h3>
                            <p className="text-pink-300 text-sm">Desbloqueio de Autoridade Completo</p>
                        </div>

                        {/* Preço Promocional e Riscado */}
                        <div className="text-center mb-8">
                            <p className="text-white/70 text-lg line-through mb-1">
                                De <span className="text-2xl font-bold">R$149,90</span>
                            </p>
                            <div className="inline-flex items-end">
                                <span className="text-5xl font-extrabold text-yellow-400 mr-2">R$</span>
                                <span className="text-7xl font-black text-white leading-none">99</span>
                                <span className="text-4xl font-extrabold text-white leading-none">,90</span>
                            </div>
                            <p className="text-pink-400 text-lg font-semibold mt-2">
                                Pagamento Único! (Não é mensalidade)
                            </p>
                        </div>

                        {/* Botão de Ação Mágica */}
                        <Link href="https://www.asaas.com/c/kehg05cbnjga7it1" target="_blank">
                            <button className="cursor-pointer w-full py-4 bg-yellow-500 text-gray-900 font-extrabold text-xl rounded-xl shadow-lg shadow-yellow-500/40 hover:bg-yellow-400 transition-all duration-300 uppercase tracking-widest mb-8">
                                Desvendar Meu Destino
                            </button>
                        </Link>

                        {/* Lista de Recursos (Foco nos Benefícios) */}
                        <ul className="space-y-4 border-t border-purple-700 pt-6">
                            <li className="flex gap-3 items-start">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <span className="text-white/90 text-lg font-medium">Acesso Vitalício: Sem mensalidades ou renovações.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <span className="text-white/90 text-lg font-medium">Todas as Componentes e Temas Místicos Liberados.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <span className="text-white/90 text-lg font-medium">Integrações Ilimitadas (Redes Sociais, Pagamento, etc.).</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <span className="text-white/90 text-lg font-medium">Atualizações Futuras - R$19,90.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}