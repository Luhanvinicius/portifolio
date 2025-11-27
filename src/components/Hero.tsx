'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-green/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 backdrop-blur-sm border border-accent-green/30 flex items-center justify-center">
          <Code className="w-8 h-8 text-accent-green" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 backdrop-blur-sm border border-accent-cyan/30 flex items-center justify-center">
          <Zap className="w-7 h-7 text-accent-cyan" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-[8%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-green/20 backdrop-blur-sm border border-accent-orange/30 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-accent-orange" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-sm font-mono text-accent-green">Disponível para novos projetos</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="block">Transformamos</span>
            <span className="block text-gradient">ideias em código</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Desenvolvemos soluções digitais de alta performance para web, mobile e desktop.
            Do conceito à produção, com as melhores tecnologias do mercado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projetos"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-primary font-bold rounded-full hover:shadow-xl hover:shadow-accent-green/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Ver Projetos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-3 px-8 py-4 border border-border hover:border-accent-green/50 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-accent-green/5"
            >
              <span>Nossos Serviços</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-20 pt-10 border-t border-border/50"
          >
            {[
              { value: '50+', label: 'Projetos Entregues' },
              { value: '5+', label: 'Anos de Experiência' },
              { value: '30+', label: 'Clientes Satisfeitos' },
              { value: '99%', label: 'Taxa de Sucesso' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent-green" />
        </motion.div>
      </motion.div>
    </section>
  );
}

