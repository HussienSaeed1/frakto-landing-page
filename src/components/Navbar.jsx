"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import LogoMob from "@/public/images/sidebar-logo.png";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const t = useTranslations("Home.HeroSection");

  const sections = [
    { key: "Home", id: "home" },
    { key: "Features", id: "features" },
    { key: "HowItWorks", id: "how-it-works" },
    { key: "DownloadApp", id: "download-app" },
    { key: "FAQ", id: "faq" },
  ];

  const handleLanguageToggle = async () => {
    const newLocale = language === "en" ? "ar" : "en";
    await toggleLanguage();
    const cleanPath = pathname.replace(/^\/(en|ar)/, "");
    router.push(`/${newLocale}${cleanPath}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="absolute top-5 lg:top-0 left-0 z-50 w-full py-4 px-6 lg:px-0 flex items-center justify-between bg-transparent text-[#F5F9FB]">
      <div className="flex items-center justify-between lg:p-spacingPaddingPadding64px w-full">
        <div className="flex flex-1">
          <Link
            href="/"
            className="flex items-end gap-2">
            <Image
              src={Logo}
              alt="Frakto logo"
              priority
              className="h-[30px] w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-medium text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[.55em]">
                FRAKTO
              </span>
              <span className="tracking-[0.5em] mt-1 text-[9.2px] sm:text-[9px] md:text-[11px] lg:text-[13px]">
                PROPTECH
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-x-3 text-textBodyBodyMed16pxRegular text-[#F5F9FB]">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.id === "home" ? "/" : `/#${section.id}`}
              className="hover:text-colorsSecondarySecondaryaccent500 py-2 px-8 transition">
              {t(section.key)}
            </Link>
          ))}
        </div>

        {/* Desktop Language Toggle */}
        <div className="hidden lg:flex ms-10">
          <button
            className="hover:text-colorsSecondarySecondaryaccent500"
            onClick={handleLanguageToggle}>
            {language === "en" ? "عربي" : "English"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={burgerRef}
          className="lg:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}>
          <FiMenu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 h-full w-full bg-white text-black transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex  py-4 px-6 border-b w-full">
            <div className="flex items-end flex-1">
              <Link
                href="/"
                className="flex  "
                onClick={() => setMenuOpen(false)}>
                <Image
                  src={LogoMob}
                  alt="Frakto logo"
                  width={26}
                  height={26}
                  priority
                  className={language === "ar" ? "rtl" : ""}
                />
              </Link>
              <Link
                href="/"
                className=" w-full ms-1"
                onClick={() => setMenuOpen(false)}>
                <span className="flex flex-col leading-none">
                  <span className="font-medium text-colorsPrimaryPrimaryColor text-[12px] sm:text-[10px] md:text-[14px]  tracking-[.35em]">
                    FRAKTO
                  </span>
                  <span className="tracking-[0.3em]  text-[9.2px] sm:text-[9px] md:text-[11px] ">
                    PROPTECH
                  </span>
                </span>
              </Link>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl">
              <IoIosClose />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 py-6 flex-1 items-start text-lg px-6 w-full">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.id === "home" ? "/" : `/#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className=" text-colorsTextDisabled hover:text-colorsPrimaryPrimaryColor w-full">
                {t(section.key)}
              </Link>
            ))}

            <hr className="my-4 w-full" />

            <button
              onClick={handleLanguageToggle}
              className="text-[#4B5565] hover:text-colorsPrimaryPrimaryColor">
              {language === "en" ? "عربي" : "English"}
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col items-center gap-4 w-full">
            <div className="flex gap-6 text-xl">
              <FaFacebook className="text-colorsPrimaryPrimaryColor" />
              <FaTwitter className="text-colorsPrimaryPrimaryColor" />
              <FaInstagram className="text-colorsPrimaryPrimaryColor" />
              <FaTiktok className="text-colorsPrimaryPrimaryColor" />
              <FaYoutube className="text-colorsPrimaryPrimaryColor" />
            </div>
            <p className="text-sm text-colorsPrimaryPrimaryColor text-center w-full">
              © 2025 Frakto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
