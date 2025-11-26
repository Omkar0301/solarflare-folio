import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { faqData } from "@/lib/faqData";
import heroSolar from "@/assets/hero-solar.jpg";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-16 sm:py-20 gradient-subtle wave-divider">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t("faq.title")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("faq.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-soft bg-card/90 backdrop-blur-sm animate-slide-up">
              <Tabs defaultValue={faqData.tabs[0].id} className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto">
                  {faqData.tabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id} className="flex-shrink-0">
                      {t(tab.titleKey)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {faqData.tabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {tab.faqs.map((item, index) => (
                        <AccordionItem key={item.questionKey} value={`${tab.id}-${index}`}>
                          <AccordionTrigger className="text-left text-base sm:text-lg">
                            {t(item.questionKey)}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {t(item.answerKey)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>

            <div className="space-y-4 lg:space-y-6 animate-scale-in">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-strong bg-gradient-hero">
                <img
                  src={heroSolar}
                  alt="Rooftop solar installation by Krishiva Innovatives"
                  className="w-full h-full object-cover max-h-[360px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              <Card className="p-4 sm:p-6 bg-card/90 backdrop-blur-sm shadow-soft">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {t("faq.cta.title")}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {t("faq.cta.body")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("faq.cta.note")}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
