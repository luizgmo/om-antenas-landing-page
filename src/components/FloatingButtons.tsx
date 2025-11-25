import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Button
        asChild
        size="icon"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-accent animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <a
          href="https://wa.me/5514997994111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="secondary"
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
