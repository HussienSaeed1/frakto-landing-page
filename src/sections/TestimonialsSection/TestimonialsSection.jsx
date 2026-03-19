'use client';
import { TbMessage2Heart } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Home.TestimonialsSection');
  const locale = useLocale();



    const testimonials = [
      {
        id: 1,
        text: t('CardOne.Paragraph'),
        user: t('CardOne.Name'),
      },
      {
        id: 2,
        text: t('CardTwo.Paragraph'),
        user: t('CardTwo.Name'),
      },
      {
        id: 3,
        text: t('CardThree.Paragraph'),
        user: t('CardThree.Name'),
      },
      {
        id: 4,
        text: t('CardFour.Paragraph'),
        user: t('CardFour.Name'),
      },
    ];
  const directions = [
    { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  ];

  return (
    <section className="w-full bg-colorsPrimaryPrimary900 py-16 lg:py-28 px-[24px] md:px-[48px] lg:px-[64px]">
      <div>
        <h2 className="text-[#FFFFFF] text-textHeadingsHeading328pxMedium mb-12 text-start w-full md:text-textHeadingsHeading640pxMedium lg:text-textHeadingsHeading748pxMedium">
          {t("Heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-[24px] md:px-[48px] lg:px-[64px]">
          {testimonials.map(({ id, text, user }, i) => {
            // decide border side based on locale
            const borderSide =
              locale === "ar"
                ? i % 2 === 0
                  ? "md:border-l"
                  : ""
                : i % 2 === 0
                  ? "md:border-r"
                  : "";

            return (
              <motion.div
                key={id}
                className={`lg:p-8 flex flex-col gap-4 
                  ${borderSide} border-[#FFFFFF]
                  ${i < 2 ? "md:border-b mt-1" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={directions[i % directions.length]}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <TbMessage2Heart className="text-[#EBEAF0] w-6 h-6 mt-3" />
                <p className="text-textBodyBodyLarge18pxMedium font-medium mg:text-textHeadingsHeading224pxRegular text-[#FFFFFF]">
                  {text}
                </p>
                <span className="text-sm text-colorsTextDisabled">{user}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
