import { useState } from 'react';
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "narrative", label: "Narrative" },
    { id: "documentary", label: "Documentary" },
    { id: "commercial", label: "Commercial" },
  ];

  const projects = [
    {
      id: 1,
      title: "ROUTINE",
      date: "2025",
      category: "narrative",
      credits: "Director: Jake Bernstein",
      image: portfolio1
    },
    {
      id: 2,
      title: "Balls of Steel",
      date: "2024",
      category: "documentary",
      credits: "Director: Jake Bernstein",
      image: portfolio2
    },
    {
      id: 3,
      title: "CRAIG LIKES BADMITTEN",
      date: "2024",
      category: "narrative",
      credits: "Director: Alden Bernstein",
      image: portfolio3
    },
    {
      id: 4,
      title: "Ex Oblivione",
      date: "2022",
      category: "narrative",
      credits: "Director: Jake Bernstein",
      image: portfolio4
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Our Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </div>

        {/* Filter buttons - hidden for now */}
        <div className="hidden flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black/60 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 animate-fade-up group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-orange-400">{project.date}</span>
                  <span className="text-gray-300 capitalize">{project.category}</span>
                </div>
                <p className="text-gray-200">{project.credits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}