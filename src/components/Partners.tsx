import { useTranslation } from 'react-i18next';

// Import images using Vite's import syntax
import adani from '@/assets/partners/adani.png';
import rayzon from '@/assets/partners/rayzon.jpg';
import waaree from '@/assets/partners/waaree.jpg';

// Type definition for partner data
interface Partner {
  id: string;
  name: string;
  image: string;
}

const Partners = () => {
  const { t } = useTranslation();
  
  const partners: Partner[] = [
    { 
      id: 'adani', 
      name: 'Adani', 
      image: adani 
    },
    { 
      id: 'rayzon', 
      name: 'Rayzon', 
      image: rayzon 
    },
    { 
      id: 'waaree', 
      name: 'Waaree', 
      image: waaree 
    },
  ];

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('partners.title', 'Our Global Partners')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle', 'We collaborate with industry leaders to deliver the best solar solutions')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center h-full"
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-700">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
