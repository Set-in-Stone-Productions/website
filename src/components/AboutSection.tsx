import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

export function AboutSection() {
  const teamMembers = [
    {
      name: "Jake Bernstein",
      role: "Founder, Creative Director",
      image: teamMember1,
      bio: "Filmmaker and writer with extensive experience from micro-budget productions to established IPs. Jake founded Set in Stone Productions to uplift overlooked filmmakers and to support projects that would otherwise go unmade because nothing is truly \"set in stone,\" nothing is written unless you make it so."
    },
    {
      name: "Justin Ferrante",
      role: "Creative Director",
      image: teamMember2,
      bio: "Creative Director and Novelist specializing in expertly crafted writing with a strong passion for storytelling."
    },
    {
      name: "Zach Leith",
      role: "FX Lead",
      image: teamMember3,
      bio: "Visual effects specialist with expertise in practical and digital effects for independent productions."
    },
    {
      name: "Alden Bernstein",
      role: "Senior Software Developer",
      image: teamMember4,
      bio: "Web developer and full-stack software engineer."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* About Statement Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            About Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Established in 2025, Set in Stone Productions was created by and for the next generation of filmmakers. Our company is devoted to amplifying independent voices and letting them shout their truth, to uproar art for&nbsp;art's&nbsp;sake.
            </p>
            <p>
              Set in Stone Productions champions Gen Z who face a quantum leap in entertainment the likes of which will dwarf the invention of sound in movies. In an age where the specter of AI and shrinking opportunities are ever-present, we hold that no change, no matter how revolutionary is&nbsp;insurmountable.
            </p>
            <p>
              Our work challenges the next chapter of filmmaking to be the dawn of a new golden age of independent&nbsp;film.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Meet the Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`bg-card/60 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl hover:shadow-primary/20 border border-border hover:border-primary/30 transition-all duration-200 animate-fade-up group relative flex flex-col lg:flex-row film-burn ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
              
              {/* Image Section */}
              <div className="relative lg:w-1/2">
                <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-xl mb-6">{member.role}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}