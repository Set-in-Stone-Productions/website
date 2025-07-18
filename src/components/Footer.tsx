import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Set in Stone Productions</h3>
            <p className="text-muted-foreground mb-4">
              Where vision meets execution in the art of filmmaking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/documents/terms-of-service.pdf" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/documents/privacy-policy.pdf" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/documents/submission-agreement.pdf" className="text-muted-foreground hover:text-primary transition-colors">Submission Agreement</a></li>
              <li><a href="/documents/consent-form.pdf" className="text-muted-foreground hover:text-primary transition-colors">Consent Form</a></li>
              <li><a href="/documents/production-agreement.pdf" className="text-muted-foreground hover:text-primary transition-colors">Production Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Set in Stone Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}