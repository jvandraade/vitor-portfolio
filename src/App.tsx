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
      <main className="pt-20 md:pt-24">
        {/* About Section */}
        <div className="relative">
          <AboutMe />
        </div>

        {/* Education Section */}
        <div className="relative -mt-4">
          <Education />
        </div>

        {/* Courses Section */}
        <div className="relative -mt-8">
          <Courses />
        </div>

        {/* Technologies Section */}
        <div className="relative -mt-8">
          <Technologies />
        </div>

        {/* Experience Section */}
        <div className="relative -mt-8">
          <Experience />
        </div>

        {/* AXK Section */}
        <div className="relative -mt-8">
          <AXK />
        </div>

        {/* Portfolio Section */}
        <div className="relative -mt-8">
          <Portfolio />
        </div>

        {/* Contact Section */}
        <div className="relative -mt-8">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
