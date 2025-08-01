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
  Play,
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
      description: 'MOBA estratégico com Pokémon em batalhas 5v5',
      achievements: ['Top 3 Regional', 'Melhor Equipe 2024', '15+ Vitórias Consecutivas'],
      players: 8,
      status: 'Ativo',
    },
    {
      id: 1,
      name: 'VALORANT',
      icon: '🎯',
      color: '#FF4655',
      description: 'FPS tático competitivo da Riot Games',
      achievements: ['Ascendant Tier', 'MVP Torneio Local', 'Clutch Master'],
      players: 5,
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Brawlhalla',
      icon: '⚔️',
      color: '#F39C12',
      description: 'Jogo de luta em plataforma free-to-play',
      achievements: ['Diamond Rank', 'Combo Champion', '500+ Vitórias'],
      players: 4,
      status: 'Ativo',
    },
    {
      id: 3,
      name: 'Rainbow Six',
      icon: '🛡️',
      color: '#FFB90F',
      description: 'FPS tático com destruição ambiental',
      achievements: ['Gold Tier', 'Ace Master', 'Estrategista'],
      players: 5,
      status: 'Ativo',
    },
    {
      id: 4,
      name: 'Predecessor',
      icon: '🏰',
      color: '#6C5CE7',
      description: 'MOBA terceira pessoa com heróis únicos',
      achievements: ['Early Access Beta', 'Meta Pioneer', 'Team Captain'],
      players: 6,
      status: 'Beta',
    },
    {
      id: 5,
      name: 'Brawl Stars',
      icon: '⭐',
      color: '#FFC107',
      description: 'Battle royale mobile da Supercell',
      achievements: ['Mythic League', 'Brawler Master', '1000+ Trophies'],
      players: 3,
      status: 'Ativo',
    },
  ];

  const stats = [
    { icon: Trophy, number: '50+', label: 'Torneios Participados', color: '#FFD700' },
    { icon: Users, number: '30+', label: 'Membros Ativos', color: '#00D5B7' },
    { icon: Crown, number: '6', label: 'Jogos Competitivos', color: '#FF4655' },
    { icon: Star, number: '2024', label: 'Fundada em', color: '#01BFBA' },
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

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Organização de eSports dedicada à excelência competitiva, contrução de uma comunidade
            orgânica e o desenvolvimento de jovens talentos, prontos para chegar ao pódio.
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

        {/* Navegação por abas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
            {[
              { id: 'about', label: 'Sobre', icon: Shield },
              { id: 'games', label: 'Jogos', icon: Gamepad2 },
              { id: 'leadership', label: 'Liderança', icon: Crown },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Conteúdo das abas */}
        <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <motion.div
              key="about"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Informações sobre a AXK */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#00D5B7]" />
                    Nossa Missão
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    A AXK eSports nasceu com o objetivo de criar um ambiente competitivo e acolhedor
                    para gamers apaixonados. Buscamos a excelência em cada modalidade, desenvolvendo
                    estratégias inovadoras e fortalecendo o espírito de equipe.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                      <span className="text-white/80">
                        Desenvolvimento de jovens talentos no cenário competitivo
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                      <span className="text-white/80">
                        Participação ativa em torneios regionais e nacionais
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                      <span className="text-white/80">
                        Criação de conteúdo educativo para a comunidade gamer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conquistas */}
                <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/20">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#FFD700]" />
                    Principais Conquistas 2024
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Top 3 Regional Pokémon UNITE',
                      'Melhor Equipe Emergente',
                      'MVP Individual VALORANT',
                      'Maior Crescimento do Ano',
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80">
                        <Award className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Marketplace showcase */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#00D5B7]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#01BFBA]" />
                    AXK Marketplace
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Plataforma inovadora desenvolvida internamente para conectar gamers, oferecendo
                    serviços de coaching, venda de contas e marketplace de itens.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/70">
                      <Target className="w-4 h-4 text-[#00D5B7]" />
                      <span>Sistema de coaching personalizado</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <TrendingUp className="w-4 h-4 text-[#01BFBA]" />
                      <span>Marketplace de itens raros</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Users className="w-4 h-4 text-[#FFD700]" />
                      <span>Comunidade ativa de gamers</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visitar Site
                    </button>
                    <button className="border border-[#00D5B7]/50 text-[#00D5B7] px-4 py-2 rounded-lg font-medium hover:bg-[#00D5B7]/10 transition-colors duration-200 flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>

                {/* Valores da organização */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: 'Integridade', desc: 'Fair play sempre' },
                    { icon: Sword, title: 'Competitividade', desc: 'Busca pela excelência' },
                    { icon: Users, title: 'União', desc: 'Força do coletivo' },
                    { icon: Star, title: 'Inovação', desc: 'Sempre evoluindo' },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-[#00D5B7]/30 transition-all duration-300 group"
                    >
                      <value.icon className="w-6 h-6 text-[#00D5B7] mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h5 className="font-semibold text-white mb-1">{value.title}</h5>
                      <p className="text-white/60 text-sm">{value.desc}</p>
                    </div>
                  ))}
                </div>
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
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Lista de jogos */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6 text-[#00D5B7]" />
                  Modalidades Competitivas
                </h3>

                {games.map((game, index) => (
                  <motion.div
                    key={game.id}
                    variants={itemVariants}
                    className={`bg-white/5 backdrop-blur-md rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                      selectedGame === index
                        ? 'border-[#00D5B7]/50 bg-white/10'
                        : 'border-white/10 hover:border-[#00D5B7]/30'
                    }`}
                    onClick={() => setSelectedGame(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{game.icon}</span>
                        <div>
                          <h4 className="font-semibold text-white">{game.name}</h4>
                          <p className="text-white/60 text-sm">{game.players} jogadores</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            game.status === 'Ativo'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          {game.status}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white/40" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Detalhes do jogo selecionado */}
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
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl">{game.icon}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                              <p className="text-white/70">{game.description}</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-[#FFD700]" />
                                Conquistas da Equipe
                              </h4>
                              <div className="space-y-2">
                                {game.achievements.map((achievement, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-3 text-white/80"
                                  >
                                    <div
                                      className="w-2 h-2 rounded-full flex-shrink-0"
                                      style={{ backgroundColor: game.color }}
                                    />
                                    {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-white">{game.players}</div>
                                <div className="text-white/60 text-sm">Jogadores Ativos</div>
                              </div>
                              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold" style={{ color: game.color }}>
                                  {game.status}
                                </div>
                                <div className="text-white/60 text-sm">Status Atual</div>
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
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Crown className="w-8 h-8 text-[#FFD700]" />
                  Liderança AXK
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Conheça a pessoa por trás da visão estratégica e crescimento da AXK eSports
                </p>
              </div>

              {/* Card do CEO */}
              <div className="bg-gradient-to-br from-[#00D5B7]/10 to-[#01BFBA]/10 backdrop-blur-md rounded-2xl p-8 border border-[#00D5B7]/30 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#00D5B7] to-[#01BFBA] rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-[#00D5B7]/30">
                    GV
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-3xl font-bold text-white mb-2">Gustavo Vargas</h4>
                    <p className="text-[#00D5B7] font-semibold text-xl mb-4">
                      CEO & Fundador da AXK
                    </p>
                    <p className="text-white/80 leading-relaxed mb-6">
                      Visionário e apaixonado por eSports, Gustavo fundou a AXK com o objetivo de
                      criar uma das organizações mais respeitadas do cenário competitivo brasileiro.
                      Além de liderar a organização, atua como mentor de desenvolvimento back-end,
                      compartilhando seu conhecimento técnico com a nova geração de desenvolvedores.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-[#00D5B7]/20 text-[#00D5B7] px-3 py-1 rounded-full text-sm font-medium border border-[#00D5B7]/30">
                        Liderança Estratégica
                      </span>
                      <span className="bg-[#01BFBA]/20 text-[#01BFBA] px-3 py-1 rounded-full text-sm font-medium border border-[#01BFBA]/30">
                        Mentor Back-end
                      </span>
                      <span className="bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium border border-[#FFD700]/30">
                        Fundador AXK
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impacto e mentoria */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#00D5B7]" />
                    Impacto na Organização
                  </h5>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                      Crescimento de 300% em membros ativos
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                      Desenvolvimento do AXK Marketplace
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                      Parcerias estratégicas com sponsors
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#FFD700]" />
                    Mentoria Técnica
                  </h5>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D5B7] mt-2 flex-shrink-0" />
                      Orientação em arquitetura de software
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#01BFBA] mt-2 flex-shrink-0" />
                      Desenvolvimento de APIs robustas
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                      Metodologias ágeis na prática
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-lg mb-6">
            Junte-se à família AXK e faça parte do futuro dos eSports
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-to-r from-[#00D5B7] to-[#01BFBA] p-0.5 rounded-full">
              <div className="bg-black rounded-full px-6 py-3 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                <span className="text-white group-hover:text-black font-medium flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Visitar AXK Marketplace
                </span>
              </div>
            </div>
            <div
              className="border border-[#01BFBA]/50 rounded-full px-6 py-3 hover:bg-[#01BFBA]/10
                          transition-all duration-300 cursor-pointer group"
            >
              <span className="text-[#01BFBA] font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                Conhecer a Equipe
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AXK;
