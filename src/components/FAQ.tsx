import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Vocês atendem fora de Barra Bonita?",
    answer:
      "Sim! Atendemos Barra Bonita e toda a região, incluindo cidades vizinhas. Entre em contato para verificar a disponibilidade na sua área.",
  },
  {
    question: "Os serviços têm garantia?",
    answer:
      "Sim, todos os nossos serviços possuem garantia. O prazo varia de acordo com o tipo de serviço realizado. Consulte-nos para mais detalhes.",
  },
  {
    question: "Posso agendar atendimento pelo WhatsApp?",
    answer:
      "Com certeza! O WhatsApp é nossa principal forma de contato. Clique no botão de WhatsApp e fale diretamente com nossa equipe para agendar.",
  },
  {
    question: "Fazem instalação em prédios?",
    answer:
      "Sim, realizamos instalações tanto em residências quanto em prédios e estabelecimentos comerciais. Temos experiência com diferentes tipos de estruturas.",
  },
  {
    question: "Quanto tempo leva uma instalação?",
    answer:
      "O tempo varia de acordo com o tipo de serviço. Instalações simples podem ser feitas em poucas horas, enquanto trabalhos mais complexos podem levar um dia. Fazemos uma avaliação prévia para dar um prazo exato.",
  },
];

const FAQ = () => {
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
          <h2 className="text-4xl font-bold mb-4 text-foreground">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
