import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContactProps {
  onOpenContact?: () => void;
}

const Contact = ({ onOpenContact }: ContactProps) => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      content: t("contact.info.phone.value"),
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      content: t("contact.info.email.value"),
      href: "mailto:info@krishivainnovatives.com",
    },
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      content: t("contact.info.address.value"),
      href: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 gradient-subtle relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t("contact.title")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Phone and Email in a 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactInfo.slice(0, 2).map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card className="h-full p-6 shadow-soft hover:shadow-strong transition-smooth group cursor-pointer border-border/40 bg-card/80 backdrop-blur-sm hover:bg-card/90">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
                
                {/* Address card - full width */}
                {contactInfo.slice(2).map((info, index) => (
                  <a
                    key={index + 2}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full p-6 shadow-soft hover:shadow-strong transition-smooth group cursor-pointer border-border/40 bg-card/80 backdrop-blur-sm hover:bg-card/90">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="p-6 bg-gradient-hero text-gray-900 shadow-strong border-0">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-heading font-semibold text-lg">
                    {t("contact.hours.title")}
                  </h4>
                </div>
                <div className="space-y-3 text-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      {t("contact.hours.weekdays")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      {t("contact.hours.saturday")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{t("contact.hours.sunday")}</span>
                  </div>
                </div>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="text-center">
                  <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-xl mb-2">
                    {t("contact.cta.title")}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    {t("contact.cta.description")}
                  </p>
                  <Button
                    onClick={onOpenContact}
                    size="lg"
                    className="w-full group"
                  >
                    {t("contact.cta.button")}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Map */}
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-strong">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.06392701397823!2d73.16511245182285!3d22.28151000712347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc6113a099827%3A0x15f3ce7ccba7e3c5!2sSanket%20Heights%2C%20Akshar%20Chowk%2C%20Muj%20Mahuda%2C%20Vadodara%2C%20Gujarat%20390007!5e0!3m2!1sen!2sin!4v1764183334450!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
