// components/ProblemSolutionSection.tsx
import { Moon, Star, Sparkles, Check } from "lucide-react"

export default function ProblemSolutionSection() {
    return (
        <section id="problem" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 flex items-center justify-center gap-3">
                        <Moon className="w-10 h-10 text-pink-400" />
                        <span>O Brilho que Falta</span>
                        <Moon className="w-10 h-10 text-pink-400" />
                    </h2>
                    <p className="text-xl text-foreground/70">na sua Conexão com Clientes</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Problem */}
                    <div className="bg-card/50 backdrop-blur border border-purple-500/50 rounded-xl p-8 hover:border-pink-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                            <Sparkles className="w-6 h-6" />O Problema
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-foreground/80">Links genéricos sem personalidade</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-foreground/80">Falta de identidade visual própria</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-foreground/80">Plataformas lentas e travadas</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-foreground/80">Sem elementos temáticos místicos</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-foreground/80">Não transmite autoridade e profissionalismo</span>
                            </li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border border-yellow-400/50 rounded-xl p-8 hover:border-yellow-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
                            <Star className="w-6 h-6 fill-yellow-400" />A Solução
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                <span className="text-foreground/90 font-medium">Design exclusivamente temático</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                <span className="text-foreground/90 font-medium">Identidade visual poderosa e mística</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                <span className="text-foreground/90 font-medium">Velocidade de carregamento ultra-rápida</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                <span className="text-foreground/90 font-medium">
                                    Componentes visuais exclusivos para esotéricos
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                <span className="text-foreground/90 font-medium">Transmite autoridade e confiança imediata</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}