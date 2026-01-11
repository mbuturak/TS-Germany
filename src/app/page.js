import About from "~/sections/Home-2/About";
import Contact from "~/sections/Home-2/Contact";
import VideoHero from "~/sections/Home-2/VideoHero/VideoHero";
import Service from "~/sections/Home-2/Service";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Locations from "~/sections/Home-2/Locations";
import Client from "~/sections/Home-5-op/Client/Client";
import { SpeedInsights } from "@vercel/speed-insights/next"


import "~/public/landing-assets/css/animate.css";
import "~/public/landing-assets/css/font-awesome.min.css";
import "~/public/landing-assets/css/mfp.min.css";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";

// Slick carousel CSS (ServiceTwo için gerekli)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import siteUrl from "~/utils/siteUrl";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Task-in Marine",
    "alternateName": ["Task-in Marine Services", "Taskin Marine", "Task-in Marine"],
    "url": siteUrl,
    "logo": `${siteUrl}/main-assets/image/logo.svg`,
    "description": "Task-in Marine (also known as Taskin Marine) provides marine engineering, vessel surveys, cargo expertise, and compliance audits for shipowners and operators. Reliable, Class-ready solutions worldwide.",
    "sameAs": [
      // Add social media links if available
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": ["NL", "DE", "FI", "EU", "ME"],
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Place",
      "name": ["Netherlands", "Germany", "Finland", "Europe", "Middle East"]
    },
    "knowsAbout": [
      "Marine Engineering",
      "Vessel Surveys",
      "Marine Survey",
      "Ship Surveys",
      "Cargo Expertise",
      "Compliance Audits",
      "Shipowner Representation",
      "Maintenance, Repair & Spare Parts Supply",
      "Engineering & Ship Operation Consultancy Services",
      "Survey, Audit & Shipowner Representation"
    ]
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeaderFour />
      <VideoHero />
      <About />
      <Contact />
      <FooterThree />
      <Scroll />
      <SpeedInsights />
    </div>
  );
}
