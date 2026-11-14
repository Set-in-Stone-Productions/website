import { useState } from 'react';
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Balls of Steel images
import ballsOfSteel1 from "@/assets/Balls of Steel/balls-of-steel-1.webp";
import ballsOfSteel2 from "@/assets/Balls of Steel/balls-of-steel-2.webp";
import ballsOfSteel3 from "@/assets/Balls of Steel/balls-of-steel-3.webp";
import ballsOfSteel4 from "@/assets/Balls of Steel/balls-of-steel-4.webp";
import ballsOfSteel5 from "@/assets/Balls of Steel/balls-of-steel-5.webp";
import ballsOfSteel6 from "@/assets/Balls of Steel/balls-of-steel-6.webp";
import ballsOfSteel7 from "@/assets/Balls of Steel/balls-of-steel-7.webp";
import ballsOfSteel8 from "@/assets/Balls of Steel/balls-of-steel-8.webp";
import ballsOfSteel9 from "@/assets/Balls of Steel/balls-of-steel-9.webp";

// Ex Oblivione images
import exOblivione1 from "@/assets/Ex Oblivione/ex-oblivione-1.webp";
import exOblivione2 from "@/assets/Ex Oblivione/ex-oblivione-2.webp";
import exOblivione3 from "@/assets/Ex Oblivione/ex-oblivione-3.webp";
import exOblivione4 from "@/assets/Ex Oblivione/ex-oblivione-4.webp";
import exOblivione5 from "@/assets/Ex Oblivione/ex-oblivione-5.webp";
import exOblivione6 from "@/assets/Ex Oblivione/ex-oblivione-6.webp";
import exOblivione7 from "@/assets/Ex Oblivione/ex-oblivione-7.webp";
import exOblivione8 from "@/assets/Ex Oblivione/ex-oblivione-8.webp";

// Routine images
import routine1 from "@/assets/Routine/routine-1.webp";
import routine2 from "@/assets/Routine/routine-2.webp";
import routine3 from "@/assets/Routine/routine-3.webp";
import routine4 from "@/assets/Routine/routine-4.webp";

// Craig Likes Badmitten images
import craigLikesBadmitten1 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-1.webp";
import craigLikesBadmitten2 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-2.webp";
import craigLikesBadmitten3 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-3.webp";
import craigLikesBadmitten4 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-4.webp";
import craigLikesBadmitten5 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-5.webp";
import craigLikesBadmitten6 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-6.webp";
import craigLikesBadmitten7 from "@/assets/CRAIG LIKES BADMITTEN/craig-likes-badmitten-7.webp";

// Tunnel Rat images
import tunnelRat1 from "@/assets/Tunnel Rat/1.webp";
import tunnelRat2 from "@/assets/Tunnel Rat/2.webp";
import tunnelRat3 from "@/assets/Tunnel Rat/3.webp";
import tunnelRat4 from "@/assets/Tunnel Rat/4.webp";
import tunnelRat5 from "@/assets/Tunnel Rat/5.webp";

// STUCK images
import stuck1 from "@/assets/STUCK/1.webp";
import stuck2 from "@/assets/STUCK/2.webp";
import stuck3 from "@/assets/STUCK/3.webp";
import stuck4 from "@/assets/STUCK/4.webp";
import stuck5 from "@/assets/STUCK/5.webp";
import stuck6 from "@/assets/STUCK/6.webp";

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "narrative", label: "Narrative" },
    { id: "documentary", label: "Documentary" },
    { id: "commercial", label: "Commercial" },
    { id: "horror", label: "Horror" },
    { id: "thriller", label: "Survival / Thriller" },
  ];

  const projects = [
    {
      id: 5,
      title: "Tunnel Rat",
      date: "In Production",
      category: "horror",
      credits: "Director: Jake Bernstein",
      description: "Set at the height of the Vietnam War, a soldier braves an underworld of tunnels where every inch of darkness, every timid crawl forward, could hold certain death.",
      images: [tunnelRat1, tunnelRat2, tunnelRat3, tunnelRat4, tunnelRat5],
      link: "https://youtu.be/d86aRm9YFFI",
      linkLabel: "Watch Trailer",
    },
    {
      id: 6,
      title: "STUCK",
      date: "Coming Soon",
      category: "thriller",
      credits: "Director: Justin Ferrante",
      description: (
        <>
          A heartbroken vlogger uses cave diving as an escape—until he’s trapped underground and forced to face what he’s been running from.
          <br /><br />
          <span className="text-primary font-medium">Independent Shorts Awards International Film Festival Semi-Finalist</span>
        </>
      ),
      images: [stuck1, stuck2, stuck3, stuck4, stuck5, stuck6],
      link: "https://youtu.be/XSQDX1poNmE",
      linkLabel: "Watch Trailer",
    },
    {
      id: 1,
      title: "ROUTINE",
      date: "2025",
      category: "narrative",
      credits: "Director: Jake Bernstein",
      description: (
        <>
          A young man slogs through his workweek amid a mental health crisis.
          <br /><br />
          <span className="text-primary font-medium">Nominated for best short film at Glendale International Film Festival</span>
        </>
      ),
      images: [routine1, routine2, routine3, routine4]
    },
    {
      id: 2,
      title: "Balls of Steel",
      date: "2024",
      category: "documentary",
      credits: "Director: Jake Bernstein",
      description: "A short documentary following an underwater welder and what comes with the most dangerous job in the world.",
      images: [ballsOfSteel1, ballsOfSteel2, ballsOfSteel3, ballsOfSteel4, ballsOfSteel5, ballsOfSteel6, ballsOfSteel7, ballsOfSteel8, ballsOfSteel9],
      link: "https://www.youtube.com/watch?v=5KQyB97yuno",
      linkLabel: "View Full Project",
    },
    {
      id: 3,
      title: "CRAIG LIKES BADMITTEN",
      date: "2024",
      category: "narrative",
      credits: "Director: Alden Bernstein",
      description: "A heartwarming comedy about finding passion in unexpected places.",
      images: [craigLikesBadmitten1, craigLikesBadmitten3, craigLikesBadmitten4, craigLikesBadmitten5, craigLikesBadmitten6, craigLikesBadmitten2, craigLikesBadmitten7],
      link: "https://www.youtube.com/watch?v=JYK-08vnL8Y",
      linkLabel: "View Full Project",
    },
    {
      id: 4,
      title: "Ex Oblivione",
      date: "2022",
      category: "narrative",
      credits: "Director: Jake Bernstein",
      description: "An atmospheric horror film based on the works of H.P. Lovecraft.",
      images: [exOblivione1, exOblivione2, exOblivione3, exOblivione4, exOblivione5, exOblivione6, exOblivione7, exOblivione8],
      link: "https://www.youtube.com/watch?v=fZiMCkPndTk",
      linkLabel: "View Full Project",
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
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.id
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
              className={`bg-card/60 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl border border-border hover:border-primary/30 animate-fade-up film-burn transition-all duration-300 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
            >
              {/* Image Carousel Section */}
              <div className="lg:w-1/2">
                <Carousel
                  className="w-full h-full carousel-fade"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Fade({
                      active: true,
                      breakpoints: {}
                    }),
                    Autoplay({
                      delay: 6000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                >
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

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium inline-block w-fit"
                    >
                      {project.linkLabel || "View Full Project"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}