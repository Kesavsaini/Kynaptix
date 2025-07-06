
// import { Check, ArrowRight, Sparkles, Clock, TrendingUp, Users } from 'lucide-react';

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: Clock,
//       title: '24/7 Automation',
//       description: 'Your AI agents work around the clock, ensuring your business never sleeps.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Scalable Solutions',
//       description: 'Grow your AI capabilities as your business expands, without limits.',
//     },
//     {
//       icon: Users,
//       title: 'Human-AI Collaboration',
//       description: 'Perfect harmony between human creativity and AI efficiency.',
//     },
//     {
//       icon: Sparkles,
//       title: 'Continuous Learning',
//       description: 'Our AI systems evolve and improve with every interaction.',
//     },
//   ];

//   const benefits = [
//     'Reduce operational costs by up to 80%',
//     'Increase productivity by 300%',
//     'Eliminate human errors in repetitive tasks',
//     'Scale your team without hiring',
//     'Get insights from complex data patterns',
//     'Respond to customers instantly, 24/7',
//   ];

//   return (
//     <section id="features" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Content */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Why Choose <span className="text-gradient">Our AI Solutions</span>
//             </h2>
//             <p className="text-xl text-white/70 mb-8">
//               We don't just build AI; we craft intelligent solutions that understand your business 
//               and deliver measurable results from day one.
//             </p>

//             {/* Benefits List */}
//             <div className="space-y-4 mb-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-center">
//                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center mr-4 flex-shrink-0">
//                     <Check className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-white/80">{benefit}</span>
//                 </div>
//               ))}
//             </div>

//             <button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25 flex items-center">
//               Explore Our Solutions
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </button>
//           </div>

//           {/* Right Side - Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {features.map((feature, index) => (
//               <div 
//                 key={feature.title}
//                 className="glass-effect border border-white/10 p-6 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105 group"
//               >
//                 <div className="p-3 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300 w-fit mb-4">
//                   <feature.icon className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-white/70 text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 text-center">
//           <div className="glass-effect border border-white/10 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               <div>
//                 <div className="text-3xl font-bold text-gradient mb-2">2.5x</div>
//                 <div className="text-white/60">Faster Processes</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-gradient mb-2">90%</div>
//                 <div className="text-white/60">Cost Reduction</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
//                 <div className="text-white/60">Availability</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-gradient mb-2">100+</div>
//                 <div className="text-white/60">Happy Clients</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from 'react'
import { WobbleCard } from "./ui/wobble-card";
import { AnimatedBeamComp } from "./hero/AnimatedBeam";

const FeaturesSection = () => {
  return (
    <section id="contact" className="py-20 relative">
    <div className="container mx-auto px-4">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Why Choose <span className="text-gradient">Our AI Solutions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We don't just build AI; we craft intelligent solutions that understand your business 
             and deliver measurable results from day one.
          </p>
        </div>
     {/* <BentoGrid/> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
           <WobbleCard
             containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
             className=""
           >
             <div className="max-w-xs">
               <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                 Custom-Built AI Agents
               </h2>
               <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Tailored systems designed to fit your exact operational workflows, not generic, one-size-fits-all models.
               </p>
             </div>
             <img
               src="/diamond.png"
               width={600}
               height={600}
               alt="linear demo image"
               className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
             />
           </WobbleCard>
           <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
             <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              End-to-End Automation
             </h2>
             <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
               Full-cycle automation solutions eliminating redundant tasks, accelerating decision-making, and reducing operational overhead.
             </p>
           </WobbleCard>
           <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
             <div className="max-w-sm">
               <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                 Seamless System Integration
               </h2>
               <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                 Direct integration with your existing tech stack — no disruptive migrations, no bloated middle layers.
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
     </div>
     </section>
  )
}

export default FeaturesSection