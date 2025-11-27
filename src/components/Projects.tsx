'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo, gestão de produtos, carrinho e integração com múltiplos gateways de pagamento.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    tags: ['Next.js', 'Laravel', 'PostgreSQL', 'Stripe'],
    category: 'Web',
    featured: true,
  },
  {
    id: 2,
    title: 'App Delivery',
    description: 'Aplicativo de delivery com rastreamento em tempo real, chat integrado e sistema de avaliações.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Mobile',
    featured: true,
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Dashboard de analytics empresarial com visualizações interativas e relatórios personalizados em tempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Python', 'Power BI', 'PostgreSQL'],
    category: 'Data',
    featured: true,
  },
  {
    id: 4,
    title: 'Sistema ERP',
    description: 'Sistema de gestão empresarial completo com módulos de vendas, estoque, financeiro e RH.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['CodeIgniter', 'MySQL', 'jQuery', 'Bootstrap'],
    category: 'Desktop',
    featured: false,
  },
  {
    id: 5,
    title: 'Portal Educacional',
    description: 'Plataforma EAD com sistema de videoconferência, gestão de cursos e certificações.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['Vue.js', 'Laravel', 'Redis', 'AWS'],
    category: 'Web',
    featured: false,
  },
  {
    id: 6,
    title: 'App Fitness',
    description: 'Aplicativo de fitness com treinos personalizados, tracking de progresso e integração com wearables.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
    tags: ['Flutter', 'Firebase', 'Python', 'TensorFlow'],
    category: 'Mobile',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light via-primary to-primary-light" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-accent-orange text-sm mb-4"
          >
            {'// PORTFÓLIO'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Nossos <span className="text-gradient">Projetos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Conheça alguns dos projetos que desenvolvemos com dedicação
            e excelência técnica.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-secondary border border-border hover:border-accent-green/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-mono text-accent-green border border-accent-green/20">
                    {project.category}
                  </span>
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-accent-green/50 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-accent-green/50 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-green transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary rounded-lg text-xs font-mono text-zinc-400 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured || projects.filter(x => x.featured).indexOf(p) >= 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-border hover:border-accent-green/30 transition-all duration-500 card-hover"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 bg-primary/80 backdrop-blur-sm rounded-full text-[10px] font-mono text-accent-cyan border border-accent-cyan/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/50 rounded-md text-[10px] font-mono text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-mono text-zinc-600">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-primary font-bold rounded-full hover:shadow-xl hover:shadow-accent-green/25 transition-all duration-300 hover:-translate-y-1">
            <span>Ver Todos os Projetos</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

