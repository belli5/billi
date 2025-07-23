import Header from '../components/Header/Header';
import Hero from '../components/BannerPrincipal/bannerPrincipal';
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Motivos from '../components/Motivos/reason'
import Simulate from '../components/Simulate/simulate'
import Vemserbilli from '../components/VemSerBilli/vemserbilli'
import Faq from '../components/Faq/faq'
import Footer from '../components/Footer/footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FloatingWhatsApp />
      <HowItWorks />
      <Motivos />
      <Simulate />
      <Vemserbilli />
      <Faq />
      
      <main>
        {/* resto da página */}
      </main>

      <Footer />
    </>
  );
}
