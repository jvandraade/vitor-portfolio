import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Users,
  Crown,
  Gamepad2,
  Star,
  Target,
  Award,
  Zap,
  Shield,
  Sword,
  ChevronRight,
  ExternalLink,
  TrendingUp,
} from 'lucide-react';

const AXK = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const [activeTab, setActiveTab] = useState('about');

  const games = [
    {
      id: 0,
      name: 'Pokémon UNITE',
      icon: '⚡',
      color: '#FFCB05',
      description: 'MOBA estratégico com Pokémons em batalhas 5v5 intensas',
      achievements: ['Top 5 Regional', 'Melhor Equipe 2023/24', '15+ Vitórias Consecutivas'],
      players: 7,
      status: 'Ativo',
    },
    {
      id: 1,
      name: 'VALORANT',
      icon: '🎯',
      color: '#FF4655',
      description:
        'FPS tático competitivo da Riot Games com foco na transformação de novos talentos',
      achievements: ['Radiant Tier', 'Champions of Desafiant tier in Premier', 'Clutch Master'],
      players: 5,
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Brawlhalla',
      icon: '⚔️',
      color: '#F39C12',
      description: 'Jogo de luta 3D em plataforma com combos devastadores',
      achievements: ['Valhallan Rank', 'Ultra Combo Champions', '100+ Vitórias'],
      players: 2,
      status: 'Ativo',
    },
    {
      id: 3,
      name: 'Rainbow Six Siege X',
      icon: '🛡️',
      color: '#FFB90F',
      description: 'FPS tático com destruição ambiental e estratégias avançadas',
      achievements: ['Champion Tier', 'Ace Master', 'Estrategistas Profissionais'],
      players: 7,
      status: 'Ativo',
    },
    {
      id: 4,
      name: 'Predecessor',
      icon: '🏰',
      color: '#6C5CE7',
      description: 'MOBA terceira pessoa com heróis únicos e mecânicas inovadoras',
      achievements: ['Early Access Beta', 'Meta Pioneer', 'Team Captain'],
      players: 6,
      status: 'Beta',
    },
    {
      id: 5,
      name: 'Brawl Stars',
      icon: '⭐',
      color: '#FFC107',
      description: '3v3  mobile da Supercell com ação frenética',
      achievements: ['Master League', 'Brawlers Masters', '70.000+ Trophies'],
      players: 3,
      status: 'Ativo',
    },
  ];

  const stats = [
    { icon: Trophy, number: '50+', label: 'Torneios Participados', color: '#FFD700' },
    { icon: Users, number: '30+', label: 'Membros Ativos', color: '#00D5B7' },
    { icon: Crown, number: '6', label: 'Jogos Competitivos', color: '#FF4655' },
    { icon: Star, number: '2021', label: 'Fundada em', color: '#01BFBA' },
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

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="axk"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background com tema AXK */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Elementos decorativos temáticos */}
      <div className="absolute top-20 left-12 w-6 h-6 bg-[#00D5B7] rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-24 right-16 w-5 h-5 bg-[#01BFBA] rounded-full animate-bounce opacity-50" />
      <div className="absolute top-1/3 left-20 w-4 h-4 bg-[#FFD700] rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/3 right-24 w-3 h-3 bg-[#00D5B7] rounded-full animate-bounce opacity-70" />

      {/* Grid pattern com cores AXK */}
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
          {/* Título com logo AXK */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div
                className="w-16 h-16 bg-gradient-to-br from-[#00D5B7] to-[#01BFBA] rounded-2xl
                            flex items-center justify-center text-2xl font-bold text-white shadow-2xl
                            shadow-[#00D5B7]/30 animate-pulse"
              >
                AXK
              </div>
              <div className="text-4xl">🎮</div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span
                className="bg-gradient-to-r from-[#00D5B7] via-[#01BFBA] to-[#FFD700]
                             bg-clip-text text-transparent"
              >
                AXKRUM
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] mx-auto rounded-full" />
          </motion.div>

          {/* Subtítulo mais impactante */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Organização de eSports focada na excelência competitiva e desenvolvimento de talentos
            d'elite. Construindo o futuro dos esportes eletrônicos através da estratégia, dedicação
            e resultados excepcionais.
          </motion.p>
        </motion.div>

        {/* Estatísticas da organização */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
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

        {/* Layout principal */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Menu à esquerda */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 sticky top-8">
              <h3 className="text-lg font-bold text-white mb-6 text-center lg:text-left">
                Navegação AXK
              </h3>
              <nav className="space-y-2">
                {[
                  { id: 'about', label: 'Sobre a AXK', icon: Shield },
                  { id: 'games', label: 'Modalidades', icon: Gamepad2 },
                  { id: 'leadership', label: 'Liderança', icon: Crown },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300
                               flex items-center gap-3 group ${
                                 activeTab === tab.id
                                   ? 'bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white shadow-lg'
                                   : 'text-white/70 hover:text-white hover:bg-white/10'
                               }`}
                  >
                    <tab.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm lg:text-base">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Conteúdo à direita */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  {/* Sobre a AXK */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Shield className="w-8 h-8 text-[#00D5B7]" />
                      Missão & Visão
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-8 text-lg">
                      A AXKRUM representa a vanguarda do cenário competitivo brasileiro. Nossa
                      organização combina talento excepcional, estratégias inovadoras, mentalidade
                      vencedora, além dos pilares fundamentais de educação, respeito e sucesso para
                      alcançar resultados extraordinários em múltiplas modalidades de eSports.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#00D5B7]" />
                          Nossos Pilares
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                            <span className="text-white/80">
                              <strong className="text-white">Excelência Competitiva:</strong> Busca
                              incessante pela perfeição em cada partida
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                            <span className="text-white/80">
                              <strong className="text-white">Desenvolvimento Estratégico:</strong>{' '}
                              Formação de talentos com metodologia profissional
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                            <span className="text-white/80">
                              <strong className="text-white">Inovação Tecnológica:</strong>{' '}
                              Ferramentas avançadas para análise e crescimento
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-[#FFD700]" />
                          Conquistas 2024
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            'Top 3 Regional Pokémon UNITE',
                            'Melhor Equipe Emergente',
                            'MVP Individual VALORANT',
                            'Maior Crescimento Anual',
                          ].map((achievement, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 text-white/80 bg-white/5 rounded-lg p-3 border border-white/10"
                            >
                              <Award className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                              <span className="font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AXK Marketplace */}
                  <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-[#01BFBA]" />
                      AXK Marketplace
                    </h3>
                    <p className="text-white/80 mb-8 text-lg leading-relaxed">
                      Plataforma oficial da AXK desenvolvida para revolucionar o ecossistema gamer,
                      além de vender nossos produtos oficiais, conectando nossos jogadores
                      profissionais com o público de eSports, além de apresentar para qual objetivo
                      viemos conquistar o mercado Brasileiro e Mundial.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                        <Target className="w-8 h-8 text-[#00D5B7] mx-auto mb-3" />
                        <h5 className="font-semibold text-white mb-2">Coaching Elite</h5>
                        <p className="text-white/70 text-sm">
                          Mentoria personalizada com profissionais renomados
                        </p>
                      </div>
                      <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                        <TrendingUp className="w-8 h-8 text-[#01BFBA] mx-auto mb-3" />
                        <h5 className="font-semibold text-white mb-2">Marketplace Premium</h5>
                        <p className="text-white/70 text-sm">
                          Itens exclusivos e contas verificadas
                        </p>
                      </div>
                      <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                        <Users className="w-8 h-8 text-[#FFD700] mx-auto mb-3" />
                        <h5 className="font-semibold text-white mb-2">Comunidade Ativa</h5>
                        <p className="text-white/70 text-sm">Networking com gamers profissionais</p>
                      </div>
                    </div>
                  </div>

                  {/* Valores da organização */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        icon: Shield,
                        title: 'Integridade',
                        desc: 'Fair play em primeiro lugar',
                        color: '#00D5B7',
                      },
                      {
                        icon: Sword,
                        title: 'Competitividade',
                        desc: 'Mentalidade vencedora',
                        color: '#01BFBA',
                      },
                      {
                        icon: Users,
                        title: 'Unidade',
                        desc: 'Força do trabalho em equipe',
                        color: '#FFD700',
                      },
                      {
                        icon: Star,
                        title: 'Inovação',
                        desc: 'Evolução constante',
                        color: '#FF4655',
                      },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#00D5B7]/30 transition-all duration-300 group text-center"
                      >
                        <value.icon
                          className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200"
                          style={{ color: value.color }}
                        />
                        <h5 className="font-semibold text-white mb-2">{value.title}</h5>
                        <p className="text-white/60 text-sm">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'games' && (
                <motion.div
                  key="games"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid lg:grid-cols-2 gap-8"
                >
                  {/* Lista de modalidades */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <Gamepad2 className="w-8 h-8 text-[#00D5B7]" />
                      Modalidades Competitivas
                    </h3>

                    {games.map((game, index) => (
                      <motion.div
                        key={game.id}
                        variants={itemVariants}
                        className={`bg-white/5 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                          selectedGame === index
                            ? 'border-[#00D5B7]/50 bg-white/10 scale-[1.02]'
                            : 'border-white/10 hover:border-[#00D5B7]/30'
                        }`}
                        onClick={() => setSelectedGame(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl p-2 bg-white/5 rounded-lg">{game.icon}</div>
                            <div>
                              <h4 className="font-bold text-white text-lg">{game.name}</h4>
                              <p className="text-white/60 text-sm">
                                {game.players} atletas d'elite
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                game.status === 'Ativo'
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}
                            >
                              {game.status}
                            </span>
                            <ChevronRight
                              className={`w-5 h-5 transition-transform duration-200 ${
                                selectedGame === index
                                  ? 'rotate-90 text-[#00D5B7]'
                                  : 'text-white/40'
                              }`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Detalhes da modalidade selecionada */}
                  <div className="sticky top-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedGame}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                      >
                        {(() => {
                          const game = games[selectedGame];
                          return (
                            <>
                              <div className="flex items-center gap-4 mb-8">
                                <div className="text-5xl p-3 bg-white/10 rounded-xl">
                                  {game.icon}
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                                  <p className="text-white/70 text-lg">{game.description}</p>
                                </div>
                              </div>

                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                                    <Trophy className="w-6 h-6 text-[#FFD700]" />
                                    Conquistas da Equipe
                                  </h4>
                                  <div className="space-y-3">
                                    {game.achievements.map((achievement, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-3 text-white/80 bg-white/5 rounded-lg p-3 border border-white/10"
                                      >
                                        <div
                                          className="w-3 h-3 rounded-full flex-shrink-0"
                                          style={{ backgroundColor: game.color }}
                                        />
                                        <span className="font-medium">{achievement}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20">
                                    <div className="text-3xl font-bold text-white mb-2">
                                      {game.players}
                                    </div>
                                    <div className="text-white/60 text-sm font-medium">
                                      Atletas Ativos
                                    </div>
                                  </div>
                                  <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20">
                                    <div
                                      className="text-3xl font-bold mb-2"
                                      style={{ color: game.color }}
                                    >
                                      {game.status}
                                    </div>
                                    <div className="text-white/60 text-sm font-medium">
                                      Status Competitivo
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {activeTab === 'leadership' && (
                <motion.div
                  key="leadership"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                      <Crown className="w-10 h-10 text-[#FFD700]" />
                      Liderança Executiva
                    </h3>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                      Conheça a visão estratégica e expertise técnica por trás do crescimento
                      exponencial da AXKRUM
                    </p>
                  </div>

                  {/* Card do CEO Aprimorado */}
                  <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-36 h-36 bg-gradient-to-br from-[#00D5B7] to-[#01BFBA] rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-[#00D5B7]/40 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D5B7] to-[#01BFBA] rounded-full animate-pulse opacity-50"></div>
                        <span className="relative z-10">GV</span>
                      </div>

                      <div className="flex-1 text-center lg:text-left">
                        <h4 className="text-4xl font-bold text-white mb-3">Gustavo Vargas</h4>
                        <p className="text-[#00D5B7] font-bold text-2xl mb-6">
                          CEO & Fundador da AXK eSports
                        </p>
                        <p className="text-white/80 leading-relaxed text-lg mb-8">
                          Visionário tecnológico e estrategista de eSports, Gustavo combina
                          expertise em desenvolvimento fullstack com profundo conhecimento do
                          cenário competitivo. Sua liderança transformou a AXK em uma das
                          organizações mais promissoras do Brasil, estabelecendo novos padrões de
                          excelência e inovação no setor.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                          <span className="bg-[#00D5B7]/20 text-[#00D5B7] px-4 py-2 rounded-full font-bold border border-[#00D5B7]/40">
                            Liderança Estratégica
                          </span>
                          <span className="bg-[#01BFBA]/20 text-[#01BFBA] px-4 py-2 rounded-full font-bold border border-[#01BFBA]/40">
                            Arquiteto de Software
                          </span>
                          <span className="bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-full font-bold border border-[#FFD700]/40">
                            Mentor Técnico
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impacto e resultados */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                      <h5 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-[#00D5B7]" />
                        Impacto Organizacional
                      </h5>
                      <ul className="space-y-4 text-white/80">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">300% crescimento</strong> em membros
                            ativos em 12 meses
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Desenvolvimento completo</strong> do AXK
                            Marketplace proprietário
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Parcerias estratégicas</strong> com
                            sponsors e organizações d'elite
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FF4655] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Metodologia inovadora</strong> de
                            treinamento competitivo
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                      <h5 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                        <Star className="w-6 h-6 text-[#FFD700]" />
                        Expertise Técnica
                      </h5>
                      <ul className="space-y-4 text-white/80">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Arquitetura de Software:</strong>{' '}
                            Sistemas escaláveis e robustos
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">APIs Avançadas:</strong> Desenvolvimento
                            back-end de alta performance
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Metodologias Ágeis:</strong>{' '}
                            Implementação prática e mentoria
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FF4655] mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">Análise de Dados:</strong> Métricas
                            avançadas para otimização
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action Refinado - Apenas Marketplace */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore o Ecossistema AXK</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Descubra nossa plataforma inovadora e faça parte da revolução dos eSports brasileiros.
              Conecte-se com profissionais, desenvolva suas habilidades e alcance o próximo nível.
            </p>

            <div className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] p-0.5 rounded-full inline-block">
              <div className="bg-black rounded-full px-8 py-4 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                <span className="text-white group-hover:text-black font-bold flex items-center gap-3 text-lg">
                  <ExternalLink className="w-5 h-5" />
                  Visite a AXK
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AXK;
