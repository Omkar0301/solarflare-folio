import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { faqData } from "@/lib/faqData";
import heroSolar from "@/assets/hero-solar.jpg";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="py-16 sm:py-20 relative bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              <span className="inline-block">{t("faq.title").split(' ')[0]}</span>{' '}
              <span className="text-primary">{t("faq.title").split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("faq.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-soft bg-white/90 dark:bg-card/90 backdrop-blur-sm animate-slide-up border border-white/20 dark:border-border/30 hover:border-primary/30 transition-smooth">
              <Tabs defaultValue={faqData.tabs[0].id} className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto bg-background/80 dark:bg-card/50 backdrop-blur-sm">
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
              <div className="relative w-full h-full min-h-[400px] hidden lg:block">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={heroSolar}
                    alt="Rooftop solar installation by Krishiva Innovatives"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/50 to-primary/30" />
                </div>
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
