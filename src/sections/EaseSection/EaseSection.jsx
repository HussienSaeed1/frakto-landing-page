// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// import ExploreImg from '@/public/images/1.png';
// import FilterImg from '@/public/images/2.png';
// import SelectImg from '@/public/images/3.png';
// import UploadImg from '@/public/images/4.png';
// import { useLocale, useTranslations } from 'next-intl';

// export default function Ease() {
//   const t = useTranslations('Home.HowItWorksSection');
//   const locale = useLocale();
//   const [activeTab, setActiveTab] = useState(t('Register'));

//   const tabs = [
//     { name: t('Register'), image: ExploreImg },
//     { name: t('Explore'), image: FilterImg },
//     { name: t('Select'), image: SelectImg },
//     { name: t('Upload'), image: UploadImg },
//   ];

//   return (
//     <section
//       id="how-it-works"
//       className="w-full bg-colorsPrimaryPrimaryColor text-white py-20 min-h-dvh flex flex-col">
//       <div className="px-spacingPaddingPadding24px lg:px-[64px] flex flex-col items-center flex-1 w-full">
//         <h2 className="text-[#F5F9FB]  text-textHeadingsHeading328pxMedium mb-12 text-start mx-0 w-full md:text-textHeadingsHeading640pxMedium lg:text-textHeadingsHeading748pxMedium">
//           {t('Heading')}
//         </h2>

//         <div className="flex flex-col items-center flex-1">
//           <div className="flex justify-center gap-8 mb-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.name}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`text-textBodyBodyMed16pxMedium lg:text-textHeadingsHeading328pxMedium py-spacingPaddingPadding16px px-spacingPaddingPadding6px md:px-spacingPaddingPadding24px lg:px-spacingPaddingPadding48px transition-colors ${
//                   activeTab === tab.name
//                     ? 'border-b-2 border-[#F5F9FB] text-[#F5F9FB]'
//                     : 'text-colorsTextDisabled hover:text-[#F5F9FB]'
//                 }`}>
//                 {tab.name}
//               </button>
//             ))}
//           </div>

//           <div className="w-full h-[500px] md:h-[600px] lg:h-[600px] relative overflow-hidden">
//             <AnimatePresence mode="wait">
//               {tabs.map(
//                 (tab) =>
//                   activeTab === tab.name && (
//                     <motion.div
//                       key={tab.name}
//                       className="absolute inset-0 flex items-center justify-center"
//                       initial={{ opacity: 0,scale:.4  }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 1 }}
//                       transition={{ duration: .6, ease: 'easeInOut' }}>
//                       <Image
//                         src={tab.image}
//                         alt={tab.name}
//                         fill
//                         className="rounded-xl shadow-lg object-cover md:object-cover lg:object-contain"
//                       />
//                     </motion.div>
//                   )
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import ExploreImg from '@/public/images/1.png';
import FilterImg from '@/public/images/2.png';
import SelectImg from '@/public/images/3.png';
import UploadImg from '@/public/images/4.png';
import { useLocale, useTranslations } from 'next-intl';

export default function Ease() {
  const t = useTranslations('Home.HowItWorksSection');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(t('Register'));

  const tabs = [
    { name: t('Register'), image: ExploreImg },
    { name: t('Explore'), image: FilterImg },
    { name: t('Select'), image: SelectImg },
    { name: t('Upload'), image: UploadImg },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-colorsPrimaryPrimary900 text-white py-20 min-h-dvh flex flex-col">
      <div className="px-spacingPaddingPadding24px lg:px-[64px] flex flex-col items-center flex-1 w-full">
        <h2 className="text-[#FFFFFF]  text-textHeadingsHeading328pxMedium mb-10 lg:mb-12 text-start mx-0 w-full md:text-textHeadingsHeading640pxMedium lg:text-textHeadingsHeading748pxMedium">
          {t("Heading")}
        </h2>

        <div className="flex flex-col items-center flex-1">
          <div className="flex justify-center gap-8 mb-10 lg:mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`text-textBodyBodyMed16pxMedium lg:text-textHeadingsHeading328pxMedium py-spacingPaddingPadding16px px-spacingPaddingPadding6px md:px-spacingPaddingPadding24px lg:px-spacingPaddingPadding48px transition-colors ${
                  activeTab === tab.name
                    ? "border-b-2 border-[#F5F9FB] text-[#F5F9FB]"
                    : "text-colorsTextDisabled hover:text-[#F5F9FB]"
                }`}>
                {tab.name}
              </button>
            ))}
          </div>

          <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[600px] relative overflow-hidden">
            {" "}
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  activeTab === tab.name && (
                    <motion.div
                      key={tab.name}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      // exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}>
                      <Image
                        src={tab.image}
                        alt={tab.name}
                        fill
                        className="rounded-xl shadow-lg object-cover md:object-cover lg:object-contain"
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
