import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Eye,
  Star,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Layers,
  Palette,
} from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 0,
      title: 'AXK Marketplace',
      category: 'fullstack',
      type: 'Plataforma Full Stack',
      description:
        'Marketplace completo para a comunidade gaming da AXK, com sistema de compra/venda, coaching e gestão de usuários.',
      longDescription:
        'Plataforma desenvolvida para a AXKRUM, uma organização de eSports que conecta gamers através de um marketplace inovador. O sistema permite compra e venda de itens personalizados, gerenciamento de usuários e todas as atualizações dos nossos jogadores/equipes de eSports ao redor do Brasil e do mundo. Tudo foi calculado e implementado com arquiteturas robustas e o foco na experiência do usuário.',
      image: '🎮',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind'],
      features: [
        'Sistema completo de autenticação',
        'Marketplace de itens e novidades',
        'Plataforma de administração de conteúdos',
        'Dashboard administrativo',
        'Sistema de pagamentos integrado',
      ],
      status: 'Em Produção',
      year: '2025',
      role: 'Full Stack Developer',
      team: 'AXKRUM',
      duration: '6 meses',
      highlights: [
        'Arquitetura escalável com microserviços',
        'Interface responsiva e moderna',
        'Sistema de notificações em tempo real',
        'Integração com APIs de pagamento',
      ],
      links: {
        // live: 'https://hml.axkrum.com',
      },
      color: '#00D5B7',
    },
    {
      id: 1,
      title: 'Clora',
      category: 'web',
      type: 'Aplicação Web',
      description:
        'Aplicação web moderna e responsiva desenvolvida com foco na experiência do usuário e performance.',
      longDescription:
        'Clora é uma aplicação web robusta que demonstra habilidades avançadas em desenvolvimento frontend. O projeto combina design moderno, interatividade fluida e código limpo, resultando em uma experiência excepcional para o usuário.',
      image: '👨‍⚕️',
      technologies: ['React', 'JavaScript', 'CSS3', 'Tailwind', 'Typescript', 'Responsive Design'],
      features: [
        'Interface moderna e intuitiva',
        'Design responsivo completo',
        'Animações e transições suaves',
        'Otimização de performance',
        'Código limpo e maintível',
      ],
      status: 'Finalizado',
      year: '2025',
      role: 'Frontend Developer',
      team: 'Projeto Pessoal',
      duration: '1 mês',
      highlights: [
        'Performance otimizada para web',
        'Design system consistente',
        'Acessibilidade web implementada',
        'SEO e otimizações avançadas',
      ],
      links: {
        live: 'https://clora.vercel.app',
      },
      color: '#01BFBA',
    },
    {
      id: 2,
      title: 'Make Your Burger',
      category: 'web',
      type: 'Aplicação Web',
      description:
        'Aplicação web interativa para personalização de hambúrguers com interface moderna e experiência gamificada.',
      longDescription:
        'Make Your Burger é uma aplicação web que permite aos usuários criar hambúrguers personalizados de forma interativa e divertida. O projeto demonstra habilidades em desenvolvimento frontend, UX/UI design e criação de experiências envolventes.',
      image: '🍔',
      technologies: ['React', 'JavaScript', 'CSS3', 'Interactive UI'],
      features: [
        'Sistema de personalização interativo',
        'Interface gamificada e divertida',
        'Visualização em tempo real',
        'Sistema de preços dinâmico',
        'Experiência responsiva completa',
      ],
      status: 'Finalizado',
      year: '2024',
      role: 'Frontend Developer',
      team: 'Projeto Pessoal',
      duration: '1 mês',
      highlights: [
        'Interatividade avançada com animações',
        'Sistema de estado complexo gerenciado',
        'Interface altamente responsiva',
        'Experiência do usuário excepcional',
      ],
      links: {
        live: 'https://makeyourburguer-ten.vercel.app',
      },
      color: '#FFD700',
    },
    {
      id: 3,
      title: 'Comenta App',
      category: 'mobile',
      type: 'Aplicação Mobile',
      description:
        'Aplicação mobile responsiva com interface otimizada para dispositivos móveis e experiência nativa.',
      longDescription:
        'Comenta App é uma aplicação desenvolvida com foco na experiência mobile, oferecendo interface otimizada, navegação intuitiva e performance excepcional em dispositivos móveis. O projeto demonstra expertise em desenvolvimento mobile-first.',
      image: '📱',
      technologies: ['React', 'Mobile-First Design', 'PWA', 'Responsive'],
      features: [
        'Interface otimizada para mobile',
        'Navegação touch-friendly',
        'Performance otimizada',
        'Design responsivo avançado',
        'Experiência similar a app nativo',
      ],
      status: 'Finalizado',
      year: '2024',
      role: 'Mobile Developer',
      team: 'Projeto Pessoal',
      duration: '2 meses',
      highlights: [
        'Mobile-first development approach',
        'Otimização para touch interfaces',
        'Performance excepcional em mobile',
        'PWA capabilities implementadas',
      ],
      links: {
        live: 'https://comenta-app-zeta.vercel.app',
      },
      color: '#FF4655',
    },
    {
      id: 4,
      title: 'First HTML Project',
      category: 'web',
      type: 'Projeto Web Foundational',
      description:
        'Projeto inicial em HTML demonstrando fundamentos sólidos de desenvolvimento web e evolução técnica.',
      longDescription:
        'First HTML Project representa os primeiros passos no desenvolvimento web, demonstrando a evolução e crescimento técnico ao longo do tempo. Este projeto foundational estabeleceu as bases para projetos mais complexos e sofisticados.',
      image: '🌐',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Fundamentals'],
      features: [
        'Estrutura HTML semântica',
        'Estilização CSS responsiva',
        'JavaScript interativo',
        'Fundamentos web sólidos',
        'Base para projetos futuros',
      ],
      status: 'Finalizado',
      year: '2022/23',
      role: 'Web Developer',
      team: 'Projeto Pessoal',
      duration: '2 meses',
      highlights: [
        'Primeiro projeto web completo',
        'Fundamentos sólidos estabelecidos',
        'Demonstração de evolução técnica',
        'Base para o crescimento profissional',
      ],
      links: {
        live: 'https://first-html-ecru.vercel.app',
      },
      color: '#6C5CE7',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos os Projetos', icon: Layers },
    { id: 'fullstack', label: 'Full Stack', icon: Code2 },
    { id: 'web', label: 'Web Apps', icon: Monitor },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  // Projetos filtrados
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  // useEffect para resetar o selectedProject quando a lista filtrada muda
  useEffect(() => {
    if (filteredProjects.length > 0 && selectedProject >= filteredProjects.length) {
      setSelectedProject(0);
    }
  }, [filteredProjects, selectedProject]);

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

  const nextProject = () => {
    setSelectedProject(prev => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setSelectedProject(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  // Função para mudar categoria com reset do projeto selecionado
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedProject(0); // Sempre começar do primeiro projeto da nova categoria
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Elementos decorativos */}
      <div className="absolute top-16 right-12 w-5 h-5 bg-[#FFD700] rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 left-16 w-4 h-4 bg-[#00D5B7] rounded-full animate-bounce opacity-60" />
      <div className="absolute top-1/3 left-24 w-3 h-3 bg-[#01BFBA] rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 right-20 w-6 h-6 bg-[#FF4655] rounded-full animate-bounce opacity-30" />

      {/* Grid pattern */}
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
                Portfólio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo aprimorado */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Explore abaixo meus projetos em produção/finalizados, nas quais os mesmos demonstram
            toda minha trajetória inicial. Todos contém inovação e resultados reais entregues para
            usuários ao redor do mundo.
          </motion.p>
        </motion.div>

        {/* Estatísticas atualizadas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Globe, number: '5', label: 'Projetos em Produção', color: '#00D5B7' },
            { icon: Eye, number: '4', label: 'Deploys Ativos', color: '#01BFBA' },
            { icon: Star, number: '12+', label: 'Tecnologias Aplicadas', color: '#FFD700' },
            { icon: Code2, number: '2+', label: 'Anos de Experiência', color: '#FF4655' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10
                        hover:border-[#00D5B7]/50 transition-all duration-300 hover:bg-white/10
                        group hover:scale-105"
            >
              <stat.icon
                className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stat.color }}
              />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filtros de categoria atualizados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de projetos */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lista de projetos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#00D5B7]" />
                Projetos em Deploy ({filteredProjects.length})
              </h3>

              {/* Navegação */}
              {filteredProjects.length > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10
                             hover:border-[#00D5B7]/50 transition-all duration-300 hover:bg-white/10"
                  >
                    <ChevronLeft className="w-4 h-4 text-white/70" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10
                             hover:border-[#00D5B7]/50 transition-all duration-300 hover:bg-white/10"
                  >
                    <ChevronRight className="w-4 h-4 text-white/70" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${selectedCategory}-${project.id}`} // Key única para re-render correto
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className={`bg-white/5 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                    selectedProject === index
                      ? 'border-[#00D5B7]/50 bg-white/10 scale-[1.02]'
                      : 'border-white/10 hover:border-[#00D5B7]/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl flex-shrink-0">{project.image}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white truncate">{project.title}</h4>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <Globe className="w-3 h-3 text-green-400" />
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mb-2 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {project.type}
                        </span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium border border-green-500/30">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mensagem quando não há projetos */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-8 text-white/60">
                <Layers className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum projeto encontrado nesta categoria.</p>
              </div>
            )}
          </motion.div>

          {/* Detalhes do projeto selecionado */}
          <div className="sticky top-8">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 && filteredProjects[selectedProject] && (
                <motion.div
                  key={`${selectedCategory}-${selectedProject}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
                >
                  {(() => {
                    const project = filteredProjects[selectedProject];
                    return (
                      <>
                        {/* Header do projeto */}
                        <div className="p-8 border-b border-white/10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{project.image}</div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {project.title}
                              </h3>
                              <p className="text-white/70 mb-4">{project.longDescription}</p>

                              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {project.year}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Tag className="w-4 h-4" />
                                  {project.role}
                                </span>
                                <span>{project.duration}</span>
                              </div>
                            </div>
                          </div>

                          {/* Link do projeto - só mostra se existe */}
                          {project.links.live && (
                            <div className="flex gap-3">
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Ver Online
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Conteúdo do projeto */}
                        <div className="p-8 space-y-6">
                          {/* Tecnologias */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <Code2 className="w-5 h-5 text-[#00D5B7]" />
                              Stack Tecnológico
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm font-medium
                                           border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Funcionalidades */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <Star className="w-5 h-5 text-[#FFD700]" />
                              Funcionalidades Implementadas
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80">
                                  <div
                                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                    style={{ backgroundColor: project.color }}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Destaques */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-[#01BFBA]" />
                              Destaques Técnicos
                            </h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Informações do projeto */}
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-lg font-bold text-white">{project.team}</div>
                              <div className="text-white/60 text-sm">Equipe</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-lg font-bold" style={{ color: project.color }}>
                                {project.status}
                              </div>
                              <div className="text-white/60 text-sm">Status</div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Seção "Sobre Meus Projetos" */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Palette className="w-8 h-8 text-[#00D5B7]" />
              Sobre Meus Projetos
            </h3>
            <p className="text-white/80 leading-relaxed text-lg mb-8 text-center">
              Cada projeto representa um marco na minha jornada de desenvolvimento, demonstrando
              evolução técnica constante e aplicação prática de tecnologias modernas. Todos os
              projetos estão em produção, acessíveis globalmente e refletem meu comprometimento com
              qualidade, performance e experiência do usuário.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code2 className="w-10 h-10 text-[#00D5B7] mx-auto mb-4" />
                <h4 className="font-bold text-white text-lg mb-2">Código Otimizado</h4>
                <p className="text-white/60">
                  Seguindo padrões de mercado e boas práticas de desenvolvimento
                </p>
              </div>
              <div className="text-center">
                <Monitor className="w-10 h-10 text-[#01BFBA] mx-auto mb-4" />
                <h4 className="font-bold text-white text-lg mb-2">Design Responsivo</h4>
                <p className="text-white/60">
                  Interfaces modernas e funcionais em qualquer dispositivo
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-10 h-10 text-[#FFD700] mx-auto mb-4" />
                <h4 className="font-bold text-white text-lg mb-2">Performance</h4>
                <p className="text-white/60">
                  Deploy otimizado com foco em velocidade e escalabilidade
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00d5b7;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #01bfba;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
