import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.value'),
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.value'),
      href: "mailto:info@krishivainnovatives.com",
    },
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      content: t('contact.info.address.value'),
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 gradient-subtle relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Information */}
            <div
              className="space-y-4 md:space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-4 sm:p-6 shadow-soft hover:shadow-strong transition-smooth group cursor-pointer border-border/40 bg-card/80 backdrop-blur-sm">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-smooth">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm sm:text-base break-words">{info.content}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}

              {/* Business Hours */}
              <Card className="p-4 sm:p-6 bg-gradient-hero text-gray-900 shadow-strong border-0">
                <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                  {t('contact.hours.title')}
                </h4>
                <div className="space-y-2 text-gray-800 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays').split(':')[0]}</span>
                    <span className="font-semibold">{t('contact.hours.weekdays').split(':')[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday').split(':')[0]}</span>
                    <span className="font-semibold">{t('contact.hours.saturday').split(':')[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday').split(':')[0]}</span>
                    <span className="font-semibold">{t('contact.hours.sunday').split(':')[1]}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
