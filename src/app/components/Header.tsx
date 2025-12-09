// components/Header.tsx
"use client"

import { Star, LogIn, UserPlus } from "lucide-react"

interface HeaderProps {
    scrollToSection: (id: string) => void;
}

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Soluções' },
    { id: 'features', label: 'Recursos' },
    { id: 'demo', label: 'Demo' },
    { id: 'pricing', label: 'Investimento' },
]

export default function Header({ scrollToSection }: HeaderProps) {
    return (
        // Alterado 'sticky' para 'fixed' para garantir que fique sempre no topo
        // Adicionado 'top-0' e 'left-0' para ancorar
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/60 shadow-lg shadow-purple-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

                {/* 🌌 Logo/Branding (Link Astral) */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="text-xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                        Link Astral
                    </span>
                </div>

                {/* 🧭 Navegação (Scroll Suave) */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-foreground/70 hover:text-yellow-400 font-medium transition-colors cursor-pointer text-base"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* 🔐 Botões de Autenticação */}
                <div className="flex items-center space-x-3">

                    {/* Cadastrar (Botão de Destaque) */}
                    <a
                        href="/login" // Substitua por seu link de cadastro
                        className="hidden sm:flex items-center gap-2 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-yellow-500/30"
                    >
                        <LogIn className="w-5 h-5" />
                        Login
                    </a>
                </div>

            </div>
        </header>
    )
}