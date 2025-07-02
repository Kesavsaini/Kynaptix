import { ArrowRight, Play, Star, Zap, Bot, Cpu, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedBeamComp } from './hero/AnimatedBeam';


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/herovid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* <AnimatedBeamComp/> */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-white/10 mb-8 animate-slide-up">
            <Star className="w-4 h-4 text-neon-blue mr-2" />
            <span className="text-sm text-white/80">Leading AI Automation Agency</span>
            <div className="w-2 h-2 bg-neon-green rounded-full ml-2 animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up text-white" style={{ animationDelay: '0.2s' }}>
            Transform Your Business with{' '}
            <span className="text-gradient bg-black">AI Agents</span>
          </h1>

          {/* Subheadline */}
          {/* <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            We build intelligent AI agents and automation systems that work 24/7 to scale your business, 
            reduce costs, and unlock unprecedented growth.
          </p> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25">
              <Zap className="w-5 h-5 mr-2" />
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div> */}

          {/* Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Bot className="w-8 h-8 text-neon-blue mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/60">AI Agents Deployed</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-8 h-8 text-neon-purple mr-2" />
                <span className="text-3xl font-bold text-white">10M+</span>
              </div>
              <p className="text-white/60">Tasks Automated</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-8 h-8 text-neon-pink mr-2" />
                <span className="text-3xl font-bold text-white">99.9%</span>
              </div>
              <p className="text-white/60">Uptime Guaranteed</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
