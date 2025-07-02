
// import { Bot, Zap, MessageCircle, BarChart3, Shield, Cog } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Bot,
//       title: 'Custom AI Agents',
//       description: 'Tailored AI agents that understand your business and automate complex workflows with human-like intelligence.',
//       features: ['Natural Language Processing', 'Decision Making', '24/7 Operation', 'Learning Capabilities']
//     },
//     {
//       icon: MessageCircle,
//       title: 'Conversational AI',
//       description: 'Advanced chatbots and virtual assistants that provide exceptional customer experiences at scale.',
//       features: ['Multi-language Support', 'Context Awareness', 'Emotional Intelligence', 'Seamless Handoffs']
//     },
//     {
//       icon: Zap,
//       title: 'Process Automation',
//       description: 'Streamline your operations with intelligent automation that adapts and optimizes over time.',
//       features: ['Workflow Optimization', 'Data Processing', 'Integration Ready', 'Performance Analytics']
//     },
//     {
//       icon: BarChart3,
//       title: 'AI Analytics',
//       description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
//       features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Automated Reports']
//     },
//     {
//       icon: Shield,
//       title: 'AI Security',
//       description: 'Protect your business with AI-driven security solutions that detect and prevent threats in real-time.',
//       features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Risk Assessment']
//     },
//     {
//       icon: Cog,
//       title: 'AI Integration',
//       description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
//       features: ['API Development', 'System Integration', 'Custom Plugins', 'Migration Support']
//     }
//   ];

//   return (
//     <section id="services" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
        // <div className="text-center mb-16">
        //   <h2 className="text-4xl md:text-5xl font-bold mb-6">
        //     Our <span className="text-gradient">AI Services</span>
        //   </h2>
        //   <p className="text-xl text-white/70 max-w-3xl mx-auto">
        //     From custom AI agents to complete automation solutions, we deliver cutting-edge AI services 
        //     that transform how your business operates.
        //   </p>
        // </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card 
//               key={service.title} 
//               className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/10 group"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardHeader>
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
//                     <service.icon className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors duration-300" />
//                   </div>
//                 </div>
//                 <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
//                 <CardDescription className="text-white/70">
//                   {service.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-white/60">
//                       <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-white/70 mb-6">Ready to revolutionize your business with AI?</p>
//           <button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25">
//             Schedule a Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;



import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { AnimatedBeamComp } from "./hero/AnimatedBeam";

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/logo5.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
        <div className="absolute w-full bottom-0 left-0 md:left-auto  md:top-0 md:-right-10 md:w-1/2 md:h-full">
         <AnimatedBeamComp/>
         </div>
      </WobbleCard>
    </div>
    </section>
  );
}

