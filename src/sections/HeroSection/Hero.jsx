"use client";

import Image from "next/image";
import HeroImage from "@/public/images/Hero-section.png";
import GooglePlay from "@/public/images/GP.svg";
import AppStore from "@/public/images/AS.svg";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home.HeroSection");

  return (
    <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden pt-24">
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-start text-textHeadingsHeading640pxMedium md:text-textHeadingsHeading864pxSemiBold font-medium md:font-semibold leading-tight break-words">
              {t("Heading")}
            </h1>

            {/* Paragraph */}
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-200 text-start max-w-2xl">
              {t("Paragraph")}
            </p>

            {/* Store Buttons */}
            <div className="flex  gap-4 mt-8 md:mt-10 items-center justify-center lg:justify-start flex-row">
              <a
                dir="ltr"
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex hover:opacity-90 transition-opacity hover:scale-105 transform duration-200">
                <Image
                  src={GooglePlay}
                  alt="Google Play"
                  width={163}
                  height={59}
                  priority
                  className="object-contain"
                />
              </a>

              <a
                dir="ltr"
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex hover:opacity-90 transition-opacity hover:scale-105 transform duration-200">
                <Image
                  src={AppStore}
                  alt="App Store"
                  width={163}
                  height={59}
                  priority
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}