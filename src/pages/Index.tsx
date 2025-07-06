
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Xlink from '@/components/footer/Xlink';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main>

        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-neutral-950 rounded-t-3xl">
      
        <div className='w-full h-full flex items-center justify-center'>
          <Xlink/>
        </div>
      </footer>
    </div>
  );
};

export default Index;
