"use client"
import { Button } from '@/components/ui/button';
import { whatsAppUrl } from '@/constant/whatsappLink';
import { MessageCircle } from 'lucide-react';

export default function ContactMeButton() {

  const handleWhatsAppClick = () => {
    window.open(whatsAppUrl, "_blank");
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