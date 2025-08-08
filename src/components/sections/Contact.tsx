import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ExternalLink,
  Heart,
  Coffee,
  Clock,
  Users,
  MessageCircle,
  Briefcase,
  Code,
} from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/joão-vitor-andrade-santos/',
      color: '#0077B5',
      description: 'Rede profissional e oportunidades',
      stats: '500+ conexões',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/jvandraade',
      color: '#333333',
      description: 'Repositórios e contribuições',
      stats: '20+ repositórios',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/vitao_andraade',
      color: '#E4405F',
      description: 'Bastidores e vida pessoal',
      stats: 'Conteúdo diário',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/asaaaausky',
      color: '#1DA1F2',
      description: 'Discussões sobre tecnologia',
      stats: 'Tech insights',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Aracaju, Sergipe - Brasil',
      detail: 'Disponível para trabalho remoto nacional/internacional',
      color: '#00D5B7',
    },
    {
      icon: Mail,
      label: 'Email Profissional',
      value: 'jvandraadetech@gmail.com',
      detail: 'Resposta garantida em até 24 horas úteis',
      color: '#01BFBA',
    },
    {
      icon: Phone,
      label: 'WhatsApp Business',
      value: '+55 (79) 98132-4454',
      detail: 'Atendimento direto para projetos e parcerias',
      color: '#25D366',
    },
    {
      icon: Clock,
      label: 'Disponibilidade',
      value: 'Segunda a Sexta, 9h às 18h (BRT)',
      detail: 'Atendimento emergencial via WhatsApp',
      color: '#FFD700',
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

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-12 w-6 h-6 bg-[#00D5B7] rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-24 right-16 w-5 h-5 bg-[#01BFBA] rounded-full animate-bounce opacity-50" />
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-[#FFD700] rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/3 left-24 w-3 h-3 bg-[#00D5B7] rounded-full animate-bounce opacity-70" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#00D5B7 1px, transparent 1px),
                              linear-gradient(90deg, #01BFBA 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
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
                Contato Profissional
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo profissional */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Conecte-se comigo para discussões sobre oportunidades profissionais, parcerias
            estratégicas ou desenvolvimento de projetos inovadores. Estou sempre aberto a novos
            desafios e colaborações.
          </motion.p>
        </motion.div>

        {/* Estatísticas profissionais */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Briefcase, number: '100%', label: 'Taxa de Resposta', color: '#00D5B7' },
            { icon: Clock, number: '24h', label: 'Tempo de Resposta', color: '#01BFBA' },
            { icon: Users, number: '50+', label: 'Conexões Profissionais', color: '#FFD700' },
            { icon: Code, number: '10+', label: 'Projetos Entregues', color: '#FF4655' },
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

        {/* Conteúdo principal  */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Informações principais */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-[#FFD700]" />
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10
                             hover:border-[#00D5B7]/30 transition-all duration-300 group hover:bg-white/10"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1
                               group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                      <p className="text-white/80 font-medium">{info.value}</p>
                      <p className="text-white/60 text-sm mt-1">{info.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Área de especialização */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#00D5B7]" />
                Áreas de Interesse
              </h4>
              <div className="space-y-3">
                {[
                  'Desenvolvimento Full Stack',
                  'Consultoria em Tecnologia',
                  'Parcerias Estratégicas',
                  'Projetos Inovadores',
                  'Oportunidades de Carreira',
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#00D5B7]" />
                    {area}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Redes sociais */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-[#FF4655]" />
                Redes Sociais Profissionais
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10
                             hover:scale-105 transition-all duration-300 group cursor-pointer"
                    style={
                      {
                        '--hover-color': social.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${social.color}50`;
                      e.currentTarget.style.backgroundColor = `${social.color}10`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                               group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon className="w-7 h-7" style={{ color: social.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white flex items-center gap-2 mb-1">
                        {social.name}
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                      </h4>
                      <p className="text-white/70 text-sm mb-1">{social.description}</p>
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${social.color}20`,
                          color: social.color,
                        }}
                      >
                        {social.stats}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Disponibilidade profissional */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#01BFBA]" />
                Status Profissional
              </h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80">Disponibilidade para Projetos</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                    Disponível
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80">Modalidade de Trabalho</span>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                    Remoto/Híbrido
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80">Tipo de Colaboração</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                    Freelance/CLT
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#00D5B7]/10 to-[#01BFBA]/10 rounded-xl border border-[#00D5B7]/20">
                <p className="text-white/80 text-sm text-center leading-relaxed">
                  <strong className="text-[#00D5B7]">Comprometimento com excelência:</strong> Cada
                  projeto é tratado com dedicação total, entregando soluções inovadoras e resultados
                  mensuráveis para o sucesso do seu negócio.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer da seção */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-[#FF4655] animate-pulse" /> por Vitor Andrade
          </p>
          <p className="text-white/40 text-sm mt-2">
            © 2025 Vitor Andrade. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
