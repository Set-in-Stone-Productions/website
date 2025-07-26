import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 shadow-2xl hover:shadow-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-200 animate-fade-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                  <p className="text-gray-300">contact@setinstoneproductions.com</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/70 backdrop-blur-md rounded-lg p-8 shadow-2xl hover:shadow-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-200 animate-fade-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
            <h3 className="text-xl font-bold mb-6 text-white">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-black/40 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-black/40 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-black/40 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={6}
                  className="bg-black/40 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/80 hover-scale"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}