import React from "react";
import BentoGrid from './kokonutui/bento-grid'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative px-4">
              <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">AI Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From custom AI agents to complete automation solutions, we deliver cutting-edge AI services 
            that transform how your business operates.
          </p>
        </div>
    <BentoGrid/>
    </section>
  );
}

