import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.error'),
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.error'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.form.success'),
        description: t('contact.form.success'),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
            {/* Contact Form */}
            <Card className="md:col-span-2 p-6 md:p-8 shadow-soft border-border/40 bg-card/90 backdrop-blur-sm animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t('contact.form.name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t('contact.form.email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      {t('contact.form.phone')} *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium mb-2"
                    >
                      {t('contact.form.location')}
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={t('contact.form.locationPlaceholder')}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('contact.form.message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow text-base sm:text-lg py-5 sm:py-6 group"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </form>
            </Card>

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
