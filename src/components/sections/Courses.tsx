import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Eye, ExternalLink, CheckCircle, ImageIcon } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  platform: string;
  category: 'frontend' | 'backend' | 'design' | 'data' | 'tools';
  certificateImage?: string;
  completedYear: string;
  skills: string[];
  isCompleted: boolean; // Nova propriedade para identificar cursos concluídos
}

export const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const courses: Course[] = [
    {
      id: 'python',
      name: 'Python - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'backend',
      completedYear: 'In progress',
      skills: ['Python', 'Algoritmos', 'Estruturas de Dados'],
      isCompleted: false,
      // certificateImage: '/certificates/python.png',
    },
    {
      id: 'javascript',
      name: 'JavaScript - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'frontend',
      completedYear: '2023',
      skills: ['JavaScript', 'DOM', 'ES6+'],
      certificateImage: '/certificates/javascript.png',
      isCompleted: true,
    },
    {
      id: 'vue',
      name: 'Vue.js - Udemy',
      platform: 'Udemy',
      category: 'frontend',
      completedYear: '2024',
      skills: ['Vue', 'JavaScript', 'Responsive Design'],
      certificateImage: '/certificates/vue.png',
      isCompleted: true,
    },
    {
      id: 'html-css',
      name: 'HTML5 e CSS3 - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'frontend',
      completedYear: '2023',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      certificateImage: '/certificates/html-css.png',
      isCompleted: true,
    },
    {
      id: 'react',
      name: 'React.js - Rocketseat',
      platform: 'Rocketseat',
      category: 'frontend',
      completedYear: '2024',
      skills: ['React', 'Hooks', 'Context API'],
      certificateImage: '/certificates/react.png',
      isCompleted: true,
    },
    {
      id: 'react-redux',
      name: 'React + Redux - Udemy',
      platform: 'Udemy',
      category: 'frontend',
      completedYear: '2024',
      skills: ['TypeScript', 'Tipos', 'Interfaces'],
      certificateImage: '/certificates/react2.png',
      isCompleted: true,
    },
    {
      id: 'nodejs',
      name: 'Node.js + TypeScript - Udemy',
      platform: 'Udemy',
      category: 'backend',
      completedYear: '2025',
      skills: ['Node.js', 'Express', 'APIs'],
      certificateImage: '/certificates/nodejs.png',
      isCompleted: true,
    },
    {
      id: 'git',
      name: 'Git e GitHub - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'tools',
      completedYear: 'In progress',
      skills: ['Git', 'GitHub', 'Versionamento'],
      isCompleted: false,
      // certificateImage: '/certificates/git.png'
    },
    {
      id: 'mysql',
      name: 'MySQL - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'backend',
      completedYear: '2023',
      skills: ['MySQL', 'SQL', 'Banco de Dados'],
      certificateImage: '/certificates/mysql.png',
      isCompleted: true,
    },
    {
      id: 'docker',
      name: 'Docker - Udemy',
      platform: 'Udemy',
      category: 'tools',
      completedYear: 'In progress',
      skills: ['Docker', 'Containers', 'DevOps'],
      isCompleted: false,
      // certificateImage: '/certificates/docker.png'
    },
    {
      id: 'uiux',
      name: 'UI/UX Design - Google',
      platform: 'Google',
      category: 'design',
      completedYear: 'In progress',
      skills: ['UI Design', 'UX Research', 'Figma'],
      isCompleted: false,
      // certificateImage: '/certificates/uiux.png'
    },
    {
      id: 'ml',
      name: 'IA and Machine Learning - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'data',
      completedYear: 'In progress',
      skills: ['Machine Learning', 'Python', 'Scikit-learn'],
      isCompleted: false,
      // certificateImage: '/certificates/ml.png'
    },
    {
      id: 'agile',
      name: 'Agile e Scrum - Udemy',
      platform: 'Udemy',
      category: 'tools',
      completedYear: 'In progress',
      skills: ['Scrum', 'Agile', 'Metodologias'],
      isCompleted: false,
      // certificateImage: '/certificates/agile.png'
    },
  ];

  const categoryConfig = {
    frontend: { color: 'from-aqua-green to-baby-blue', icon: '⚛️', label: 'Frontend' },
    backend: { color: 'from-forest-green to-aqua-green', icon: '⚙️', label: 'Backend' },
    design: { color: 'from-gold to-yellow-400', icon: '🎨', label: 'Design' },
    data: { color: 'from-purple-500 to-pink-500', icon: '🧠', label: 'Data Science' },
    tools: { color: 'from-gray-600 to-gray-800', icon: '🛠️', label: 'Ferramentas' },
  };

  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

  // Função para lidar com erro de imagem
  const handleImageError = (courseId: string) => {
    setImageError(prev => ({
      ...prev,
      [courseId]: true,
    }));
  };

  // Verificar se o curso tem certificado disponível (sem erro de imagem)
  const hasCertificate = (course: Course) => {
    return course.isCompleted && course.certificateImage && !imageError[course.id];
  };

  // Verificar se deve mostrar a medalha (curso concluído, independente da imagem)
  const shouldShowMedal = (course: Course) => {
    return course.isCompleted;
  };

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-aqua-green rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 bg-gradient-primary rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            {t('courses.title')}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('courses.description')}
          </p>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Courses List */}
          <div className="lg:col-span-2 space-y-4">
            {categories.map(category => {
              const categoryCourses = courses.filter(course => course.category === category);
              const config = categoryConfig[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categories.indexOf(category) * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{config.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {config.label}
                    </h3>
                    <div className={`h-px flex-1 bg-gradient-to-r ${config.color} opacity-50`} />
                  </div>

                  {/* Category Courses */}
                  <div className="grid gap-3">
                    {categoryCourses.map((course, index) => (
                      <motion.button
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className={`group p-4 rounded-xl transition-all duration-300 text-left w-full ${
                          selectedCourse?.id === course.id
                            ? 'glass-card bg-white/20 dark:bg-black/30 shadow-glow border-2 border-aqua-green'
                            : 'glass-card hover:bg-white/10 dark:hover:bg-black/20'
                        }`}
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-aqua-green transition-colors">
                                  {course.name}
                                </h4>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                  <span>{course.platform}</span>
                                  <span>•</span>
                                  <span>{course.completedYear}</span>
                                  {shouldShowMedal(course) && (
                                    <>
                                      <span>•</span>
                                      <div className="flex items-center space-x-1 text-gold">
                                        <Award className="w-3 h-3" />
                                        <span className="text-xs font-medium">Certificado</span>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {course.skills.slice(0, 3).map(skill => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${config.color} text-white opacity-80`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            {/* Medalha sempre visível para cursos concluídos */}
                            {shouldShowMedal(course) && (
                              <Award className="w-5 h-5 text-gold transition-transform group-hover:scale-110" />
                            )}
                            <Eye className="w-4 h-4 text-gray-400 group-hover:text-aqua-green transition-colors" />
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-aqua-green transition-colors" />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certificate Preview */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="glass-card rounded-2xl p-6 h-96">
                <AnimatePresence mode="wait">
                  {selectedCourse ? (
                    <motion.div
                      key={selectedCourse.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      {/* Certificate Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <Award className="w-6 h-6 text-gold" />
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                          {hasCertificate(selectedCourse) ? 'Certificado' : 'Preview do Curso'}
                        </h3>
                        {shouldShowMedal(selectedCourse) && (
                          <div className="ml-auto">
                            <div className="flex items-center space-x-1 text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                              <CheckCircle className="w-3 h-3" />
                              <span>Verificado</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Certificate Preview */}
                      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                        {hasCertificate(selectedCourse) ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full h-full group"
                          >
                            <img
                              src={selectedCourse.certificateImage}
                              alt={`Certificado ${selectedCourse.name}`}
                              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                              onError={() => handleImageError(selectedCourse.id)}
                              loading="eager"
                              onLoad={() => {
                                // Log para debug
                                console.log(`Imagem carregada: ${selectedCourse.certificateImage}`);
                              }}
                            />

                            {/* Overlay com zoom hint */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-xl">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-2"
                              >
                                <Eye className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                              </motion.div>
                            </div>

                            {/* Selo de autenticidade */}
                            <div className="absolute top-3 right-3 bg-gold text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                              ✓ Original
                            </div>
                          </motion.div>
                        ) : (
                          <div className="text-center space-y-3">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1, type: 'spring' }}
                              className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto"
                            >
                              <ImageIcon className="w-8 h-8 text-white" />
                            </motion.div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {selectedCourse.isCompleted
                                  ? 'Certificado em breve'
                                  : 'Curso em andamento'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {selectedCourse.isCompleted
                                  ? 'Imagem será adicionada'
                                  : 'Aguardando conclusão'}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Overlay Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-aqua-green/5 pointer-events-none" />
                      </div>

                      {/* Course Details */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {selectedCourse.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>{selectedCourse.platform}</span>
                            <span>•</span>
                            <span>{selectedCourse.completedYear}</span>
                            {shouldShowMedal(selectedCourse) && (
                              <>
                                <span>•</span>
                                <div className="flex items-center space-x-1 text-green-600">
                                  <CheckCircle className="w-3 h-3" />
                                  <span className="text-xs font-medium">Concluído</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Skills */}
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                            Habilidades adquiridas:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {selectedCourse.skills.map(skill => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-aqua-green/10 text-aqua-green rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center text-center space-y-4"
                    >
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Selecione um curso
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Clique em qualquer curso da lista para visualizar o certificado
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: courses.length.toString(), label: 'Cursos Concluídos' },
              {
                number: courses.filter(c => shouldShowMedal(c)).length.toString(),
                label: 'Certificados',
              },
              { number: '2022', label: 'Início dos Estudos' },
              { number: '∞', label: 'Aprendizado Contínuo' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
