"use client"

import DemoSection from "@/components/DemoSection";
import HomePageContent from "@/components/HomePageContent";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";
import Script from "next/script";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
    })
  }, [])
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D731Y3HESC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'D731Y3HESC');
        `}
      </Script>
      <div className="text-center max-w-5xl  mx-auto">
        <PageHeaders
          h1text={'Add epic captions to your videos'}
          h2text={'Just upload your video and we will do the rest'}
        />
        <UploadForm />
        <DemoSection />
        <HomePageContent />
      </div>
      <Footer />
    </>
  );
}