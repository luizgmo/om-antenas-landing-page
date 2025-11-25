import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-secondary rounded-lg overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <div className="text-secondary-foreground text-center p-8">
                <h3 className="text-3xl font-bold mb-4">OM Antenas</h3>
                <p className="text-lg">30+ Anos de Experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">Sobre a OM Antenas</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Há mais de 30 anos conectando você ao melhor da tecnologia. Somos especialistas em
              instalação de antenas, TVs, receptores e serviços relacionados. Atendemos Barra Bonita e
              região com agilidade, confiança e qualidade.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tradição e Confiança</h4>
                  <p className="text-muted-foreground">
                    Mais de três décadas atendendo com excelência
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Atendimento Regional</h4>
                  <p className="text-muted-foreground">
                    Cobertura completa em Barra Bonita e cidades vizinhas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Equipe Especializada</h4>
                  <p className="text-muted-foreground">
                    Profissionais capacitados e sempre atualizados
                  </p>
                </div>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              <a href="https://wa.me/5514997994111" target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
