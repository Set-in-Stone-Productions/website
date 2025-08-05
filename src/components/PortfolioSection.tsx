import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      description: "A psychological thriller exploring the dark side of daily habits and obsessive behavior.",
      images: [portfolio1, portfolio2]
    },
    {
      id: 2,
      title: "Balls of Steel",
      date: "2024",
      category: "documentary",
      credits: "Director: Jake Bernstein",
      description: "An inspiring documentary following competitive athletes pushing their physical limits.",
      images: [portfolio3, portfolio4]
    },
    {
      id: 3,
      title: "CRAIG LIKES BADMITTEN",
      date: "2024",
      category: "narrative",
      credits: "Director: Alden Bernstein",
      description: "A heartwarming comedy about finding passion in unexpected places.",
      images: [portfolio5, portfolio6]
    },
    {
      id: 4,
      title: "Ex Oblivione",
      date: "2022",
      category: "narrative",
      credits: "Director: Jake Bernstein",
      description: "An atmospheric horror film based on the works of H.P. Lovecraft.",
      images: [portfolio1, portfolio3, portfolio5]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Our Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
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

        {/* Projects List - Vertical Layout */}
        <div className="max-w-7xl mx-auto space-y-24">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-card/60 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl border border-border hover:border-primary/30 animate-fade-up film-burn transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Carousel Section */}
              <div className="lg:w-1/2">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-video h-full">
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${imgIndex + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.images.length > 1 && (
                    <>
                      <CarouselPrevious className="bg-primary/80 text-primary-foreground hover:bg-primary border-none w-10 h-10 left-4" />
                      <CarouselNext className="bg-primary/80 text-primary-foreground hover:bg-primary border-none w-10 h-10 right-4" />
                    </>
                  )}
                </Carousel>
              </div>

              {/* Project Details Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary text-lg font-medium">{project.date}</span>
                    <span className="text-muted-foreground capitalize text-sm px-3 py-1 bg-muted/20 rounded-full">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-lg">{project.credits}</p>
                  
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium inline-block w-fit">
                    View Full Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}