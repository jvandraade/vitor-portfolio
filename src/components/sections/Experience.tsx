import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Building2,
  Code2,
  Users,
  Trophy,
  Star,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      title: 'Estagiário de programação Fullstack',
      company: 'AXKRUM',
      location: 'Remoto',
      period: '2024 - Presente',
      type: 'Estágio',
      status: 'Atual',
      isHighlight: true,
      logo: '🎮',
      description:
        'Desenvolvimento de soluções backend e frontendrobustas para plataforma de eSports, focando em APIs REST escaláveis, arquitetura de segurança avançada e integração de sistemas de pagamento complexos. Além de especialidades em UI/UX para proporcionar a maior fluidez de minhas habilidades aos usuários.',
      mentor:
        'Gustavo Vargas (CEO & Engenheiro de Software Fullstack Sênior, Especialista em IA e Machine Learning)',
      technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Docker', 'Git', 'TypeScript', 'React'],
      achievements: [
        'Arquitetura e desenvolvimento de APIs REST para marketplace completo',
        'Integração com gateways de pagamento, sistemas de armazenamento e logística',
        'Implementação de camadas de segurança e proteção de dados pessoais',
        'Otimização de consultas SQL complexas com melhorias de performance de 40%',
        'Desenvolvimento seguindo Clean Architecture e princípios SOLID',
      ],
      learnings: [
        'Metodologias ágeis em ambiente profissional',
        'Arquitetura de software escalável e maintível',
        'Test-Driven Development (TDD)',
        'Integração de sistemas distribuídos complexos',
      ],
    },
    {
      id: 1,
      title: 'Desenvolvedor Frontend Freelancer',
      company: 'Projetos Independentes',
      location: 'Remoto',
      period: '2023 - 2024',
      type: 'Freelance',
      status: 'Concluído',
      isHighlight: false,
      logo: '💻',
      description:
        'Desenvolvimento de interfaces web modernas e responsivas, criando experiências digitais excepcionais com foco em performance, acessibilidade e conversão para diversos segmentos de mercado.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      achievements: [
        '15+ projetos web entregues com 100% de satisfação do cliente',
        'Interfaces responsivas com otimização mobile-first',
        'Melhorias de performance web com PageSpeed Score 90+',
        'Integração com APIs REST e sistemas de terceiros',
      ],
      learnings: [
        'Gestão completa de projetos independentes',
        'Comunicação assertiva e consultiva com clientes',
        'Negociação de prazos e escopo de projetos',
        'Adaptação a diferentes stacks e requisitos técnicos',
      ],
    },
    {
      id: 2,
      title: 'Desenvolvedor Fullstack - Projeto Acadêmico',
      company: 'Estácio',
      location: 'Aracaju, SE',
      period: '2024',
      type: 'Projeto Acadêmico',
      status: 'Concluído',
      isHighlight: false,
      logo: '🎓',
      description:
        'Liderança técnica no desenvolvimento de sistema web para gestão de consultas psicológicas, otimizando o processo de agendamento e acompanhamento de pacientes para estudantes de Psicologia em estágio supervisionado.',
      technologies: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git'],
      achievements: [
        'Liderança técnica de equipe multidisciplinar com 10 desenvolvedores',
        'Sistema completo de gestão de consultas e agendamentos',
        'Interface intuitiva com foco na experiência do usuário',
        'Implementação de controle de versão e metodologia de desenvolvimento',
      ],
      learnings: [
        'Liderança técnica e coordenação de equipes',
        'Desenvolvimento colaborativo em larga escala',
        'Comunicação técnica clara e documentação',
        'Gestão de conflitos e resolução de problemas em equipe',
      ],
    },
    {
      id: 3,
      title: 'Tech Lead - Aplicativo Mobile',
      company: 'Estácio',
      location: 'Aracaju, SE',
      period: '2024',
      type: 'Projeto Acadêmico',
      status: 'Concluído',
      isHighlight: false,
      logo: '📱',
      description:
        'Liderança no desenvolvimento do "Comenta", aplicativo mobile de participação cidadã para melhorar a qualidade de vida urbana em Aracaju, conectando moradores com a gestão pública local.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'HTML/CSS', 'Git'],
      achievements: [
        'Liderança de equipe de 5 desenvolvedores especializados',
        'Aplicativo completo de reclamações e sugestões urbanas',
        'Sistema de geolocalização para mapeamento de problemas',
        'Interface mobile otimizada para engajamento cidadão',
      ],
      learnings: [
        'Desenvolvimento mobile e experiência do usuário',
        'Liderança de projetos de impacto social',
        'Metodologias de pesquisa e validação de produto',
        'Gestão de stakeholders e apresentações executivas',
      ],
    },
  ];

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

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-16 right-12 w-5 h-5 bg-[#FFD700] rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 left-16 w-4 h-4 bg-[#00D5B7] rounded-full animate-bounce opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#01BFBA] rounded-full animate-pulse opacity-40" />

      {/* Efeito de grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#00D5B7 1px, transparent 1px),
                              linear-gradient(90deg, #00D5B7 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
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
                Experiência Profissional
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Aqui trago minha trajetória de crescimento técnico profissional e liderança, sempre
            ajudando ou construindo soluções que geram impacto.
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
            { icon: Calendar, number: '2+', label: 'Anos de Experiência' },
            { icon: Code2, number: '20+', label: 'Projetos Entregues' },
            { icon: Users, number: '17+', label: 'Desenvolvedores Liderados' },
            { icon: Trophy, number: '4', label: 'Posições de Destaque' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10
                        hover:border-[#00D5B7]/50 transition-all duration-300 hover:bg-white/10
                        group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00D5B7] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline e Detalhes */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#00D5B7]" />
              Timeline Profissional
            </h3>

            <div className="relative">
              {/* Linha da timeline */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D5B7] to-[#01BFBA] opacity-30" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={timelineItemVariants}
                  className={`relative pl-16 pb-8 cursor-pointer group ${
                    selectedExperience === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  {/* Indicador da timeline */}
                  <div
                    className={`absolute left-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      selectedExperience === index
                        ? 'bg-[#00D5B7] border-[#00D5B7] scale-125'
                        : 'bg-gray-800 border-white/30 group-hover:border-[#00D5B7]/50'
                    }`}
                  />

                  {/* Card da experiência*/}
                  <div
                    className={`bg-white/5 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 ${
                      selectedExperience === index
                        ? 'border-[#00D5B7]/50 bg-white/10'
                        : 'border-white/10 hover:border-[#00D5B7]/30'
                    } ${exp.isHighlight ? 'ring-2 ring-[#FFD700]/30' : ''}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{exp.logo}</span>
                        <div>
                          <h4 className="font-semibold text-white text-lg">{exp.title}</h4>
                          <p className="text-[#00D5B7] font-medium">{exp.company}</p>
                        </div>
                      </div>
                      {exp.isHighlight && (
                        <div className="bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded-full text-xs font-medium">
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {exp.type}
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        exp.status === 'Atual'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          exp.status === 'Atual' ? 'bg-green-400' : 'bg-blue-400'
                        }`}
                      />
                      {exp.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detalhes da experiência selecionada */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="sticky top-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                {(() => {
                  const exp = experiences[selectedExperience];
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl">{exp.logo}</span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-[#00D5B7] font-semibold text-lg mb-1">{exp.company}</p>
                          {exp.mentor && (
                            <p className="text-white/70 text-sm">Mentor: {exp.mentor}</p>
                          )}
                        </div>
                        {exp.isHighlight && (
                          <Star className="w-6 h-6 text-[#FFD700] fill-current" />
                        )}
                      </div>

                      {/* Descrição */}
                      <p className="text-white/80 leading-relaxed mb-6">{exp.description}</p>

                      {/* Tecnologias */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-[#00D5B7]" />
                          Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-[#00D5B7]/20 text-[#00D5B7] px-3 py-1 rounded-full text-sm font-medium
                                       border border-[#00D5B7]/30 hover:bg-[#00D5B7]/30 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Conquistas */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-[#FFD700]" />
                          Principais Conquistas
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-3 text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Aprendizados */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-[#01BFBA]" />
                          Principais Aprendizados
                        </h4>
                        <ul className="space-y-2">
                          {exp.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start gap-3 text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Texto final sobre experiências */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada experiência contribuiu unicamente para o meu crescimento como desenvolvedor e líder
            técnico, sempre focando em entregar soluções de alta qualidade e com maior impacto
            positivo aos olhos do público.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
