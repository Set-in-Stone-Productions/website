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
          <h2 className="text-3xl font-bold mb-4 text-white">
            Support Our Vision
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed mt-6">
            Join our community of supporters and help bring independent films to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`p-8 rounded-lg backdrop-blur-md shadow-2xl transition-all duration-200 animate-fade-up relative overflow-hidden group ${
                tier.highlighted 
                  ? "bg-black/70 text-white border-2 border-orange-400 hover:border-orange-300 shadow-orange-500/40 hover:shadow-orange-500/60" 
                  : "bg-black/60 text-white border border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/20"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className={`p-4 rounded-full inline-flex items-center justify-center mb-6 ${
                tier.highlighted ? "bg-orange-500" : "bg-orange-500"
              }`}>
                <tier.icon size={24} className={tier.highlighted ? "text-white" : "text-white"} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold mb-6">{tier.price}</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className={`mr-2 ${tier.highlighted ? "text-white" : "text-orange-400"}`}>
                      •
                    </span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={tier.buttonLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full transition-all duration-200 hover:translate-y-[-1px] ${
                    tier.highlighted 
                      ? "bg-orange-500 text-white hover:bg-orange-400 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
                      : "bg-orange-500 text-white hover:bg-orange-400 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-200 mb-6">
            Other ways to support our work
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.indiegogo.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-orange-500/50 text-white hover:bg-orange-500/10 hover:border-orange-400/70 hover:shadow-lg hover:shadow-orange-500/20 shadow-md backdrop-blur-sm bg-black/20 transition-all duration-200 ease-out hover:translate-y-[-1px]">
                Support on Indiegogo
              </Button>
            </a>
            <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-orange-500/50 text-white hover:bg-orange-500/10 hover:border-orange-400/70 hover:shadow-lg hover:shadow-orange-500/20 shadow-md backdrop-blur-sm bg-black/20 transition-all duration-200 ease-out hover:translate-y-[-1px]">
                One-time Donation
              </Button>
            </a>
            <Link to="/submission-form">
              <Button variant="outline" className="border-orange-500/50 text-white hover:bg-orange-500/10 hover:border-orange-400/70 hover:shadow-lg hover:shadow-orange-500/20 shadow-md backdrop-blur-sm bg-black/20 transition-all duration-200 ease-out hover:translate-y-[-1px]">
                Submit Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}