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

const SERVICES_IMG = "/main-assets/image/services";

export default function EngineeringSolutionsPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ENGINEERING SOLUTIONS" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar engineering-solutions-page">
                <div className="container">
                    <h3 className="eng-sol-main-title"><b>Engineering Solutions</b></h3>

                    {/* Bölüm 1: 3D gemi + intro metin */}
                    <div className="eng-sol-block">
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/1.png`} alt="Engineering solutions - vessel design" width={900} height={500} priority />
                        </div>
                        <p>
                            Our engineering services are committed to delivering reliable, accurate, and innovative solutions to the maritime and offshore industries. With a strong technical foundation and a client-focused approach, we support shipowners, operators, and shipyards through every stage of a vessel&apos;s lifecycle. Our work is based on internationally recognized standards and class society requirements, delivering precise analytical solutions for vessel design, modification, and operational performance.
                        </p>
                    </div>

                    {/* Görsel 2 + uzmanlık metni */}
                    <div className="eng-sol-block">
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/2.png`} alt="Ship profile and analysis" width={900} height={500} />
                        </div>
                        <p>
                            Our expertise covers hydrostatics, stability, structural analysis, seakeeping, maneuvering, and regulatory compliance. By applying proven engineering methodologies and modern computational tools, we support shipowners, operators, shipyards, and designers in achieving safe, efficient, and compliant vessel operations.
                        </p>
                    </div>

                    {/* Standartlar paragrafı + hizmet listesi girişi */}
                    <div className="eng-sol-block">
                        <p>
                            Our engineering services are performed using recognized calculation methods, approved software tools, and applicable international standards, including SOLAS, MARPOL, the Intact and Damage Stability Codes, ICLL, and relevant Class Rules. We work closely with shipowners, operators, shipyards, and surveyors to ensure that all deliverables are suitable for Class and Flag approval.
                        </p>
                        <p>
                            We offer our clients a comprehensive range of engineering services, including but not limited to:
                        </p>
                        <h4 className="eng-sol-subtitle">Engineering Services</h4>
                        <ul>
                            <li>Inclining Experiment Calculations</li>
                            <li>Weight Estimation and Weight Distribution Analysis</li>
                            <li>Deadweight Increase Studies for Various Vessel Types (including Container Vessels, Dry Cargo Ships, Multi-Purpose Vessels (MPV), Bulk Carriers, Tankers, Passenger Ships, Offshore Support Vessels (OSV), etc.), performed in accordance with applicable IMO regulations, Flag State requirements, and Classification Society Rules.</li>
                        </ul>
                    </div>

                    {/* Görsel 3 + hizmet listesi */}
                    <div className="eng-sol-block">
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/3.png`} alt="Ship sections and stability" width={900} height={500} />
                        </div>
                        <ul>
                            <li><strong>Stability Calculations &amp; Stability Booklets</strong> (Intact, Damage, Bulk Cargo, Grain, Heavy Lift, Special Purpose Vessels, etc.)</li>
                            <li>Load Master Development for Ships</li>
                            <li>Seakeeping &amp; Manoeuvring Calculations</li>
                            <li>Dynamic Positioning (DP) Calculations</li>
                            <li><strong>Freeboard &amp; Tonnage Calculations</strong> (ICLL 66/88 and ITC 69 compliance)</li>
                            <li>Model Tank Testing</li>
                            <li><strong>Ballast Water Management Plan (BWMP) Preparation</strong> (in compliance with IMO Ballast Water Management Convention)</li>
                            <li>Hull Structure Calculations</li>
                        </ul>
                    </div>

                    {/* Görsel 4 + 3D FEM */}
                    <div className="eng-sol-block">
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/4.png`} alt="3D FEM Hull Analysis" width={900} height={500} />
                        </div>
                        <ul>
                            <li>3D FEM Hull Analysis</li>
                        </ul>
                    </div>

                    {/* Hatch Cover + görsel 5 & 6 + ek hizmetler */}
                    <div className="eng-sol-block">
                        <ul>
                            <li>Hatch Cover Strength Analysis</li>
                        </ul>
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/5.png`} alt="Hatch cover strength analysis" width={900} height={500} />
                        </div>
                        <div className="eng-sol-img-wrap">
                            <Image src={`${SERVICES_IMG}/6.png`} alt="Structural analysis" width={900} height={500} />
                        </div>
                        <ul>
                            <li>Fuel Consumption and Energy Efficiency Analysis (supporting EEDI / EEXI / CII requirements)</li>
                            <li>Ballast Water Treatment System Modification &amp; Installation</li>
                            <li>3D Modelling and Rendering Visualization</li>
                            <li>Workshop Documentation &amp; Technical Drawings</li>
                        </ul>
                    </div>

                    {/* Kapanış paragrafları */}
                    <div className="eng-sol-block eng-sol-closing">
                        <hr className="eng-sol-divider" />
                        <p>
                            We provide specialized marine engineering services focused on safety, performance, and regulatory compliance. By combining technical expertise with practical experience, we deliver precise and efficient solutions tailored to our clients&apos; operational needs.
                        </p>
                        <p>
                            We would be happy to discuss details and share some case studies in case you need more details.
                        </p>
                        <p style={{ marginTop: '32px' }}>
                            <Link href="/engineering-consultancy" className="btn btn3">
                                ← Back to Consultancy Services
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .engineering-solutions-page .container { max-width: 900px; }
                .eng-sol-main-title {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--theme-color, #0066cc);
                    margin-bottom: 28px;
                    margin-top: 0;
                }
                .eng-sol-block {
                    margin-bottom: 36px;
                }
                .eng-sol-block p {
                    margin-bottom: 20px;
                    color: #4b5563;
                    line-height: 1.7;
                    text-align: justify;
                }
                .eng-sol-img-wrap {
                    width: 100%;
                    margin-bottom: 24px;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .eng-sol-img-wrap img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .eng-sol-subtitle {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 24px 0 12px 0;
                }
                .engineering-solutions-page ul {
                    margin: 15px 0 20px 0;
                    padding-left: 20px;
                    list-style: none;
                }
                .engineering-solutions-page ul li {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 10px;
                    color: #4b5563;
                    line-height: 1.6;
                }
                .engineering-solutions-page ul li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--theme-color, #0066cc);
                    font-weight: bold;
                    font-size: 18px;
                }
                .eng-sol-divider {
                    border: none;
                    border-top: 1px solid #e5e7eb;
                    margin: 32px 0 24px 0;
                }
                .eng-sol-closing p:last-of-type { margin-bottom: 0; }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}
