// // 'use client';
// // import Image from 'next/image';
// // import { FaApple, FaGooglePlay } from 'react-icons/fa6';
// // import Mockup from '@/public/images/Screen.jpg';
// // import { useLocale, useTranslations } from 'next-intl';
// // import GooglePlay from '@/public/images/GP.svg';
// // import AppStore from '@/public/images/AS.svg';
// // export default function DownloadSection() {
// //   const t = useTranslations('Home.DownloadSection');
// //   const locale = useLocale();
// //   return (
// //     <section
// //       id="download-app"
// //       className="bg-gray-50 py-28">
// //       <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
// //         <div className="flex flex-col gap-6">
// //           <h2 className="text-textHeadingsHeading328pxMedium md:text-textHeadingsHeading640pxMedium font-medium text-colorsTextHeading leading-snug ">
// //             {t('Heading')}
// //           </h2>
// //           <p className="text-colorsTextHeading text-textBodyBodyLarge18pxRegular lg:text-textHeadingsHeading224pxRegular ">
// //             {t('Paragraph')}
// //           </p>

// //    <div className="flex gap-4 mt-8  items-center justify-center  md:justify-start">
// //           <a
// //             dir="ltr"
// //             href="https://play.google.com/store"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-3     transition w-fit lg:w-auto ">
// //             {/* <FaGooglePlay size={20} />  */}
// //             <div className="flex flex-col leading-tight text-left">
// //               <Image
// //                 src={GooglePlay}
// //                 alt="Google Play"
// //                 width={163}
// //                 height={59}
// //                 priority
// //                 className="object-cover"
// //               />
// //             </div>
// //           </a>
// //           {/* <a
// //             dir="ltr"
// //             href="https://play.google.com/store"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg shadow  transition w-fit lg:w-auto ">
// //             <FaGooglePlay size={20} />
// //             <div className="flex flex-col leading-tight text-left">
// //               <span className=" lg:text-[9px] ">AVAILABLE ON</span>
// //               <span className="font-medium text-[16px]">Google Play</span>
// //             </div>
// //           </a> */}
// //           {/* <a
// //             dir="ltr"
// //             href="https://www.apple.com/app-store/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg shadow  transition w-fit lg:w-auto ">
// //             <FaApple size={20} />
// //             <div className="flex flex-col leading-tight text-left">
// //               <span className="text-[9px] ">AVAILABLE ON</span>
// //               <span className="font-medium text-[16px]">App Store</span>
// //             </div>
// //           </a> */}

// //           <a
// //             dir="ltr"
// //             href="https://www.apple.com/app-store/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-3  text-white   transition w-fit lg:w-auto ">
// //             {/* <FaGooglePlay size={20} />  */}
// //             <div className="flex flex-col leading-tight text-left">
// //               <Image
// //                 src={AppStore}
// //                 alt="App Store"
// //                 width={163}
// //                 height={59}
// //                 priority
// //                 className="object-cover"
// //               />
// //             </div>
// //           </a>
// //         </div>
// //         </div>

// //         <div className="flex justify-start md:justify-end">
// //           <Image
// //             src={Mockup}
// //             alt="App Mockup"
// //             className="rounded-lg   w-[100%] max-w-sm md:max-w-md lg:max-w-lg"
// //             priority
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

'use client';
import Image from 'next/image';
import Mockup from '@/public/images/Screen.jpg';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { BsSend } from 'react-icons/bs';

export default function DownloadSection() {
  const t = useTranslations('Home.DownloadSection');
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = async () => {
    setMessage('');
    try {
      setLoading(true);

      await emailjs.sendForm(
        'service_udlc5nb',
        'template_ojn6ni8',
        form.current,
        { publicKey: '3p1ycUcI72ZbptJ66' }
      );

      setMessage(t('Success'));
      form.current?.reset();
    } catch (err) {
      console.error(err);
      setMessage(t('Error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="download-app"
      className="bg-gray-50 py-28">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-textHeadingsHeading328pxMedium md:text-textHeadingsHeading640pxMedium font-medium text-colorsTextHeading">
            {t("Heading")}
          </h2>

          <p className="text-textBodyBodyLarge18pxRegular text-colorsTextHeading">
            {t("Paragraph")}
          </p>

          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col lg:flex-row gap-4 mt-6 max-w-lg ">
            <input
              type="email"
              placeholder={t("EmailPlaceholder")}
              className="flex-1 w-full px-4 py-3 bg-[#f9fafb] rounded-[16px] border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              {...register("user_email", {
                required: t("EmailRequired"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("EmailInvalid"),
                },
              })}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3 rounded-[16px] bg-colorsPrimaryPrimaryColor text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]">
              {loading ? t("Sending") : <>{t("SendButton")}</>}
            </button>
          </form>

          {errors.user_email && (
            <p className="text-errorText text-sm">
              {errors.user_email.message}
            </p>
          )}

          {message && (
            <p
              className={`text-sm mt-2 ${
                message.includes(t("Success"))
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
              {message}
            </p>
          )}
          <p className="italic text-base text-colorsTextDisabled">{t("hint")}</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={Mockup}
            alt="App Mockup"
            className="rounded-lg w-full max-w-lg"
            priority
            width={500}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}