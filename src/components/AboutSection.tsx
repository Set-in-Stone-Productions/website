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
      bio: "Filmmaker and founder of Set in Stone Productions with extensive experience in narrative and commercial directing."
    },
    {
      name: "Justin Ferrante",
      role: "Creative Director",
      image: teamMember2,
      bio: "Creative director specializing in visual storytelling and campaign development for independent films."
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
      bio: "Developer focused on creating custom software solutions and digital platforms for film production."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            MEET THE TEAM
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-secondary text-secondary-foreground rounded-lg overflow-hidden shadow-lg hover-scale"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}