import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Heart,
  Zap,
  Coffee,
  Clock,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/vitorandrade',
      color: '#0077B5',
      description: 'Conecte-se profissionalmente',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vitorandrade',
      color: '#333333',
      description: 'Veja meus repositórios',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/vitorandrade',
      color: '#E4405F',
      description: 'Acompanhe meu dia a dia',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/vitorandrade',
      color: '#1DA1F2',
      description: 'Conversas sobre tech',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Aracaju, Sergipe - Brasil',
      color: '#00D5B7',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vitor.andrade@email.com',
      color: '#01BFBA',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (79) 99999-9999',
      color: '#25D366',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg-Sex, 9h-18h (BRT)',
      color: '#FFD700',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
                Vamos Conversar
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00D5B7] to-[#FFD700] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Tem algum projeto em mente? Vamos transformar suas ideias em realidade digital!
          </motion.p>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário de contato */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Send className="w-6 h-6 text-[#00D5B7]" />
                Envie sua Mensagem
              </h3>
              <p className="text-white/70">
                Preencha o formulário abaixo e entrarei em contato em até 24 horas.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Nome */}
              <motion.div variants={itemVariants} className="relative">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setActiveInput('name')}
                    onBlur={() => setActiveInput(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50
                              focus:outline-none focus:ring-2 transition-all duration-300 ${
                                activeInput === 'name'
                                  ? 'border-[#00D5B7] focus:ring-[#00D5B7]/30'
                                  : 'border-white/20 hover:border-white/30'
                              }`}
                    placeholder="Seu nome completo"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setActiveInput('email')}
                    onBlur={() => setActiveInput(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50
                              focus:outline-none focus:ring-2 transition-all duration-300 ${
                                activeInput === 'email'
                                  ? 'border-[#01BFBA] focus:ring-[#01BFBA]/30'
                                  : 'border-white/20 hover:border-white/30'
                              }`}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </motion.div>

              {/* Assunto */}
              <motion.div variants={itemVariants} className="relative">
                <label className="block text-white/80 text-sm font-medium mb-2">Assunto *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setActiveInput('subject')}
                    onBlur={() => setActiveInput(null)}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50
                              focus:outline-none focus:ring-2 transition-all duration-300 ${
                                activeInput === 'subject'
                                  ? 'border-[#FFD700] focus:ring-[#FFD700]/30'
                                  : 'border-white/20 hover:border-white/30'
                              }`}
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>
              </motion.div>

              {/* Mensagem */}
              <motion.div variants={itemVariants} className="relative">
                <label className="block text-white/80 text-sm font-medium mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput(null)}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50
                            focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                              activeInput === 'message'
                                ? 'border-[#00D5B7] focus:ring-[#00D5B7]/30'
                                : 'border-white/20 hover:border-white/30'
                            }`}
                  placeholder="Conte-me sobre seu projeto, suas ideias ou qualquer dúvida que tenha..."
                />
              </motion.div>

              {/* Botão de envio */}
              <motion.div variants={itemVariants}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white py-3 px-6 rounded-xl
                           font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50
                           disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* Status do envio */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>
                        Erro ao enviar mensagem. Tente novamente ou use outro meio de contato.
                      </span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Informações de contato e redes sociais */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Informações de contato */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-[#FFD700]" />
                Informações de Contato
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10
                             hover:border-[#00D5B7]/30 transition-all duration-300 group hover:bg-white/10"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                               group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.label}</h4>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Redes sociais */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-[#FF4655]" />
                Redes Sociais
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10
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
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                               group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white flex items-center gap-2">
                        {social.name}
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                      </h4>
                      <p className="text-white/60 text-sm">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Chamada para ação */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30"
            >
              <div className="text-center">
                <Zap className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Pronto para Começar?</h4>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Seja para um projeto freelance, oportunidade de trabalho ou apenas para trocar uma
                  ideia sobre tecnologia, estou sempre aberto a novas conexões e desafios!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <div className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] p-0.5 rounded-full">
                    <div className="bg-black rounded-full px-6 py-3 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                      <span className="text-white group-hover:text-black font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Enviar Email Direto
                      </span>
                    </div>
                  </div>
                  <div
                    className="border border-[#25D366]/50 rounded-full px-6 py-3 hover:bg-[#25D366]/10
                                transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-[#25D366] font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      WhatsApp
                    </span>
                  </div>
                </div>
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
