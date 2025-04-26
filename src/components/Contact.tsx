
import React from 'react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h5 className="text-tech-dark font-medium mb-2">Get Started</h5>
          <h2 className="mb-4">Book Your Consultation</h2>
          <p className="text-muted-foreground">
            Ready to enhance your property with a custom fence? Reach out to us today to discuss your needs and get a free estimate.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="bg-card rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                >
                  <option value="" disabled selected>Select a service</option>
                  <option value="residential">Residential Fence</option>
                  <option value="commercial">Commercial Fence</option>
                  <option value="custom">Custom Design</option>
                  <option value="repair">Fence Repair</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-wood"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bg-accent rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <p className="mb-2">Servicing the greater Seattle Area including King and Pierce Counties</p>
              
              <div className="h-64 bg-muted rounded-md mt-6 flex items-center justify-center">
                <p className="text-muted-foreground">Map of Seattle service area</p>
              </div>
            </div>
            
            <div className="bg-accent rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:253-455-1885" className="text-muted-foreground hover:text-wood">(253) 455-1885</a>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@fencegenius.com" className="text-muted-foreground hover:text-wood">info@myfence.com</a>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-tech-dark mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
