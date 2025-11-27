import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();
  
  const certifications = [
    { id: 'ugvcl', name: 'UGVCL', image: '/src/assets/certifications/ugvcl.jpg' },
    { id: 'pgvcl', name: 'PGVCL', image: '/src/assets/certifications/pgvcl.png' },
    { id: 'mgvcl', name: 'MGVCL', image: '/src/assets/certifications/mgvcl.png' },
    { id: 'guvnl', name: 'GUVNL', image: '/src/assets/certifications/guvnl.png' },
    { id: 'dgvcl', name: 'DGVCL', image: '/src/assets/certifications/dgvcl.png' },
    { id: 'iso', name: 'ISO 9001:2015', image: '/src/assets/certifications/iso.jpg' },
    { id: 'msme', name: 'MSME', image: '/src/assets/certifications/msme.png' },
    { id: 'makeinindia', name: 'Make in India', image: '/src/assets/certifications/makeinindia.webp' },
    { id: 'nise', name: 'NISE', image: '/src/assets/certifications/nise.jpg' },
    { id: 'nsic', name: 'NSIC', image: '/src/assets/certifications/nsic.png' },
    { id: 'startupindia', name: 'Startup India', image: '/src/assets/certifications/startupindia.png' },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('certifications.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center h-full"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-2">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-center text-gray-700 mt-2">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
