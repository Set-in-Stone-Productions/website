import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, Award } from "lucide-react";

export function DonateSection() {
  const tiers = [
    {
      name: "Member",
      price: "$5/mo",
      icon: Play,
      features: [
        "Exclusive Tutorials",
        "Behind The Scenes",
        "Full Channel Access"
      ],
      buttonText: "Join Patreon",
      buttonLink: "https://www.patreon.com/setinstoneproductions"
    },
    {
      name: "A-List",
      price: "Total of $100",
      icon: Star,
      features: [
        "All Member Benefits",
        "Test Screenings",
        "Free Physical Media and Merchandise",
        "Special Thanks Credit"
      ],
      buttonText: "Become A-List",
      buttonLink: "https://www.patreon.com/setinstoneproductions",
      highlighted: true
    },
    {
      name: "VIP",
      price: "Single Donation over $1000",
      icon: Award,
      features: [
        "All A-List Benefits",
        "Producer Credit",
        "Private Screenings"
      ],
      buttonText: "Go VIP",
      buttonLink: "https://www.patreon.com/setinstoneproductions"
    }
  ];

  return (
    <section id="donate" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            SUPPORT OUR VISION
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of supporters and help bring independent films to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={tier.name}
              className={`p-8 animate-fade-up ${
                tier.highlighted 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card hover:bg-background/90"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 rounded-full inline-flex items-center justify-center mb-6 ${
                tier.highlighted ? "bg-primary-foreground" : "bg-primary"
              }`}>
                <tier.icon size={24} className={tier.highlighted ? "text-primary" : "text-primary-foreground"} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold mb-6">{tier.price}</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className={`mr-2 ${tier.highlighted ? "text-primary-foreground" : "text-primary"}`}>
                      •
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={tier.buttonLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full hover-scale ${
                    tier.highlighted 
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/80"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Other ways to support our work
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.indiegogo.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover-scale">
                Support on Indiegogo
              </Button>
            </a>
            <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover-scale">
                One-time Donation
              </Button>
            </a>
            <Link to="/submission-form">
              <Button variant="outline" className="hover-scale">
                Submit Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}