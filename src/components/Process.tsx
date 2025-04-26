
import React from 'react';
import Button from './Button';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your fencing needs, take measurements, and provide an estimate."
    },
    {
      number: "02",
      title: "Post Installation",
      description: "Our team installs the fence posts on your property in preparation for the custom panels."
    },
    {
      number: "03",
      title: "Design in Fence Genius",
      description: "Using our proprietary software, we design your custom fence to match your terrain perfectly."
    },
    {
      number: "04",
      title: "Off-Site Construction",
      description: "We build your custom fence panels in our climate-controlled facility for superior quality."
    },
    {
      number: "05",
      title: "Rapid Installation",
      description: "Our team installs your pre-built custom panels quickly and with minimal disruption."
    }
  ];

  return (
    <section id="process" className="section bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h5 className="text-tech-dark font-medium mb-2">Our Innovation</h5>
            <h2 className="mb-4">The Fence Genius Process</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              We've revolutionized fence construction with our off-site
              production method, delivering higher quality fences with faster installation
              and less disruption to your property.
            </p>
            
            <div className="hidden lg:block my-8">
              <div className="relative border-l-2 border-dashed border-wood pl-8 pb-6">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="mb-10 relative animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -left-10 bg-wood text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg -mt-1">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Button size="lg" className="mt-6">Book A Consultation</Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-muted rounded-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Why Off-Site Construction?</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Higher Quality Construction</h4>
                    <p className="text-muted-foreground">Built in a climate-controlled environment for precision and durability.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Faster Installation</h4>
                    <p className="text-muted-foreground">Rapid and quiet installation process with pre-built custom panels.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Designs</h4>
                    <p className="text-muted-foreground">Perfectly contoured to your terrain with our Fence Genius software.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Less Disruption</h4>
                    <p className="text-muted-foreground">Reduced time and noise on your property during installation.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Better Value</h4>
                    <p className="text-muted-foreground">Higher quality at competitive prices due to our efficient process.</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Process Steps */}
              <div className="lg:hidden mt-8 space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="bg-wood text-white w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
