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

// Slick carousel CSS (ServiceTwo için gerekli)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

export default function EngineeringConsultancyPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ENGINEERING & SHIP OPERATION CONSULTANCY SERVICES" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start">
                        <div className="col-xl-6">
                            <div className="title-area eng-left" style={{ paddingTop: '0' }}>
                                <p>
                                    We provide engineering and ship operation consultancy services supporting shipowners and operators in safe, efficient, and environmentally compliant vessel operations. Our services are built on hands-on seagoing experience, shipyard expertise, and long-term involvement in technical management, safety systems, and regulatory compliance.
                                </p>

                                <h3 id="safety-training"><b>Safety &amp; Training</b></h3>

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

                                <h3 id="ship-operation"><b>Ship Operation, Environmental &amp; GHG Consultancy</b></h3>

                                <p>
                                    We provide consultancy services covering ship operation, technical management support, safety management systems, and environmental compliance. A key focus area of our consultancy is marine environmental performance and GHG reduction.
                                </p>

                                <p>
                                    We support shipowners with:
                                </p>

                                <ul>
                                    <li>GHG and environmental compliance consultancy</li>
                                    <li>Technical and operational measures for emission reduction</li>
                                    <li>Design improvements to enhance energy efficiency</li>
                                    <li>Retrofit projects including system upgrades and alternative solutions</li>
                                    <li>Shipyard process management during environmental and energy-efficiency-related modifications</li>
                                </ul>

                                <p>
                                    Our services combine engineering solutions with operational consultancy, ensuring that environmental compliance measures are technically feasible, cost-effective, and aligned with vessel trading profiles.
                                </p>

                                <h3><b>Sale &amp; Purchase (S&amp;P) Consultancy</b></h3>

                                <p>
                                    We provide independent and shipowner-focused Sale &amp; Purchase (S&amp;P) consultancy services, supporting clients throughout the entire transaction process.
                                </p>

                                <p>
                                    Our S&amp;P services include:
                                </p>

                                <ul>
                                    <li>Pre-purchase inspections and technical condition assessments</li>
                                    <li>Evaluation of vessel compliance, operational risks, and lifecycle costs</li>
                                    <li>Technical support during negotiations and contract finalization</li>
                                    <li>Post-purchase technical planning, including retrofit and upgrade roadmaps</li>
                                </ul>

                                <p>
                                    Our experience ensures that shipowners and investors make informed decisions based on technical integrity, operational suitability, and long-term asset value.
                                </p>

                                <p>
                                    By integrating safety expertise, operational consultancy, environmental engineering, and shipyard process management, we deliver practical, implementation-driven solutions. We position ourselves as a trusted partner for shipowners seeking safe operations, regulatory compliance, environmental performance, and sustainable fleet development.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-thumb2 eng-right" style={{ paddingTop: '0' }}>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-1.png" alt="Engineering visual 1" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-2.png" alt="Engineering visual 2" width={1200} height={800} />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-3.png" alt="Engineering visual 3" width={1200} height={800} />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '0' }}>
                                    <Image src="/main-assets/image/about-us-4.png" alt="Engineering visual 4" width={1200} height={800} />
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

