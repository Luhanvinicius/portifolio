'use client';

import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-green to-accent-cyan rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-lg">Luhan Vinicius</span>
                <span className="block text-[10px] font-mono text-accent-green uppercase tracking-widest">
                  Dev Studio
                </span>
              </div>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Transformando ideias em soluções digitais de alto impacto.
              Desenvolvimento de software com excelência e inovação.
            </p>
            <p className="text-zinc-600 text-xs font-mono mt-4">
              CNPJ: 63.842.844/0001-08
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-zinc-300">Navegação</h4>
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
                    className="text-sm text-zinc-500 hover:text-accent-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-zinc-300">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Desenvolvimento Web',
                'Apps Mobile',
                'Software Desktop',
                'Análise de Dados',
                'Consultoria TI',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-zinc-500">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 flex items-center gap-1">
            © {currentYear} Luhan Vinicius. Todos os direitos reservados.
          </p>
          <p className="text-sm text-zinc-600 flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-accent-orange fill-accent-orange" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

