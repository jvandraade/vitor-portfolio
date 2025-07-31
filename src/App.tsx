import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import { AboutMe } from './components/sections/AboutMe';
import { Education } from './components/sections/Education';
import { Courses } from './components/sections/Courses';
import Technologies from './components/sections/Technologies';
import Experience from './components/sections/Experience';
import './i18n';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-absolute-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="pt-32 md:pt-36">
        <div className="space-y-0">
          {/* About Section */}
          <AboutMe />

          {/* Education Section */}
          <Education />

          {/* Courses Section */}
          <Courses />

          {/* Placeholder sections for future implementation */}
          <div className="section-padding">
            <div className="container-max">
              <div className="space-y-32">
                {/* Technologies Section */}
                <Technologies />
                {/* Experience Section */}
                <section id="experience" className="min-h-screen flex items-center">
                  <Experience />
                </section>

                {/* AXK Section */}
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

                {/* Portfolio Section */}
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

                {/* Contact Section */}
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
        </div>
      </main>
    </div>
  );
}

export default App;
