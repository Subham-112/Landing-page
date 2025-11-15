import Navbar from "../../layouts/Navbar";
import AppFeatures from "./components/AppFeatures";
import Bhubaneswar from "./components/Bhubaneswar";
import CoreFeatures from "./components/CoreFeatures";
import FeatureSpot from "./components/FeatureSpot";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ImageSlide from "./components/ImageSlide";
import NewFeature from "./components/NewFeature";
import Student from "./components/Student";
import StudentVoice from "./components/StudentVoice";
import VendorSuccess from "./components/VendorSuccess";
import Vendor from "./components/Vendor";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CoreFeatures />
      <ImageSlide />
      <FeatureSpot />
      <AppFeatures />
      <Bhubaneswar />
      <Student />
      <NewFeature />
      <StudentVoice />
      <VendorSuccess />
      <Vendor />
      <Explore />
      <Footer />
    </>
  );
}
