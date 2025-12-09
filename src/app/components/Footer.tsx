// components/Footer.tsx
import { Star, Instagram, Rss } from "lucide-react"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Certifique-se de que a lista de IDs e Labels correspondem ao Header para consistência.
// O ID 'hero' será o link para o topo da página (/)
const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Problema/Solução' }, // Ajustando label para consistência
    { id: 'features', label: 'Recursos' },
    { id: 'demo', label: 'Demo' },
    { id: 'pricing', label: 'Investimento' },
]

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">

                    {/* COLUNA 1: Branding */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <span className="font-serif font-bold text-lg text-yellow-400">Link Astral</span>
                        </div>
                        <p className="text-foreground/60 text-sm">
                            Portal Místico de Autoridade para Empreendedores Esotéricos.
                        </p>
                    </div>

                    {/* COLUNA 2: NAVEGAÇÃO PRINCIPAL (Usando navItems do Header) */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4">Mapa Estelar</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    {/* No Footer, usamos links absolutos #id para rolar a página */}
                                    <a href={`#${item.id}`} className="hover:text-yellow-400 transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 3: EMPRESA (Manter) */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li>
                                <a href="/about" className="hover:text-yellow-400 transition-colors">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-yellow-400 transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUNA 4: LEGAL (Manter) */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li>
                                <a href="/privacy" className="hover:text-yellow-400 transition-colors">
                                    Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-yellow-400 transition-colors">
                                    Termos
                                </a>
                            </li>
                            <li>
                                <a href="/cookies" className="hover:text-yellow-400 transition-colors">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Seção Social e Direitos Autorais */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-foreground/60">© 2025 Link Astral. Todos os direitos reservados.</p>

                        <div className="flex gap-6">
                            {/* Instagram */}
                            <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-yellow-400 transition-colors" aria-label="Instagram">
                                <Instagram className="w-6 h-6" />
                            </a>
                            {/* WhatsApp (Mantendo o MUI Icon que você usou) */}
                            <a href="#" className="text-foreground/60 hover:text-yellow-400 transition-colors" aria-label="WhatsApp">
                                <WhatsAppIcon className="w-6 h-6" />
                            </a>
                            {/* TikTok */}
                            <a href="#" className="text-foreground/60 hover:text-yellow-400 transition-colors" aria-label="TikTok">
                                <Rss className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}