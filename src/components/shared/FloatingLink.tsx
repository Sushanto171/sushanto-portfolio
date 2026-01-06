"use client";

import { Button } from "@/components/ui/button";
import { whatsAppUrl } from "@/constant/whatsappLink";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Linkedin, Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
import Whatsapp from "../ui/Whatsapp";

export default function FloatingLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const links = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/sushantokumar", label: "LinkedIn" },
    { icon: <ExternalLink size={20} />, url: "https://sushantokumar.vercel.app", label: "Portfolio" },
    { icon: <Whatsapp size={20} />, url: whatsAppUrl, label: "WhatsApp" },
  ];

  return (
    <motion.div
      className="fixed bottom-8 right-8 flex flex-col justify-center items-center gap-2 z-50"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      <AnimatePresence >
        {isOpen &&
          links.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 300 }}
            >
                <Button
                variant="outline"
                className="p-2 rounded-full border hover:border-primary hover:bg-primary/10 hover:text-primary w-12 h-12"
              
              >
                {link.icon}
              </Button>
            </motion.a>
          ))}
      </AnimatePresence>

      <Button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className={`p-3 rounded-full w-14 h-14 shadow-lg
          transition-all duration-300
          ${isOpen ? "bg-primary shadow-xl" : "bg-slate-800 text-slate-400"}
          hover:bg-primary/90 hover:text-white
        `}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </Button>
    </motion.div>
  );
}
