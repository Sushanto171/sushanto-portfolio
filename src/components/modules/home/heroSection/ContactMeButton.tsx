"use client"
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function ContactMeButton() {
  const whatsappNumber = "8801791407583";
  const placeholderMessage = "Hello Sushanto, I would like to get in touch with you regarding a project.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(placeholderMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-primary/40! rounded-full hover:bg-primary hover:text-primary"
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="h-5 w-5" />
      Contact Me
    </Button>

  );
}