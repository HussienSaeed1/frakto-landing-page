'use client';

import BackToTop from "@/src/components/BackToTop";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { useLanguage } from "@/src/context/LanguageProvider";
import Confidence from "@/src/sections/ConfidenceSection/ConfidenceSection";
import DownloadSection from "@/src/sections/DownloadSection/DownloadSection";
import Ease from "@/src/sections/EaseSection/EaseSection";
import AccordionExpandIcon from "@/src/sections/FaqQuestions/FaqQuestions";
import Hero from "@/src/sections/HeroSection/Hero";
import OnePlace from "@/src/sections/HowItWorksSection/HowItWork";
import Testimonials from "@/src/sections/TestimonialsSection/TestimonialsSection";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageToggle = async () => {
    const newLocale = language === 'en' ? 'ar' : 'en';
    await toggleLanguage();
    const cleanPath = pathname.replace(/^\/(en|ar)/, '');
    router.push(`/${newLocale}${cleanPath}`);
  };

  const t = useTranslations("Home");

  return (
    <>
      <Navbar />
      <Hero />
      <Confidence /> 
      <Ease /> 
      <OnePlace /> 
      <Testimonials /> 
      <DownloadSection /> 
      <AccordionExpandIcon /> 
      <Footer /> 
      <BackToTop /> 

    </>
  );
}
