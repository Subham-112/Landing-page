import { useEffect } from "react";
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
import { ScrollProgress } from "../../components/ScrollProgress";
import { AnimatedElement } from "../../components/AnimatedElement";
import { BackToTop } from "../../components/BackToTop";
import "./Home.css";

export default function Home({ isLoading }) {
  // Smooth scrolling enhancement
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Add custom easing for smoother animations
    const style = document.createElement("style");
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      
      html {
        scroll-padding-top: 80px; /* Adjust based on navbar height */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="home-container">
      <ScrollProgress />
      <BackToTop />
      <Navbar isLoading={isLoading} />

      {/* Hero section with no animation delay since it's above fold */}
      <HeroSection isLoading={isLoading} />

      {/* Animated sections with progressive delays */}
      <AnimatedElement animation="fadeInUp" delay={100} threshold={0.2}>
        <HowItWorks isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="slideInLeft" delay={150} threshold={0.15}>
        <CoreFeatures isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="scaleIn" delay={200} threshold={0.1}>
        <ImageSlide isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeInRight" delay={100} threshold={0.15}>
        <FeatureSpot isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeInUp" delay={150} threshold={0.2}>
        <AppFeatures isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="slideInRight" delay={100} threshold={0.15}>
        <Bhubaneswar isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="bounceIn" delay={200} threshold={0.1}>
        <Student isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeInLeft" delay={150} threshold={0.15}>
        <NewFeature isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeInUp" delay={100} threshold={0.2}>
        <StudentVoice isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="slideInLeft" delay={150} threshold={0.15}>
        <VendorSuccess isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="scaleIn" delay={100} threshold={0.1}>
        <Vendor isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeInUp" delay={150} threshold={0.2}>
        <Explore isLoading={isLoading} />
      </AnimatedElement>

      <AnimatedElement animation="fadeIn" delay={100} threshold={0.1}>
        <Footer isLoading={isLoading} />
      </AnimatedElement>
    </div>
  );
}
