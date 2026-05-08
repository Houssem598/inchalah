import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Operations from './sections/Operations';
import Governance from './sections/Governance';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Operations />
        <Governance />
        <Contact />
      </main>
    </div>
  );
}
