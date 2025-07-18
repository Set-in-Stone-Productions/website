import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            GET IN TOUCH
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">jake@setinstoneproductions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">Contact via email for phone number</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Office</h4>
                  <p className="text-muted-foreground">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-lg p-8 shadow-lg animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-secondary/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={6}
                  className="bg-secondary/50 border-border"
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