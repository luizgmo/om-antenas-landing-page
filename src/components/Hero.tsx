import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, complete o formulário antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    const message = `Olá! Meu nome é ${formData.name}, telefone ${formData.phone}. Gostaria de solicitar: ${formData.service}`;
    window.open(`https://wa.me/5514997994111?text=${encodeURIComponent(message)}`, "_blank");
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Aguarde um momento...",
    });
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Conectando você ao melhor da tecnologia há mais de 30 anos.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Especialistas em instalação de antenas, TVs, receptores e serviços elétricos em Barra Bonita e região.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold"
            >
              <a href="https://wa.me/5514997994111" target="_blank" rel="noopener noreferrer">
                Fale pelo WhatsApp
              </a>
            </Button>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-trust-badge text-trust-badge-foreground p-3 rounded-full mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Atendimento rápido</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-trust-badge text-trust-badge-foreground p-3 rounded-full mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Serviço garantido</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-trust-badge text-trust-badge-foreground p-3 rounded-full mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">+30 anos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Solicite um orçamento gratuito</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: formatPhone(e.target.value) })
                  }
                  maxLength={15}
                  className="w-full"
                />
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instalação">Instalação</SelectItem>
                    <SelectItem value="Reparo">Reparo</SelectItem>
                    <SelectItem value="Manutenção">Manutenção</SelectItem>
                    <SelectItem value="Elétrica">Elétrica</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-accent" size="lg">
                Solicitar Orçamento
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
