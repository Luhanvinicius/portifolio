'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    category: 'Frontend',
    color: 'accent-cyan',
    items: [
      { name: 'Next.js', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    color: 'accent-green',
    items: [
      { name: 'Laravel', icon: '🔴' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Python', icon: '🐍' },
      { name: 'CodeIgniter', icon: '🔥' },
      { name: 'Express', icon: '🚀' },
    ],
  },
  {
    category: 'Mobile',
    color: 'accent-purple',
    items: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
    ],
  },
  {
    category: 'Database',
    color: 'accent-orange',
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    category: 'DevOps',
    color: 'accent-cyan',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'GitHub Actions', icon: '⚙️' },
    ],
  },
  {
    category: 'Data & AI',
    color: 'accent-green',
    items: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'Power BI', icon: '📊' },
      { name: 'Jupyter', icon: '📓' },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-light" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-accent-cyan text-xs sm:text-sm mb-3 sm:mb-4"
          >
            {'// STACK TECNOLÓGICO'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Nossas <span className="text-gradient">Tecnologias</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-2"
          >
            Utilizamos as tecnologias mais modernas e consolidadas do mercado
            para entregar soluções robustas e escaláveis.
          </motion.p>
        </div>

        {/* Technologies Grid - SEM ANIMAÇÃO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {technologies.map((category) => (
            <div key={category.category} className="group">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-border hover:border-accent-green/30 transition-all duration-500 h-full">
                {/* Category Title */}
                <h3 className={`font-mono text-${category.color} text-xs sm:text-sm mb-4 sm:mb-6 flex items-center gap-2`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                  {category.category}
                </h3>
                
                {/* Tech Items */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary/50 rounded-lg sm:rounded-xl border border-border hover:border-accent-green/50 transition-all duration-300 cursor-default active:scale-95"
                    >
                      <span className="text-base sm:text-lg">{tech.icon}</span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee - Hidden on small mobile */}
        <div className="mt-12 sm:mt-16 lg:mt-20 overflow-hidden hidden sm:block">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-primary-light to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-primary-light to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4 sm:gap-8 mx-2 sm:mx-4">
                  {technologies.flatMap(cat => cat.items).map((tech, index) => (
                    <span
                      key={`${i}-${index}`}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary/30 rounded-full text-zinc-400 whitespace-nowrap"
                    >
                      <span>{tech.icon}</span>
                      <span className="font-mono text-xs sm:text-sm">{tech.name}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
