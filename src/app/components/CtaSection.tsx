// components/CtaSection.tsx
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">Sua Jornada Cósmica Começa Agora</h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    Junte-se a centenas de cartomantes e oraculistas que já transformaram sua presença online com Link Místico.
                </p>

                {/* CTA Buttons - Amarelo e Roxo */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    {/* Botão Primário (Manter) */}
                    <Link
                        href="https://www.asaas.com/c/kehg05cbnjga7it1" target="_blank"
                        className="cursor-pointer px-10 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/40 flex items-center gap-2 group animate-glow"
                    >
                        <Sparkles className="w-5 h-5" />
                        Garantir Meu Link Místico
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Botão Secundário: TRANSFORMADO em Link do WhatsApp */}
                    <a
                        // Use 'tel:' no href se for o CTA mais tradicional, ou 'https://wa.me/' para link direto
                        // Substitua '5511987654321' pelo seu número completo (código do país + DDD + número)
                        // Substitua 'Tenho interesse no Link Astral e gostaria de falar com um especialista.' pela sua mensagem
                        href="https://wa.me/5534991612197?text=Tenho interesse no Link Místico e gostaria de falar com um especialista."
                        target="_blank" // Abre em nova aba
                        rel="noopener noreferrer" // Recomendado para segurança ao usar target="_blank"
                        className="cursor-pointer px-10 py-4 border-2 border-purple-500/50 text-foreground hover:border-purple-500 hover:bg-purple-500/10 font-bold text-lg rounded-lg transition-all duration-300"
                    >
                        Falar com Especialista
                    </a>
                </div>

                {/* Trust section - Destaques em Amarelo */}
                <div className="pt-12 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-6">Confiado por profissionais esotéricos em todo Brasil</p>
                    <div className="flex flex-wrap gap-4 justify-center items-center opacity-70">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-yellow-400">100+</p>
                            <p className="text-sm text-foreground/70">Usuários Ativos</p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-yellow-400">4.9★</p>
                            <p className="text-sm text-foreground/70">Avaliação Média</p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-yellow-400">98%</p>
                            <p className="text-sm text-foreground/70">Satisfação</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}