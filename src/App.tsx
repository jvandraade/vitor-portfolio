import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import { AboutMe } from './components/sections/AboutMe';
import { Education } from './components/sections/Education';
import { Courses } from './components/sections/Courses';
import Technologies from './components/sections/Technologies';
import Experience from './components/sections/Experience';
import AXK from './components/sections/AXK';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
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

          {/* Technologies Section */}
          <Technologies />

          {/* Experience Section */}
          <Experience />

          {/* AXK Section */}
          <AXK />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Contact Section */}
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
