"use client";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";

import "~/public/landing-assets/css/animate.css";
import "~/public/landing-assets/css/font-awesome.min.css";
import "~/public/landing-assets/css/mfp.min.css";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";

export default function SafetyTrainingPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="SAFETY & TRAINING" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start">
                        <div className="col-xl-6">
                            <div className="title-area eng-left" style={{ paddingTop: '0' }}>
                                <h3><b>Safety &amp; Training</b></h3>
                                <p>
                                    Safety is at the core of sustainable ship operations. We deliver comprehensive maritime safety and training services focusing on practical implementation rather than theoretical instruction.
                                </p>
                                <p>
                                    Our firefighting, LSA, and FFE training programs are designed to reflect real onboard conditions and operational scenarios. Trainings can be conducted at:
                                </p>
                                <ul>
                                    <li>Our Rotterdam-based training facilities</li>
                                    <li>On board vessels, during operation or port stays</li>
                                    <li>Clients' offices, upon request</li>
                                </ul>
                                <p>
                                    Training content includes equipment operation, inspection, maintenance, emergency response, drills, and compliance with SOLAS, class, and flag state requirements. We support shipowners in strengthening onboard safety culture, improving crew competence, and maintaining regulatory readiness.
                                </p>
                                <p style={{ marginTop: '32px' }}>
                                    <Link href="/engineering-consultancy" className="btn btn3">
                                        ← Back to Consultancy Services
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-thumb2 eng-right" style={{ paddingTop: '0' }}>
                                <div className="about-img-1">
                                    <Image src="/main-assets/image/about-us-2.png" alt="Safety & Training" width={1200} height={800} priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .eng-title { font-size: 28px; font-weight: 800; margin-bottom: 14px; color: #0f172a; }
                .title-area p { margin-bottom: 20px; color: #4b5563; line-height: 1.7; text-align: justify; }
                .title-area h3 { margin-top: 30px; margin-bottom: 15px; color: var(--theme-color, #0066cc); font-size: 20px; font-weight: 700; }
                .title-area h3:first-of-type { margin-top: 20px; }
                .title-area ul { margin: 15px 0 20px 0; padding-left: 20px; list-style: none; }
                .title-area ul li { position: relative; padding-left: 24px; margin-bottom: 10px; color: #4b5563; line-height: 1.6; }
                .title-area ul li:before { content: "•"; position: absolute; left: 0; color: var(--theme-color, #0066cc); font-weight: bold; font-size: 18px; }
                .eng-right .about-img-1 { width: 100%; }
                .eng-right .about-img-1 img { width: 100%; height: auto; display: block; }
                @media (max-width: 1199px) { .row.align-items-start { align-items: flex-start !important; } }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}
