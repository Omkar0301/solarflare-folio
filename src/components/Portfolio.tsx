import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern Residential Installation',
      category: 'Residential',
      capacity: '10 kW System',
      location: 'Los Angeles, CA',
      description: 'Complete solar panel installation for a luxury home, generating 100% of energy needs.',
      image: project1,
    },
    {
      title: 'Commercial Office Complex',
      category: 'Commercial',
      capacity: '50 kW System',
      location: 'San Diego, CA',
      description: 'Large-scale solar array for corporate office building, reducing energy costs by 75%.',
      image: project2,
    },
    {
      title: 'Eco-Friendly Villa',
      category: 'Residential',
      capacity: '8 kW System',
      location: 'San Francisco, CA',
      description: 'Sustainable energy solution integrated with smart home technology.',
      image: project1,
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      capacity: '100 kW System',
      location: 'Phoenix, AZ',
      description: 'Massive solar installation powering manufacturing operations.',
      image: project2,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our successful solar installations across residential, commercial, and industrial properties
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-strong transition-smooth border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-secondary text-secondary-foreground">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="border-white text-white">
                        {project.capacity}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm">📍 {project.location}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
