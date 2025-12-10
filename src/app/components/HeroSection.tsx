// components/HeroSection.tsx
import { Star, Sparkles, Check, ArrowRight } from "lucide-react"
import Link from "next/link";

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Logo/Brand */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                        Link Astral
                    </h1>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>

                {/* Main headline */}
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance leading-tight text-foreground">
                        Transforme seu <span className="text-yellow-400">Link na Bio</span> em um Portal Místico de Autoridade
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground/80 text-balance leading-relaxed max-w-3xl mx-auto">
                        A solução profissional e temática para cartomantes e oraculistas. Diga adeus aos Linktrees genéricos.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link
                        href="#pricing"
                        className="cursor-pointer px-8 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/40 flex items-center gap-2 group"
                    >
                        <Sparkles className="w-5 h-5" />
                        Quero Meu Link Astral
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#problem"
                        onClick={() => scrollToSection("features")}
                        className="cursor-pointer px-8 py-4 border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 font-bold text-lg rounded-lg transition-all duration-300"
                    >
                        Descobrir Mais
                    </Link>
                </div>

                {/* Trust indicators */}
                <div className="pt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-yellow-400" />
                        <span>Tecnologia Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-yellow-400" />
                        <span>Design Profissional</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-yellow-400" />
                        <span>100% Temático</span>
                    </div>
                </div>
            </div>
        </section>
    )
}