import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import './i18n';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-absolute-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 md:pt-36">
        {/* Seções serão implementadas aqui */}

        {/* Placeholder para as seções */}
        <div className="section-padding">
          <div className="container-max">
            <div className="space-y-32">
              {/* Sessão sobre */}
              <section id="about" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-6">
                    Vitor Andrade
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                    Engenheiro de Software Front-end
                  </p>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
                </div>
              </section>

              {/* Sessão formações */}
              <section id="education" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Formação
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção de formação acadêmica será implementada aqui
                  </p>
                </div>
              </section>

              {/* Sessão cursos */}
              <section id="courses" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Cursos
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção de cursos e certificações será implementada aqui
                  </p>
                </div>
              </section>

              {/* Sessão tecnologias */}
              <section id="technologies" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Tecnologias
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Carrossel de tecnologias será implementado aqui
                  </p>
                </div>
              </section>

              {/* Sessão experiências */}
              <section id="experience" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Experiência
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção de experiências profissionais será implementada aqui
                  </p>
                </div>
              </section>

              {/* Sessão AXK */}
              <section id="axk" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    AXK eSports
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção sobre a AXK será implementada aqui
                  </p>
                </div>
              </section>

              {/* Sessão portfolio */}
              <section id="portfolio" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Portfólio
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção de projetos será implementada aqui
                  </p>
                </div>
              </section>

              {/* Sessão contato */}
              <section id="contact" className="min-h-screen flex items-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-8">
                    Contato
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seção de contato e redes sociais será implementada aqui
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
