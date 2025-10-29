
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SectorsSection from './components/SectorsSection';
import OurBusinessesSection from './components/OurBusinessesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <SectorsSection />
        {/* <OurBusinessesSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}