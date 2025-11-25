import { motion } from "framer-motion";
import { Zap, Users, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Atendimento rápido e eficiente",
    description: "Priorizamos seu tempo com soluções ágeis e profissionais",
  },
  {
    icon: Users,
    title: "Equipe técnica especializada",
    description: "Profissionais capacitados e experientes ao seu serviço",
  },
  {
    icon: Shield,
    title: "Serviços certificados e seguros",
    description: "Garantia de qualidade em todos os nossos trabalhos",
  },
  {
    icon: Award,
    title: "Mais de 30 anos de experiência",
    description: "Tradição e confiança no mercado de Barra Bonita e região",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Por que escolher a OM Antenas?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nos torna referência em instalação e manutenção de equipamentos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
