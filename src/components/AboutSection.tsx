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
          <h2 className="text-3xl font-bold mb-4 text-white">
            Meet the Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-black/60 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-200 animate-fade-up group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-200 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}