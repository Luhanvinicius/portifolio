'use client';

import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 sm:py-12 bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-green to-accent-cyan rounded-xl flex items-center justify-center">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-base sm:text-lg">Luhan Vinicius</span>
                <span className="block text-[9px] sm:text-[10px] font-mono text-accent-green uppercase tracking-widest">
                  Dev Studio
                </span>
              </div>
            </a>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Transformando ideias em soluções digitais de alto impacto.
              Desenvolvimento de software com excelência e inovação.
            </p>
            <p className="text-zinc-600 text-[10px] sm:text-xs font-mono mt-3 sm:mt-4">
              CNPJ: 63.842.844/0001-08
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-zinc-300">Navegação</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Tecnologias', href: '#tecnologias' },
                { name: 'Projetos', href: '#projetos' },
                { name: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-accent-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-zinc-300">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Desenvolvimento Web',
                'Apps Mobile',
                'Software Desktop',
                'Análise de Dados',
                'Consultoria TI',
              ].map((service) => (
                <li key={service}>
                  <span className="text-xs sm:text-sm text-zinc-500">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-zinc-600 text-center sm:text-left">
            © {currentYear} Luhan Vinicius. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 flex items-center gap-2">
            Feito com <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange fill-accent-orange" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
