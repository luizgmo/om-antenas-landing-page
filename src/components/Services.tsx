import { motion } from "framer-motion";
import { Wrench, Zap, Tv, Settings } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Wrench,
    title: "Serviços Gerais",
    description: "Instalações, reparos e manutenção em residências e empresas.",
  },
  {
    icon: Zap,
    title: "Serviços Elétricos",
    description: "Instalações e revisões elétricas com total segurança e eficiência.",
  },
  {
    icon: Tv,
    title: "Antenas e Receptores",
    description: "Instalação e configuração de antenas, receptores e TVs.",
  },
  {
    icon: Settings,
    title: "Manutenção Técnica",
    description: "Diagnóstico e soluções rápidas para falhas e mau funcionamento.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Nossos Serviços</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em instalação e manutenção de equipamentos tecnológicos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold"
          >
            <a href="https://wa.me/5514997994111" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento gratuito
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
