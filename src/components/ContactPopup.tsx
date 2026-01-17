import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
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

  // 🔥 Google Ads Conversion (Lead)
  const fireGoogleAdsConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17821891070/N8ClCILHq-cbEP7zkbJC",
        transaction_id: Date.now().toString(), // prevents duplicate conversions
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xanrljel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: t("contact.form.success"),
        description: t("contact.form.success"),
      });

      // ✅ Google Ads Lead Conversion
      fireGoogleAdsConversion();

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });

      setIsSubmitting(false);

      // Close popup after successful submission
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error(error);
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-card border border-border/40 rounded-2xl shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-hero border-b border-border/20 p-6 flex items-center justify-between backdrop-blur-sm">
            <div>
              <h3 className="font-heading font-bold text-2xl text-gray-900">
                {t("contact.title")}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                {t("contact.description")}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-smooth hover:rotate-90"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.namePlaceholder")}
                required
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.emailPlaceholder")}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.form.phonePlaceholder")}
                required
              />
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder={t("contact.form.locationPlaceholder")}
              />
            </div>

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.form.messagePlaceholder")}
              required
              rows={5}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground text-lg py-6 group"
            >
              {isSubmitting
                ? t("contact.form.sending")
                : t("contact.form.submit")}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
