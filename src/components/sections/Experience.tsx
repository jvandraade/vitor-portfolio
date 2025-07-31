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
  ExternalLink,
  Briefcase,
  GraduationCap,
  Target,
} from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      title: 'Projeto colaborativo de desenvolvimento Back-end',
      company: 'AXKRUM',
      location: 'Paraná, Brasil',
      period: '2024 - Presente',
      type: 'Estágio',
      status: 'Atual',
      isHighlight: true,
      logo: '🎮',
      description:
        'Desenvolvimento de soluções back-end para plataforma de eSports, com foco em APIs REST, segurança de dados e integração de sistemas.',
      mentor:
        'Gustavo Vargas (CEO, Engenheiro de Software Fullstack Sênior, além de Especialista em IA e Machine Learning .)',
      technologies: ['C#', 'ASP.NET', 'SQL', 'Docker', 'Git', 'Typescript', 'React'],
      achievements: [
        'Desenvolvimento de APIs para marketplace em geral',
        'Integração com sistemas de pagamento, armazenamento e entrega. Além de segurança e integração de dados pessoais.',
        'Otimização de consultas SQL complexas',
        'Implementação de arquitetura limpa, segura e escalável',
        'Colaboração em equipe ágil, com foco em entrega e qualidade',
      ],
      learnings: [
        'Metodologias ágeis na prática',
        'Arquitetura de software escalável',
        'Desenvolvimento orientado a testes',
        'Integração de sistemas complexos',
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
        'Desenvolvimento de interfaces web responsivas e interativas com foco em UI/UX para diversos clientes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      achievements: [
        '15+ projetos entregues com sucesso',
        'Interfaces modernas e responsivas',
        'Otimização de performance web',
        'Integração com APIs REST',
      ],
      learnings: [
        'Gestão de projetos independentes',
        'Comunicação direta com clientes',
        'Prazos e qualidade de entrega',
        'Diversidade de requisitos técnicos',
      ],
    },
    {
      id: 2,
      title: 'Participante de programação e desenvolvimento de software',
      company: 'Estácio',
      location: 'Aracaju, SE',
      period: '2024',
      type: 'Estudante',
      status: 'Concluído',
      isHighlight: false,
      logo: '🎓',
      description:
        'Participei do desenvolvimento de uma aplicação web para auxiliar alunos do curso de Psicologia na faculdade a organizarem suas consultas e agendamentos com seus pacientes para otimizar o tempo no estágio.',
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
      achievements: [
        'Capacidade de desenvolvimento em grupo com uma equipe de 12 alunos',
        'Desenvolvimento de material didático',
        'Workshops de programação',
        'Suporte em projetos acadêmicos',
      ],
      learnings: [
        'Didática e ensino de programação',
        'Liderança e mentoria',
        'Comunicação técnica clara',
        'Paciência e empatia',
      ],
    },
    {
      id: 3,
      title: 'Desenvolvimento de um aplicativo mobile',
      company: 'Estácio',
      location: 'Aracaju, SE',
      period: '2024',
      type: 'Estudante',
      status: 'Concluído',
      isHighlight: false,
      logo: '🎓',
      description:
        'Participei ativamente como líder de um projeto de desenvolvimento do "Comenta", um app mobile de reclamações urbanas para moradores ativos dos bairros de Aracaju, com o objetivo de melhorar a qualidade de vida dos cidadaos.',
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
      achievements: [
        'Capacidade de desenvolvimento em grupo com uma equipe de 5 alunos',
        'Desenvolvimento de material didático',
        'Estudos ativos de programação',
        'Suporte em projetos acadêmicos',
      ],
      learnings: [
        'Aprendizado e ensino de programação',
        'Liderança e mentoria',
        'Comunicação técnica clara',
        'Paciência e empatia',
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
                Experiências
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Jornada profissional construindo soluções inovadoras e aprendendo constantemente.
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
            { icon: Code2, number: '15+', label: 'Projetos Entregues' },
            { icon: Users, number: '30+', label: 'Pessoas Mentoreadas' },
            { icon: Trophy, number: '3', label: 'Posições Diferentes' },
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

                  {/* Card da experiência */}
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
                          Tecnologias Utilizadas
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

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-lg mb-6">
            Buscando sempre novos desafios e oportunidades de crescimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] p-0.5 rounded-full">
              <div className="bg-black rounded-full px-6 py-3 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                <span className="text-white group-hover:text-black font-medium flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Ver Projetos
                </span>
              </div>
            </div>
            <div
              className="border border-[#00D5B7]/50 rounded-full px-6 py-3 hover:bg-[#00D5B7]/10
                          transition-all duration-300 cursor-pointer group"
            >
              <span className="text-[#00D5B7] font-medium flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
