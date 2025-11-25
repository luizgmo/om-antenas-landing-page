import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    city: "Barra Bonita",
    rating: 5,
    text: "Excelente serviço! Instalaram minha antena rapidamente e o sinal ficou perfeito. Equipe muito profissional e atenciosa.",
  },
  {
    name: "Maria Santos",
    city: "Igaraçu do Tietê",
    rating: 5,
    text: "Recomendo! Resolveram meu problema elétrico com eficiência e preço justo. Já é a segunda vez que contrato.",
  },
  {
    name: "Carlos Oliveira",
    city: "Barra Bonita",
    rating: 5,
    text: "Atendimento impecável desde o primeiro contato. A instalação da TV foi rápida e ficou tudo organizado. Muito satisfeito!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira depoimentos reais de quem já confiou em nosso trabalho
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg shadow-xl p-8 md:p-12"
          >
            <div className="flex gap-1 mb-4 justify-center">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ),
              )}
            </div>
            <p className="text-foreground text-lg md:text-xl mb-6 text-center italic">
              "{testimonials[current].text}"
            </p>
            <div className="text-center">
              <p className="font-bold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[current].city}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
