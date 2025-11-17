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

export default function Home({ isLoading }) {
  return (
    <>
      <Navbar isLoading={isLoading} />
      <HeroSection isLoading={isLoading} />
      <HowItWorks isLoading={isLoading} />
      <CoreFeatures isLoading={isLoading} />
      <ImageSlide isLoading={isLoading} />
      <FeatureSpot isLoading={isLoading} />
      <AppFeatures isLoading={isLoading} />
      <Bhubaneswar isLoading={isLoading} />
      <Student isLoading={isLoading} />
      <NewFeature isLoading={isLoading} />
      <StudentVoice isLoading={isLoading} />
      <VendorSuccess isLoading={isLoading} />
      <Vendor isLoading={isLoading} />
      <Explore isLoading={isLoading} />
      <Footer isLoading={isLoading} />
    </>
  );
}
