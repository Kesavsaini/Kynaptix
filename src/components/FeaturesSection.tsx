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