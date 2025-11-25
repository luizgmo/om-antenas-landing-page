import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Benefits from "./Benefits";
import About from "./About";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <About />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
  );
};

export default LandingPage;
