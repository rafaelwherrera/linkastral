// components/Header.tsx
"use client"

import { Star, LogIn, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/60 shadow-lg shadow-purple-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">

                {/* LOGO */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="text-xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                        Link Astral
                    </span>
                </div>

                {/* NAV DESKTOP */}
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

                {/* LOGIN DESKTOP */}
                <a
                    href="/login"
                    className="hidden sm:flex items-center gap-2 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-yellow-500/30"
                >
                    <LogIn className="w-5 h-5" />
                    Login
                </a>

                {/* MOBILE MENU (SHEET) */}
                <Sheet>
                    <SheetTrigger className="md:hidden p-2 rounded-lg hover:bg-white/10 transition">
                        <Menu className="w-7 h-7 text-yellow-400" />
                    </SheetTrigger>

                    <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10">
                        <div className="flex flex-col space-y-6 mt-10">

                            {/* NAV MOBILE */}
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        const sheet = document.querySelector("button[data-state='open']") as HTMLElement;
                                        sheet?.click(); // Fecha o Sheet
                                    }}
                                    className="text-lg text-foreground hover:text-yellow-400 transition-colors text-left"
                                >
                                    {item.label}
                                </button>
                            ))}

                            {/* LOGIN MOBILE */}
                            <a
                                href="/login"
                                className="flex w-full items-center gap-2 bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md shadow-yellow-500/30"
                            >
                                <LogIn className="w-5 h-5" />
                                Login
                            </a>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
