
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-accent">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h5 className="text-tech-dark font-medium mb-2">Our Story</h5>
              <h2 className="mb-4">Family Owned Values</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  At MyFence.com, we're not just a business, we're a family. Spearheaded by a dynamic 
                  father-son duo, our company reflects the values of family – trust, reliability, and commitment. 
                  With a shared vision, we've created a platform that makes custom fence design and 
                  installation accessible to all.
                </p>
                
                <p className="mb-4">
                  We understand that every investment in your property is a significant decision. That's 
                  why we've crafted our services to offer complete transparency and clarity. Our platform 
                  allows you to visualize your custom fence design, enabling you to make informed, confident 
                  decisions.
                </p>
                
                <p>
                  With us, you don't just invest in a fence; you invest in peace of mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-wood-light to-wood-dark text-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">A Perfect Fence, Every Time</h3>
              
              <p className="mb-6">
                A common issue as a customer is finding a reliable fence contractor that will deliver a great 
                fence to you for a reasonable price. There is no standardized way that fences are built since 
                it is traditionally something that has to be made on the fly.
              </p>
              
              <p className="mb-6">
                This is where we step in, with the Fence Genius technology, we are sure to deliver you arguably 
                the best fence possible for a fantastic price. Having software do all of the design work enables 
                us to pre-fabricate each custom panel to match your exact design.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                <div className="font-bold text-2xl">Call Now:</div>
                <a href="tel:253-455-1885" className="text-xl md:text-2xl font-semibold hover:underline">
                  (253) 455-1885
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
