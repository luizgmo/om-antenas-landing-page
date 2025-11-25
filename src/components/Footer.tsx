import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="OM Antenas" className="h-16 w-auto mb-4" />
            <p className="text-secondary-foreground/80">
              Há mais de 30 anos conectando você ao melhor da tecnologia com
              qualidade e confiança.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a
                    href="tel:+5514997994111"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    (14) 99799-4111
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-secondary-foreground/80">
                    Barra Bonita - SP
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-secondary-foreground/80">
                    Segunda a Sexta: 8h às 18h
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} OM Antenas - Todos os direitos
              reservados
            </p>
            <p>Desenvolvido por Luiz Gustavo Monico</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
