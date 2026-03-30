import Image from 'next/image';
import Link from 'next/link';
import youtube from '@/public/images/youtube.svg';
import twitter from '@/public/images/twitter.svg';
import facebook from '@/public/images/facebook.svg';
import tiktok from '@/public/images/tiktok.svg';
import instagram from '@/public/images/instagram.svg';
import { useTranslations } from 'next-intl';

function Footer() {
    const t = useTranslations("Home.FooterSection");
  
  return (
    <footer className="bg-colorsPrimaryPrimary900 py-spacingPaddingPadding40px  border-t border-[#EEF1F5]">
      <div className="max-w-container 3xl:w-[80%] mx-auto  px-5 lg:px-0 ">
        <div className="flex justify-center  ">
          <div className="flex space-x-6">
            <Link
              href={"https://www.facebook.com"}
              className="text-colorsNeutralWhite text-[1rem] hover:opacity-80 rtl:me-6">
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"https://x.com"}
              className="text-colorsNeutralWhite text-[1rem] hover:opacity-80">
              <Image
                src={twitter}
                alt="twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"https://www.instagram.com"}
              className="text-colorsNeutralWhite text-[1rem] hover:opacity-80">
              <Image
                src={instagram}
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"https://www.tiktok.com"}
              className="text-colorsNeutralWhite text-[1rem] hover:opacity-80">
              <Image
                src={tiktok}
                alt="tiktok"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"https://www.youtube.com"}
              className="text-colorsNeutralWhite text-[1rem] hover:opacity-80">
              <Image
                src={youtube}
                alt="youtube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <p
          dir="ltr"
          style={{ direction: "ltr", unicodeBidi: "embed" }}
          className="text-textBodyBodyMed16pxRegular text-[#F5F9FB] text-center w-full mt-8">
          {t("copy")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
