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

export default function EngineeringSolutionsPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ENGINEERING SOLUTIONS" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start">
                        <div className="col-xl-6">
                            <div className="title-area eng-left" style={{ paddingTop: '0' }}>
                                <h3><b>Engineering Solutions</b></h3>
                                <p>
                                    We provide engineering and ship operation consultancy services supporting shipowners and operators in safe, efficient, and environmentally compliant vessel operations. Our services are built on hands-on seagoing experience, shipyard expertise, and long-term involvement in technical management, safety systems, and regulatory compliance.
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
                                    <Image src="/main-assets/image/about-us-1.png" alt="Engineering Solutions" width={1200} height={800} priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .eng-title {
                    font-size: 28px;
                    font-weight: 800;
                    margin-bottom: 14px;
                    color: #0f172a;
                }
                .title-area p {
                    margin-bottom: 20px;
                    color: #4b5563;
                    line-height: 1.7;
                    text-align: justify;
                }
                .title-area h3 {
                    margin-top: 30px;
                    margin-bottom: 15px;
                    color: var(--theme-color, #0066cc);
                    font-size: 20px;
                    font-weight: 700;
                }
                .title-area h3:first-of-type {
                    margin-top: 20px;
                }
                .title-area ul {
                    margin: 15px 0 20px 0;
                    padding-left: 20px;
                    list-style: none;
                }
                .title-area ul li {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 10px;
                    color: #4b5563;
                    line-height: 1.6;
                }
                .title-area ul li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--theme-color, #0066cc);
                    font-weight: bold;
                    font-size: 18px;
                }
                .eng-right .about-img-1 {
                    width: 100%;
                }
                .eng-right .about-img-1 img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                @media (max-width: 1199px) {
                    .row.align-items-start {
                        align-items: flex-start !important;
                    }
                }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}
