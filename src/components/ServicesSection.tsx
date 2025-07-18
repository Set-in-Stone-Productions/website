import { 
  Film,
  Video, 
  LightbulbIcon, 
  Edit, 
  FastForward, 
  Radio, 
  Trophy,
  BarChart4
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Pre-Production Consulting",
      icon: LightbulbIcon,
      description: "We help refine your vision from concept to script, storyboarding, and planning every aspect of your production.",
      items: [
        "Concept Development - Offer script consulting, coverage, punch-ups, treatments, creation of slick and professional pitch decks",
        "Creative Services - Facilitate Casting Calls, Art Direction, creation of Mood Boards",
        "Budgeting & Scheduling - Line Producing, Production Budgeting, Script Breakdowns, Shooting Schedule Development",
        "Logistics & Planning - Crew Hiring, Equipment/Rental Coordination, Call sheets and Production Planning"
      ]
    },
    {
      title: "Production",
      icon: Video,
      description: "Full-service production with top-tier equipment and experienced crew to bring your vision to life.",
      items: [
        "Full-Service Production Crew - Directors, DP's, Gaffers, Grips, etc.",
        "On-Set Management - Provide Production Management, AD's, and Script Supervisors, Set Construction / Art Department Services",
        "Audio & Video Capture - High Quality Sound Recording (Boom, Lav, Field Recorders), Multi-Camera Set-Ups"
      ]
    },
    {
      title: "Post-Production",
      icon: Edit,
      description: "Work with our talent team of video, sound, and music editors.",
      items: [
        "Editing - Video Editing, Audio Editing, Color Grading",
        "Motion Graphics & VFX - 2D & 3D Animations, Visual Effects Clean-Up and Enhancements",
        "Music - Original Score Composition, Music Licensing/Supervision"
      ]
    },
    {
      title: "Distribution & Delivery Services",
      icon: BarChart4,
      description: "Strategic guidance to help your project find its audience and maximize its impact.",
      items: [
        "Digital Delivery - Master File Creation, Formatting for Streaming, DCP (Digital Cinema Package) Creation",
        "Marketing Materials - Behind the Scenes Content, Trailers, Promos, Teasers, Sizzle Reels"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            OUR SERVICES
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From full-scale production to post-production wizardry, we offer comprehensive services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="p-8 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary text-primary-foreground mr-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Awards & Recognition - Hidden for now */}
        <div className="hidden mt-24 text-center">
          <div className="inline-flex items-center mb-8">
            <Trophy className="text-primary mr-3" size={32} />
            <h3 className="text-2xl font-bold">Awards & Recognition</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Sundance Official Selection", "SXSW Audience Award", "Cannes Film Festival", "Emmy Nominated"].map((award) => (
              <div 
                key={award} 
                className="py-3 px-6 rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}