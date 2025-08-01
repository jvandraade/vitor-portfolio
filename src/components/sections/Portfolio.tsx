import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  Github,
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
  Image as Layers,
  Palette,
  Server,
} from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 0,
      title: 'AXK Marketplace',
      category: 'fullstack',
      type: 'Plataforma Web',
      description:
        'Marketplace completo para a comunidade gaming da AXK, com sistema de compra/venda, coaching e gestão de usuários.',
      longDescription:
        'Plataforma desenvolvida para a AXK eSports que conecta gamers através de um marketplace inovador. O sistema permite compra e venda de contas, itens raros, serviços de coaching personalizado e criação de uma comunidade ativa. Implementado com arquitetura robusta e foco na experiência do usuário.',
      image: '🎮',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      features: [
        'Sistema completo de autenticação',
        'Marketplace de itens e contas',
        'Plataforma de coaching',
        'Dashboard administrativo',
        'Sistema de pagamentos integrado',
      ],
      status: 'Em Produção',
      year: '2024',
      role: 'Full Stack Developer',
      team: 'AXK Team',
      duration: '6 meses',
      highlights: [
        'Arquitetura escalável com microserviços',
        'Interface responsiva e moderna',
        'Sistema de notificações em tempo real',
        'Integração com APIs de pagamento',
      ],
      links: {
        live: 'https://hml.axkrum.com',
        github: null, // Projeto privado
      },
      color: '#00D5B7',
    },
    {
      id: 1,
      title: 'Sistema de Gestão Acadêmica',
      category: 'web',
      type: 'Aplicação Web',
      description:
        'Sistema completo para gestão de estudantes, notas e frequência desenvolvido para instituição de ensino.',
      longDescription:
        'Aplicação web robusta desenvolvida para digitalizar e otimizar a gestão acadêmica. O sistema oferece funcionalidades completas para professores, alunos e administradores, incluindo controle de notas, frequência, horários e comunicação interna.',
      image: '🎓',
      technologies: ['React', 'JavaScript', 'Express', 'MySQL', 'Bootstrap'],
      features: [
        'Dashboard para diferentes perfis de usuário',
        'Controle de notas e frequência',
        'Sistema de comunicação interno',
        'Relatórios automatizados',
        'Gestão de horários e turmas',
      ],
      status: 'Concluído',
      year: '2023',
      role: 'Frontend Developer',
      team: 'Projeto Acadêmico',
      duration: '4 meses',
      highlights: [
        'Interface intuitiva para diferentes perfis',
        'Relatórios automatizados em PDF',
        'Sistema de notificações por email',
        'Responsive design para mobile',
      ],
      links: {
        live: null,
        github: 'https://github.com/vitorandrade',
      },
      color: '#FFD700',
    },
    {
      id: 2,
      title: 'E-commerce Responsivo',
      category: 'web',
      type: 'Loja Virtual',
      description:
        'Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo.',
      longDescription:
        'E-commerce moderno desenvolvido com foco na experiência do usuário e performance. Inclui catálogo de produtos, sistema de carrinho, checkout integrado, painel administrativo e sistema de pedidos completo.',
      image: '🛍️',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
      features: [
        'Catálogo de produtos dinâmico',
        'Carrinho de compras persistente',
        'Sistema de checkout integrado',
        'Painel administrativo completo',
        'Gestão de pedidos e estoque',
      ],
      status: 'Concluído',
      year: '2023',
      role: 'Full Stack Developer',
      team: 'Freelance',
      duration: '3 meses',
      highlights: [
        'Performance otimizada com lazy loading',
        'Design responsivo e moderno',
        'Integração com gateway de pagamento',
        'Dashboard de analytics em tempo real',
      ],
      links: {
        live: 'https://demo-ecommerce.com',
        github: 'https://github.com/vitorandrade/ecommerce',
      },
      color: '#01BFBA',
    },
    {
      id: 3,
      title: 'App de Produtividade',
      category: 'mobile',
      type: 'Aplicativo Mobile',
      description:
        'Aplicativo mobile para gestão de tarefas com sincronização em nuvem e notificações inteligentes.',
      longDescription:
        'Aplicativo mobile desenvolvido para aumentar a produtividade pessoal. Oferece gestão avançada de tarefas, categorização, lembretes inteligentes, sincronização entre dispositivos e analytics pessoais de produtividade.',
      image: '📱',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
      features: [
        'Gestão avançada de tarefas',
        'Sincronização em nuvem',
        'Notificações inteligentes',
        'Analytics de produtividade',
        'Interface moderna e intuitiva',
      ],
      status: 'Em Desenvolvimento',
      year: '2024',
      role: 'Mobile Developer',
      team: 'Projeto Pessoal',
      duration: '2 meses',
      highlights: [
        'Offline-first architecture',
        'Notificações push personalizadas',
        'Gamificação para engajamento',
        'Integração com calendários',
      ],
      links: {
        live: null,
        github: 'https://github.com/vitorandrade/productivity-app',
      },
      color: '#FF4655',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'web',
      type: 'Painel Administrativo',
      description:
        'Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios personalizados.',
      longDescription:
        'Painel administrativo avançado para análise de dados de negócio. Oferece visualizações interativas, relatórios customizáveis, filtros avançados e integração com múltiplas fontes de dados.',
      image: '📊',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      features: [
        'Gráficos interativos e dinâmicos',
        'Relatórios personalizáveis',
        'Filtros avançados de dados',
        'Exportação em múltiplos formatos',
        'Sistema de alertas automáticos',
      ],
      status: 'Concluído',
      year: '2023',
      role: 'Frontend Developer',
      team: 'Freelance',
      duration: '2 meses',
      highlights: [
        'Visualizações em tempo real',
        'Performance otimizada para big data',
        'Interface responsiva e moderna',
        'Sistema de cache inteligente',
      ],
      links: {
        live: 'https://dashboard-demo.com',
        github: 'https://github.com/vitorandrade/dashboard',
      },
      color: '#6C5CE7',
    },
    {
      id: 5,
      title: 'API de Microserviços',
      category: 'backend',
      type: 'Sistema Backend',
      description:
        'Arquitetura de microserviços robusta para aplicações enterprise com alta disponibilidade.',
      longDescription:
        'Sistema backend desenvolvido com arquitetura de microserviços para suportar aplicações de grande escala. Implementa padrões de design modernos, containerização, monitoramento e alta disponibilidade.',
      image: '⚙️',
      technologies: ['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL'],
      features: [
        'Arquitetura de microserviços',
        'Sistema de autenticação JWT',
        'Cache distribuído com Redis',
        'Monitoramento e logs centralizados',
        'Deploy automatizado com CI/CD',
      ],
      status: 'Concluído',
      year: '2024',
      role: 'Backend Developer',
      team: 'Projeto Técnico',
      duration: '3 meses',
      highlights: [
        'Alta disponibilidade (99.9% uptime)',
        'Escalabilidade horizontal',
        'Documentação automática com OpenAPI',
        'Testes automatizados completos',
      ],
      links: {
        live: null,
        github: 'https://github.com/vitorandrade/microservices-api',
      },
      color: '#28A745',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos os Projetos', icon: Layers },
    { id: 'fullstack', label: 'Full Stack', icon: Code2 },
    { id: 'web', label: 'Web Apps', icon: Monitor },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'backend', label: 'Backend', icon: Server },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

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

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Uma coleção dos meus projetos mais significativos, demonstrando habilidades técnicas e
            criatividade
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
            { icon: Code2, number: '6+', label: 'Projetos Concluídos', color: '#00D5B7' },
            { icon: Globe, number: '4', label: 'Em Produção', color: '#01BFBA' },
            { icon: Star, number: '15+', label: 'Tecnologias Usadas', color: '#FFD700' },
            { icon: Eye, number: '1000+', label: 'Horas de Código', color: '#FF4655' },
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

        {/* Filtros de categoria */}
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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedProject(0);
                }}
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
                Projetos ({filteredProjects.length})
              </h3>

              {/* Navegação */}
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
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`bg-white/5 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                    selectedProject === index
                      ? 'border-[#00D5B7]/50 bg-white/10'
                      : 'border-white/10 hover:border-[#00D5B7]/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl flex-shrink-0">{project.image}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white truncate">{project.title}</h4>
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
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
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            project.status === 'Em Produção'
                              ? 'bg-green-500/20 text-green-400'
                              : project.status === 'Em Desenvolvimento'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detalhes do projeto selecionado */}
          <div className="sticky top-8">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 && (
                <motion.div
                  key={selectedProject}
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

                          {/* Links do projeto */}
                          <div className="flex gap-3">
                            {project.links.live && (
                              <button className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Ver Online
                              </button>
                            )}
                            {project.links.github && (
                              <button className="border border-white/30 text-white/90 px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200 flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                Código
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Conteúdo do projeto */}
                        <div className="p-8 space-y-6">
                          {/* Tecnologias */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                              <Code2 className="w-5 h-5 text-[#00D5B7]" />
                              Tecnologias Utilizadas
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
                              Principais Funcionalidades
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

        {/* Introdução aos projetos */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Palette className="w-6 h-6 text-[#00D5B7]" />
              Sobre Meus Projetos
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Cada projeto representa um desafio único e uma oportunidade de aprendizado.Desde
              aplicações full-stack complexas até soluções mobile inovadoras,busco sempre aplicar as
              melhores práticas de desenvolvimento, foco na experiência do usuário e código limpo e
              maintível.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Code2 className="w-8 h-8 text-[#00D5B7] mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Código Limpo</h4>
                <p className="text-white/60 text-sm">Seguindo padrões e boas práticas</p>
              </div>
              <div className="text-center">
                <Monitor className="w-8 h-8 text-[#01BFBA] mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">UX/UI Moderno</h4>
                <p className="text-white/60 text-sm">Interfaces intuitivas e responsivas</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Performance</h4>
                <p className="text-white/60 text-sm">Otimização e escalabilidade</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-lg mb-6">
            Gostou dos projetos? Vamos conversar sobre seu próximo projeto!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] p-0.5 rounded-full">
              <div className="bg-black rounded-full px-6 py-3 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                <span className="text-white group-hover:text-black font-medium flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Ver no GitHub
                </span>
              </div>
            </div>
            <div
              className="border border-[#01BFBA]/50 rounded-full px-6 py-3 hover:bg-[#01BFBA]/10
                          transition-all duration-300 cursor-pointer group"
            >
              <span className="text-[#01BFBA] font-medium flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Entrar em Contato
              </span>
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
