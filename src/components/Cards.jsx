"use client";

import One from "@/public/images/One.svg";
import Two from "@/public/images/Two.svg";
import Three from "@/public/images/Three.svg";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

function Cards() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const t = useTranslations("Home.FeaturesSection");
  const locale = useLocale();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const cards = [
    {
      id: "1",
      title: t("CardOne.Heading"),
      desc: t("CardOne.Paragraph"),
      img: One,
    },
    {
      id: "2",
      title: t("CardTwo.Heading"),
      desc: t("CardTwo.Paragraph"),
      img: Two,
    },
    {
      id: "3",
      title: t("CardThree.Heading"),
      desc: t("CardThree.Paragraph"),
      img: Three,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
        scale: { type: "spring", stiffness: 100, damping: 10 },
      },
    }),
  };

  return (
    <section className="bg-gray-50 py-16 md:px-20">
      <div className="grid lg:grid-cols-3 gap-8 group max-w-6xl mx-auto relative">
        {cards.map(({ id, title, desc, img }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={
              isLargeScreen
                ? { scale: 1.2, zIndex: 50 }
                : { scale: 1, zIndex: 1 }
            }
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-start p-6 
              transition-[filter,box-shadow] duration-300
              ${
                isLargeScreen
                  ? "group-hover:blur-sm hover:!blur-none hover:shadow-2xl"
                  : ""
              }`}>
            <div
              className={`flex items-center justify-center rounded-2xl bg-gray-100
    w-12 h-12
  `}>
              <Image
                src={img}
                alt={title}
                className={i === 0 ? "w-10 h-10" : "w-8 h-8"}

              />
            </div>
            <h3 className="text-textHeadingsHeading120pxMedium lg:text-xl font-semibold text-colorsTextHeading mt-4">
              {title}
            </h3>
            <p className="text-colorsTextBody text-base mt-3 leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
