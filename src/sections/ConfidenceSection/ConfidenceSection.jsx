import Cards from "@/src/components/Cards";
import { useLocale, useTranslations } from "next-intl";

export default function Confidence() {
    const t = useTranslations('Home.FeaturesSection');
    const locale = useLocale();
  return (
    <section id="features" className="py-[180px] px-6  md:px-12 lg:px-16 bg-gray-50">
      <h2 className="text-start text-textHeadingsHeading328pxMedium md:text-textHeadingsHeading640pxMedium font-medium text-colorsTextHeading  mb-4 lg:mb-10">
       {t('Heading')}
      </h2>
      {/* Render Cards */}
      <div className="">
        <Cards />
      </div>
    </section>
  );
}
