'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-light" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Decorative Elements - Smaller on mobile */}
      <div className="absolute top-1/4 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-accent-cyan/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-accent-green text-xs sm:text-sm mb-3 sm:mb-4"
          >
            {'// ENTRE EM CONTATO'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Vamos <span className="text-gradient">conversar?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-2"
          >
            Tem um projeto em mente? Estamos prontos para transformar 
            suas ideias em realidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'contato@luhanvinicius.dev',
                  href: 'mailto:contato@luhanvinicius.dev',
                },
                {
                  icon: Phone,
                  label: 'Telefone',
                  value: '+55 (11) 99999-9999',
                  href: 'tel:+5511999999999',
                },
                {
                  icon: MapPin,
                  label: 'Localização',
                  value: 'Brasil - Atendimento remoto',
                  href: '#',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-secondary/50 rounded-xl sm:rounded-2xl border border-border hover:border-accent-green/30 transition-all duration-300 group active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm text-zinc-500 font-mono">{item.label}</span>
                      <span className="block text-sm sm:text-lg font-medium group-hover:text-accent-green transition-colors truncate">
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* CNPJ */}
            <div className="p-4 sm:p-5 bg-secondary/30 rounded-xl sm:rounded-2xl border border-border">
              <span className="block text-xs sm:text-sm text-zinc-500 font-mono mb-1">CNPJ</span>
              <span className="text-base sm:text-lg font-mono text-zinc-300">63.842.844/0001-08</span>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs sm:text-sm text-zinc-500 font-mono mb-3 sm:mb-4">Redes Sociais</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-accent-green/50 hover:text-accent-green transition-all duration-300 active:scale-95 sm:hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form className="space-y-4 sm:space-y-6 p-5 sm:p-6 lg:p-8 bg-secondary/50 rounded-2xl sm:rounded-3xl border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 font-mono mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary rounded-lg sm:rounded-xl border border-border focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all placeholder:text-zinc-600 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 font-mono mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary rounded-lg sm:rounded-xl border border-border focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all placeholder:text-zinc-600 text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm text-zinc-400 font-mono mb-2">Assunto</label>
                <select className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary rounded-lg sm:rounded-xl border border-border focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all text-zinc-300 text-sm sm:text-base">
                  <option value="">Selecione um assunto</option>
                  <option value="web">Desenvolvimento Web</option>
                  <option value="mobile">Desenvolvimento Mobile</option>
                  <option value="desktop">Desenvolvimento Desktop</option>
                  <option value="data">Análise de Dados</option>
                  <option value="database">Banco de Dados</option>
                  <option value="consultoria">Consultoria em TI</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-zinc-400 font-mono mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-primary rounded-lg sm:rounded-xl border border-border focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20 transition-all resize-none placeholder:text-zinc-600 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-primary font-bold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-accent-green/25 transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 text-sm sm:text-base"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
