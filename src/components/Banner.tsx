import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
// Using image from public directory
const bannerImage = "/banner.jpg";

interface BannerProps {
  onClose: () => void;
}

const Banner = ({ onClose }: BannerProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerClosed = localStorage.getItem("bannerClosed");
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, [onClose]);

  const handleBannerClick = () => {
    window.open('https://pmsuryaghar.gov.in/', '_blank');
    handleClose();
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsVisible(false);
    localStorage.setItem("bannerClosed", "true");
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={handleBannerClick}>
      <div className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto">
        <img
          src={bannerImage}
          alt="Banner"
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleBannerClick}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute -top-4 -right-4 z-10 h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/70 text-white border border-white/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
