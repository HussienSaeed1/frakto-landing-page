'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FAQAccordion() {
  const [expandedPanels, setExpandedPanels] = useState({});
  const contentRefs = useRef({});
  const t = useTranslations('Home.FAQSection');
  const locale = useLocale();

  const {
    data: faqs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['faqs'], 
  queryFn: async () => {
  const res = await axios.get(
    'https://api.staging.bydotlap.xyz/api/faq/mobile',
    {
      // const res = await axios.get('https://api.dev.bydotlap.xyz/api/faq/mobile', {
      headers: { lang: locale },
    }
  );
  return res.data?.data; 
},
  });
  const togglePanel = (id) => {
    setExpandedPanels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq">
      <div className="faq-accordion py-36 mx-auto px-6 lg:px-16 grid grid-cols-1 items-center bg-colorsPrimaryPrimary900">
        <h2 className="text-textHeadingsHeading328pxMedium md:text-textHeadingsHeading640pxMedium lg:text-textHeadingsHeading748pxMedium font-medium text-[#F5F9FB]">
          {t("Heading")}
        </h2>

        <div className="md:px-spacingPaddingPadding48px mt-spacingGapGap40px">
          {faqs?.slice(0, 5).map((faq, index) => {
            const panelId = `faq-${faq.id || index}`;
            return (
              <div
                key={panelId}
                className="mb-3 rounded-borderRadius20px overflow-hidden shadow-sm">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer bg-[#241F44] transition-colors"
                  onClick={() => togglePanel(panelId)}>
                  <h3 className="text-textBodyBodyLarge18pxMedium md:text-textHeadingsHeading224pxMedium font-medium text-[#F5F9FB]">
                    {faq.title}
                  </h3>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      expandedPanels[panelId] ? "rotate-45" : ""
                    }`}>
                    <IoAddOutline className="w-6 h-6 text-[#F5F9FB]" />
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedPanels[panelId]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    maxHeight: expandedPanels[panelId]
                      ? `${contentRefs.current[panelId]?.scrollHeight}px`
                      : "0px",
                  }}>
                  <div
                    ref={(el) => (contentRefs.current[panelId] = el)}
                    className="px-4 py-2 bg-[#241F44]">
                    <p className="text-[#F5F5F5]">{faq.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
