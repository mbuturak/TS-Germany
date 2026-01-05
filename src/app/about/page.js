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

export default function AboutPage() {
    const kemalBoxHeight = 580;
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ABOUT US" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start flex-row-reverse">
                        <div className="col-xl-6">
                            <div className="about-thumb2" style={{ paddingTop: '0' }}>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-1.png" alt="About us" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-2.png" alt="About us" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-3.png" alt="About us" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/about-us-4.png" alt="About us" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '0' }}>
                                    <Image src="/main-assets/image/about-us-6.png" alt="About us" width={1200} height={800} priority />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area" style={{ paddingTop: '0' }}>
                                <h2 className="sec-title" style={{ marginBottom: '20px' }}>
                                    Engineering Services
                                </h2>
                                <p className="sec-text about-desc" style={{ lineHeight: '1.6', textAlign: 'justify', marginBottom: '24px' }}>
                                    Our expertise covers hydrostatics, stability, structural analysis, seakeeping, manoeuvring, and regulatory compliance. By applying proven engineering methodologies and modern computational tools, we support shipowners, operators, shipyards, and designers in achieving safe, efficient, and compliant vessel operations.
                                </p>
                                <p className="sec-text about-desc" style={{ lineHeight: '1.6', textAlign: 'justify', marginBottom: '20px' }}>
                                    Our engineering services are performed using recognized calculation methods, approved software tools, and applicable international standards, including SOLAS, MARPOL, the Intact and Damage Stability Codes, ICLL, and relevant Class Rules. We work closely with shipowners, operators, shipyards, and surveyors to ensure that all deliverables are suitable for Class and Flag approval.
                                </p>
                                <p className="sec-text about-desc" style={{ lineHeight: '1.6', textAlign: 'justify', marginBottom: '16px' }}>
                                    We offer our clients a comprehensive range of engineering services, including:
                                </p>
                                <ul className="engineering-services-list" style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '0 0 20px 0',
                                    lineHeight: '1.8'
                                }}>
                                    <li>Inclining Experiment Calculations</li>
                                    <li>Weight Estimation and Weight Distribution Analysis</li>
                                    <li>Deadweight Increase Studies for Various Vessel Types
                                        <span style={{ fontStyle: 'italic',marginTop:'3px' }}> <br/>(including Container Vessels, Dry Cargo Ships, Multi-Purpose Vessels (MPV), Bulk Carriers, Tankers, Passenger Ships, Offshore Support Vessels (OSV), etc.), performed in accordance with applicable IMO regulations, Flag State requirements, and Classification Society Rules.
                                        </span>
                                    </li>
                                    <li>Stability Calculations & Stability Booklets
                                    <span style={{ fontStyle: 'italic',marginTop:'3px' }}> <br/>(Intact, Damage, Bulk Cargo, Grain, Heavy Lift, Special Purpose Vessels, etc.)</span>
                                    </li>
                                    <li>Load Master Development for Ships</li>
                                    <li>Seakeeping & Manoeuvring Calculations</li>
                                    <li>Dynamic Positioning (DP) Calculations</li>
                                    <li>Freeboard & Tonnage Calculations
                                    <span style={{ fontStyle: 'italic',marginTop:'3px' }}> <br/>(ICLL 66/88 and ITC 69 compliance)</span>
                                    
                                    </li>
                                    <li>Model Tank Testing</li>
                                    <li>Ballast Water Management Plan (BWMP) Preparation
                                    <span style={{ fontStyle: 'italic',marginTop:'3px' }}> <br/>(in compliance with IMO Ballast Water Management Convention)</span>
                                    
                                    </li>
                                    <li>Hull Structure Calculations</li>
                                    <li>3D FEM Hull Analysis</li>
                                    <li>Hatch Cover Strength Analysis</li>
                                    <li>Fuel Consumption and Energy Efficiency Analysis <span style={{ fontStyle: 'italic',marginTop:'3px' }}> <br/>(supporting EEDI / EEXI / CII requirements)</span>
                                    </li>
                                    <li>Ballast Water Treatment System Modification & Installation</li>
                                    <li>3D Modelling and Rendering Visualization</li>
                                    <li>Workshop Documentation & Technical Drawings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .engineering-services-list li {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 8px;
                    color: #4b5563;
                }
                
                .engineering-services-list li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--theme-color, #0066cc);
                    font-weight: bold;
                    font-size: 18px;
                }
                
                .about-thumb2 .about-img-1 {
                    width: 100%;
                }
                
                .about-thumb2 .about-img-1 img {
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
