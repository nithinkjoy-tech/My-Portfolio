'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/component/Navbar';
import LeftSection from '@/component/LeftSection';
import RightSection from '@/component/RightSection';
import Script from 'next/script';
import { useEffect } from 'react';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    useEffect(() => {
        let main = document.getElementById('main-id')
        if(main && main.scrollTop==0) {
            main?.scrollBy(0, 30)
        }
    }, []);

  return (
    <html lang='en'>
      <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Nithin K Joy - Full Stack Developer | React, Next.js & Node.js Expert</title>
          <meta name='title' content='Nithin K Joy - Full Stack Developer | React, Next.js & Node.js Expert' />
          <meta name='description' content='Experienced Full Stack Developer with 2+ years specializing in React, Next.js, Vue.js, and Node.js. Building scalable web applications, e-commerce platforms, and high-performance user interfaces in Mangaluru, Karnataka.' />
          <meta name='keywords' content='Nithin K Joy, Full Stack Developer, React Developer, Next.js Developer, Vue.js Developer, Node.js Developer, Frontend Developer, JavaScript Developer, Web Developer Mangaluru, Software Engineer Karnataka, E-commerce Developer, Tailwind CSS, TypeScript Developer, Express.js Developer, Svelte, System Design, Microservices' />
          <meta name='author' content='Nithin K Joy' />
          <meta name='robots' content='index, follow' />
          <meta name='language' content='English' />
          <meta name='revisit-after' content='7 days' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://nithinkjoy.dev' />
          <meta property='og:title' content='Nithin K Joy - Full Stack Developer | React, Next.js & Node.js Expert' />
          <meta property='og:description' content='Experienced Full Stack Developer specializing in React, Next.js, Vue.js, and Node.js. Building scalable web applications and high-performance user interfaces.' />
          <meta property='og:image' content='https://nithinkjoy.dev/og-image.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:alt' content='Nithin K Joy - Full Stack Developer Portfolio' />
          <meta property='og:site_name' content='Nithin K Joy Portfolio' />
          <meta property='og:locale' content='en_US' />

          {/* Twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://nithinkjoy.dev/' />
          <meta name='twitter:title' content='Nithin K Joy - Full Stack Developer' />
          <meta name='twitter:description' content='Full Stack Developer specializing in React, Next.js, Vue.js & Node.js | 2+ years experience' />
          <meta name='twitter:image' content='https://nithinkjoy.dev/og-image.jpg' />
          <meta name='twitter:creator' content='@nithinkjoy_tech' />

          {/* Additional Meta Tags */}
          <meta name='theme-color' content='#0a192f' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <link rel='canonical' href='https://nithinkjoy.dev/' />

          {/* Favicon */}
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />

          {/* Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
              href='https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded&family=Fira+Code&display=swap'
              rel='stylesheet'
          />
          <link
              href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300&family=Montserrat:wght@300&display=swap'
              rel='stylesheet'
          />
      </head>
      <body>
        <main id={"main-id"} className='w-full h-screen overflow-x-hidden overflow-y-scroll font-bodyFont bg-bodyColor text-textLight scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/70 !h-[100svh]'>
          <Navbar />
          <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
            <div className='hidden xl:flex w-32 h-full fixed left-0 bottom-0'>
              <LeftSection />
            </div>
            {children}
            <div className='hidden xl:flex w-32 h-full fixed right-0 bottom-0'>
              <RightSection />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
