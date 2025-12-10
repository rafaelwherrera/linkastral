// components/FeaturesSection.tsx
import { Wand2, Moon, Star, Sparkles } from "lucide-react"

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Poder com um Toque de Magia</h2>
                    <p className="text-xl text-foreground/70">Recursos exclusivos para sua autoridade esotérica</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 - Amarelo */}
                    <div className="cursor-default group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-all">
                            <Wand2 className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Componentes Místicos</h3>
                        <p className="text-foreground/70">
                            Cartas de Tarot, Fases da Lua, Constelações e elementos visuais exclusivos para sua presença online.
                        </p>
                    </div>

                    {/* Feature 2 - Roxo/Índigo */}
                    <div className="cursor-default group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all">
                            <Star className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Velocidade Extrema</h3>
                        <p className="text-foreground/70">
                            Construído com Next.js e otimizado para performance. Seus clientes acessam instantaneamente.
                        </p>
                    </div>

                    {/* Feature 3 - Pink */}
                    <div className="cursor-default group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-400/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-pink-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-400/30 transition-all">
                            <Moon className="w-8 h-8 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Totalmente Personalizável</h3>
                        <p className="text-foreground/70">
                            Adapte cores, fontes e layouts para refletir sua essência e identidade pessoal única.
                        </p>
                    </div>

                    {/* Feature 4 - Amarelo */}
                    <div className="cursor-default group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-all">
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Analytics Integrado</h3>
                        <p className="text-foreground/70">
                            Acompanhe cliques, conversões e engajamento com dados detalhados de seus visitantes.
                        </p>
                    </div>

                    {/* Feature 5 - Roxo/Índigo */}
                    <div className="cursor-default group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all">
                            <Star className="w-8 h-8 text-purple-500 fill-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Suporte 24/7</h3>
                        <p className="text-foreground/70">
                            Nossa equipe mística está sempre disponível para auxiliar em sua jornada digital.
                        </p>
                    </div>

                    {/* Feature 6 - Pink */}
                    <div className="cursor-default *:group bg-white/5 backdrop-blur border border-border rounded-xl p-8 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-400/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-pink-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-400/30 transition-all">
                            <Moon className="w-8 h-8 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">SEO Otimizado</h3>
                        <p className="text-foreground/70">
                            Apareça nos buscadores e aumente sua visibilidade para novos clientes e consultantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}