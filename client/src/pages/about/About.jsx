import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Innovation from "./components/Innovation";
import OurSuccess from "./components/OurSuccess";
import PowerfulFeatures from "./components/PowerfulFeatures";
import Navbar from "./Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurSuccess />
      <PowerfulFeatures />
      <Innovation />
      <Footer />
    </>
  );
}
