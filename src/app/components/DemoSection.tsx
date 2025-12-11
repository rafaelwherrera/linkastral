// components/DemoSection.tsx
export default function DemoSection() {
    return (
        <section id="demo" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Veja em Ação</h2>
                    <p className="text-xl text-foreground/70">Seu Link Místico funcionando perfeitamente</p>
                </div>

                <div className="relative bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-border rounded-2xl overflow-hidden backdrop-blur">
                    {/* Mock mobile phone */}
                    <div className="flex justify-center items-center py-12">
                        <div className="relative w-[32rem] h-[32rem] bg-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex justify-center items-center z-10">
                                {/* <div className="text-white text-xs font-bold">9:41</div> */}
                            </div>
                            <img
                                src="/mkp.png"
                                alt="Link Místico em ação no mobile"
                                className="w-full h-full object-cover mt-6 scale-110"
                            />
                        </div>
                    </div>

                    {/* Features overlay - Texto em Amarelo para destaque */}
                    <div className="grid md:grid-cols-3 gap-6 px-8 pb-12">
                        <div className="text-center">
                            <div className="text-3xl mb-2 text-yellow-400">✨</div>
                            <p className="text-foreground/80 font-medium">Design Responsivo</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2 text-yellow-400">⚡</div>
                            <p className="text-foreground/80 font-medium">Carregamento Rápido</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2 text-yellow-400">🌙</div>
                            <p className="text-foreground/80 font-medium">Totalmente Temático</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}