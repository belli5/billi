import Header from '../../components/Header/Header';
import Faq from './Components/Faq/faq'
import Footer from '../../components/Footer/footer'
import FloatingWhatsApp from '../../components/FloatingWhatsApp/FloatingWhatsApp';
import Hero from './Components/HeroBanner/Banner'
import Simulate from './Components/Simulate/SimulateCreditForm'
import FeaturesSection from './Components/FeaturesSection/FeaturesSection'


export default function ParaEmpresas() {
  return (
    <>
      <Header />
      <FloatingWhatsApp />
      <Hero />
      <Simulate />
      <FeaturesSection />
      <Faq />
      
      <main>
        
      </main>

      <Footer />
    </>
  );
}
