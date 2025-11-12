import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Portfolio = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('portfolio.projects.solar.title'),
      category: t('portfolio.projects.solar.category'),
      capacity: t('portfolio.projects.solar.capacity'),
      location: t('portfolio.projects.solar.location'),
      description: t('portfolio.projects.solar.description'),
      image: project1,
    },
    {
      title: t('portfolio.projects.industrial.title'),
      category: t('portfolio.projects.industrial.category'),
      capacity: t('portfolio.projects.industrial.capacity'),
      location: t('portfolio.projects.industrial.location'),
      description: t('portfolio.projects.industrial.description'),
      image: project2,
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('portfolio.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-strong transition-smooth border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-secondary text-secondary-foreground text-xs sm:text-sm">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="border-white text-white text-xs sm:text-sm">
                        {project.capacity}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm">📍 {project.location}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 sm:p-6 bg-card">
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
