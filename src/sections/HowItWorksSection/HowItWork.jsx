// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { useLocale, useTranslations } from 'next-intl';

// export default function OnePlace() {
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
// const t = useTranslations('Home.WhyFraktoSection');
//   const locale = useLocale();

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(min-width: 768px)');
//     setIsLargeScreen(mediaQuery.matches);

//     const handler = (e) => setIsLargeScreen(e.matches);
//     mediaQuery.addEventListener('change', handler);

//     return () => mediaQuery.removeEventListener('change', handler);
//   }, []);

//   const cards = [
//     {
//       id: 1,
//       title: t('CardOne.Heading'),
//       desc: t('CardOne.Paragraph'),
//     },
//     {
//       id: 2,
//       title: t('CardTwo.Heading'),
//       desc: t('CardTwo.Paragraph'),
//     },
//     {
//       id: 3,
//       title: t('CardThree.Heading'),
//       desc: t('CardThree.Paragraph'),
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
//     }),
//   };

//   return (
//     <section className="bg-gray-50 py-16 lg:py-28 px-[24px] md:px-[48px] lg:px-[64px]">
//       <div>
//         {/* Title */}
//         <h2 className="text-start text-textHeadingsHeading328pxMedium lg:text-textHeadingsHeading748pxMedium font-medium mb-12">
//           {t('Heading')}
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 group relative">
//           {cards.map(({ id, title, desc }, i) => (
//             <motion.div
//               key={id}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               whileHover={
//                 isLargeScreen
//                   ? { scale: 1.2, zIndex: 50 }
//                   : { scale: 1, zIndex: 1 }
//               }
//               transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//               className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-start p-6
//                          transition-[filter,box-shadow] duration-300
//                          group-hover:blur-sm hover:!blur-none hover:shadow-2xl">
//               <div className="w-full h-64 relative mb-6 bg-gray-200 flex items-center justify-center rounded-md">
//                 <Image
//                   src="/placeholder.png"
//                   alt={title}
//                   fill
//                   className="object-contain p-6"
//                 />
//               </div>

//               <h3 className="font-medium text-lg text-gray-900">{title}</h3>
//               <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//                 {desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import HalfOne from "@/public/images/hafeOne.jpg";
import HalfTwo from "@/public/images/hafeTwo.jpg";
import HalfThree from "@/public/images/hafeThree.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function OnePlace() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const t = useTranslations("Home.WhyFraktoSection");
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
      id: 1,
      title: t("CardOne.Heading"),
      desc: t("CardOne.Paragraph"),
      image: HalfThree,
    },
    {
      id: 2,
      title: t("CardTwo.Heading"),
      desc: t("CardTwo.Paragraph"),
      image: HalfTwo,
    },
    {
      id: 3,
      title: t("CardThree.Heading"),
      desc: t("CardThree.Paragraph"),
      image: HalfOne,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-28 px-[24px] md:px-[48px] lg:px-[64px]">
      <div>
        <h2 className="text-start text-textHeadingsHeading328pxMedium lg:text-textHeadingsHeading748pxMedium text-colorsTextHeading font-medium mb-12">
          {t("Heading")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 group relative">
          {cards.map(({ id, title, desc, image }, i) => (
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
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-start p-6 
                         transition-[filter,box-shadow] duration-300
                         group-hover:blur-sm hover:!blur-none hover:shadow-2xl">
              <div className="w-full aspect-square relative mb-6  flex items-center justify-center rounded-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover "
                />
              </div>

              <h3 className="font-medium text-textHeadingsHeading120pxMedium text-colorsTextHeading">
                {title}
              </h3>
              <p className="text-colorsTextBody mt-2 text-textBodyBodyMed18pxRegular leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
