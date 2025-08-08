import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Layers,
  Monitor,
  Zap,
  Brush,
  GitBranch,
  Cpu,
  Box,
} from 'lucide-react';

const Technologies = () => {
  const technologies = [
    // Frontend
    { name: 'React', icon: Code2, color: '#61DAFB', category: 'Frontend' },
    { name: 'TypeScript', icon: Code2, color: '#3178C6', category: 'Frontend' },
    { name: 'JavaScript', icon: Code2, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Vue.js', icon: Layers, color: '#4FC08D', category: 'Frontend' },
    { name: 'Next.js', icon: Globe, color: '#000000', category: 'Frontend' },
    { name: 'HTML5', icon: Monitor, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: Brush, color: '#1572B6', category: 'Frontend' },
    { name: 'Tailwind', icon: Brush, color: '#06B6D4', category: 'Frontend' },
    { name: 'Bootstrap', icon: Layers, color: '#7952B3', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: Cpu, color: '#339933', category: 'Backend' },
    { name: 'Python', icon: Code2, color: '#3776AB', category: 'Backend' },
    { name: 'C#', icon: Code2, color: '#239120', category: 'Backend' },
    { name: 'ASP.NET', icon: Globe, color: '#512BD4', category: 'Backend' },
    { name: 'Express', icon: Zap, color: '#000000', category: 'Backend' },

    // Database
    { name: 'MySQL', icon: Database, color: '#4479A1', category: 'Database' },
    { name: 'MongoDB', icon: Database, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: Database, color: '#336791', category: 'Database' },

    // Tools
    { name: 'Vite', icon: Zap, color: '#646CFF', category: 'Tools' },
    { name: 'Docker', icon: Box, color: '#2496ED', category: 'Tools' },
    { name: 'Git', icon: GitBranch, color: '#F05032', category: 'Tools' },
    { name: 'Figma', icon: Brush, color: '#F24E1E', category: 'Design' },
    { name: 'Photoshop', icon: Brush, color: '#31A8FF', category: 'Design' },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  interface Tech {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
    name: string;
  }
  const TechCard = ({ tech, index }: { tech: Tech; index: number }) => (
    <motion.div
      className="flex-shrink-0 relative group"
      style={{
        minWidth: '120px',
        marginRight: '2rem',
        animationDelay: `${index * 0.1}s`,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10
                    hover:border-[#00D5B7]/50 transition-all duration-300 hover:shadow-2xl
                    hover:shadow-[#00D5B7]/20 h-32 flex flex-col items-center justify-center
                    relative overflow-hidden group-hover:bg-white/10"
      >
        {/* Efeito de brilho no hover do card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        />

        {/* Ícone */}
        <tech.icon
          className="text-3xl mb-2 transition-all duration-300 group-hover:scale-110 relative z-10"
          style={{ color: tech.color }}
        />

        {/* Nome */}
        <span
          className="text-white/90 text-sm font-medium text-center group-hover:text-white
                        transition-colors duration-300 relative z-10"
        >
          {tech.name}
        </span>

        {/* Indicador de categoria */}
        <div
          className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-60"
          style={{ backgroundColor: tech.color }}
        />
      </div>
    </motion.div>
  );

  return (
    <section
      id="technologies"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFD700] rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-[#00D5B7] rounded-full animate-bounce opacity-40" />
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-[#01BFBA] rounded-full animate-pulse opacity-50" />

      {/* Efeito de grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#00D5B7 1px, transparent 1px),
                              linear-gradient(90deg, #00D5B7 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          {/* Título */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span
                className="bg-gradient-to-r from-[#00D5B7] via-[#01BFBA] to-[#FFD700]
                             bg-clip-text text-transparent"
              >
                Tecnologias & Ferramentas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Ferramentas e tecnologias das quais eu domino bastante, ao ponto de criar soluções
            inovadoras.
          </motion.p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '9+', label: 'Frontend' },
            { number: '5+', label: 'Backend' },
            { number: '3+', label: 'Databases' },
            { number: '6+', label: 'Ferramentas' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10
                        hover:border-[#00D5B7]/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-3xl font-bold text-[#00D5B7] mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carrossel Infinito */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="overflow-hidden relative">
            {/* Gradientes nas bordas para efeito fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Carrossel Principal */}
            <div className="flex animate-scroll-left hover:animate-pause">
              {duplicatedTechs.map((tech, index) => (
                <TechCard key={`first-${index}`} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Segundo carrossel (direção oposta) */}
          <div className="overflow-hidden relative mt-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex animate-scroll-right hover:animate-pause">
              {duplicatedTechs.reverse().map((tech, index) => (
                <TechCard key={`second-${index}`} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Texto final */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou em constante aprendizado e sempre atualizando meu stack tecnológico, para
            acompanhar as últimas tendências e melhores práticas do desenvolvimento moderno, afim de
            proporcionar a melhor experiência aos meus usuários e clientes.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Technologies;
