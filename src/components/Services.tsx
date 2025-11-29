'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Monitor, 
  BarChart3, 
  Database, 
  HeadphonesIcon,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Programação',
    description: 'Desenvolvimento de software personalizado, APIs robustas e sistemas escaláveis com código limpo e bem documentado.',
    color: 'accent-green',
    gradient: 'from-accent-green/20 to-accent-cyan/20',
  },
  {
    icon: Globe,
    title: 'Web',
    description: 'Aplicações web modernas e responsivas, SPAs, portais corporativos e e-commerce com as melhores tecnologias.',
    color: 'accent-cyan',
    gradient: 'from-accent-cyan/20 to-accent-purple/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    description: 'Apps nativos e híbridos para iOS e Android, com foco em UX e performance excepcional.',
    color: 'accent-purple',
    gradient: 'from-accent-purple/20 to-accent-orange/20',
  },
  {
    icon: Monitor,
    title: 'Desktop',
    description: 'Aplicações desktop multiplataforma robustas para Windows, macOS e Linux.',
    color: 'accent-orange',
    gradient: 'from-accent-orange/20 to-accent-green/20',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Business Intelligence, dashboards interativos, ETL e soluções de Big Data para insights estratégicos.',
    color: 'accent-green',
    gradient: 'from-accent-green/20 to-accent-cyan/20',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Modelagem, otimização, migração e administração de bancos de dados SQL e NoSQL.',
    color: 'accent-cyan',
    gradient: 'from-accent-cyan/20 to-accent-purple/20',
  },
  {
    icon: HeadphonesIcon,
    title: 'Consultoria em TI',
    description: 'Consultoria especializada em arquitetura de sistemas, DevOps, segurança e transformação digital.',
    color: 'accent-purple',
    gradient: 'from-accent-purple/20 to-accent-orange/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-primary" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-accent-green text-xs sm:text-sm mb-3 sm:mb-4"
          >
            {'// NOSSOS SERVIÇOS'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            O que <span className="text-gradient">fazemos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-2"
          >
            Soluções completas para todas as suas necessidades digitais,
            do planejamento à execução com excelência.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative animated-border p-5 sm:p-6 lg:p-8 hover:bg-secondary/50 transition-all duration-500 active:scale-[0.98] sm:card-hover"
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} border border-${service.color}/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${service.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                
                {/* Arrow */}
                <div className="flex items-center gap-2 text-accent-green opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <a
            href="#contato"
            className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-accent-green/30 text-accent-green font-semibold rounded-full hover:bg-accent-green/10 transition-all duration-300 active:scale-95"
          >
            <span>Precisa de algo específico?</span>
            <span>Fale conosco</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
