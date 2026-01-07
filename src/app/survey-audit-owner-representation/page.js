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

export default function SurveyAuditOwnerRepresentationPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="SURVEY AUDIT & OWNER REPRESENTATION" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start">
                        <div className="col-xl-6">
                            <div className="title-area survey-left" style={{ paddingTop: '0' }}>
                                <h4>Survey, Audit &amp; Owner Representation</h4>
                                <p>
                                    At Task-In Marine, we provide independent survey, audit, and shipowner representation services with a strong focus on quality assurance, risk management, environmental responsibility, and occupational health and safety.
                                </p>
                                <p>
                                    We represent shipowners during surveys, audits, newbuildings, conversions, and repair projects, ensuring that all activities are planned, controlled, and executed in compliance with applicable statutory requirements, class rules, contractual obligations, and international standards.
                                </p>
                                <p>
                                    Our structured approach is based on process control, continuous improvement, and evidence-based reporting, enabling early identification of technical non-conformities, safety risks, and environmental impacts. This allows corrective actions to be implemented efficiently, minimizing delays, rework, and operational disruptions.
                                </p>

                                <p><b>Scope of services:</b></p>
                                <ul className="survey-list">
                                    <li>Shipowner representation during newbuilding and conversion projects</li>
                                    <li>Pre-purchase, condition, and damage surveys</li>
                                    <li>Repair and dry-docking supervision and verification</li>
                                    <li>ISM, ISPS, and MLC audit preparation and support</li>
                                    <li>Class and flag state attendance and coordination</li>
                                    <li>Quality control inspections, progress monitoring, and punch-list management</li>
                                    <li>Technical reporting with objective findings and photographic evidence</li>
                                    <li>Internal audits</li>    
                                    <li>Pre- vetting inspection and audits</li>
                                </ul>

                                <p>
                                    All assignments are carried out with due consideration to safe working practices, hazard identification, risk assessment, and environmental protection, supporting our clients’ commitments to quality management (ISO 9001), environmental management (ISO 14001), and occupational health and safety management (ISO 45001).
                                </p>
                                <p>
                                    With experienced surveyors and a clear, documented methodology, Task-In Marine delivers consistent, compliant, and owner-focused oversight across every project stage.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-thumb2 survey-right" style={{ paddingTop: '0' }}>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/surveyaudit1.jpeg" alt="Survey & audit visual 1" width={1200} height={800} priority />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '24px' }}>
                                    <Image src="/main-assets/image/surveyaudit2.jpeg" alt="Survey & audit visual 2" width={1200} height={800} />
                                </div>
                                <div className="about-img-1" style={{ marginBottom: '0' }}>
                                    <Image src="/main-assets/image/surveyaudit3.jpeg" alt="Survey & audit visual 3" width={1200} height={800} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .title-area p {
                    margin-bottom: 20px;
                    color: #4b5563;
                    line-height: 1.7;
                }
                
                .title-area h3 {
                    margin-top: 0;
                    margin-bottom: 14px;
                    color: #0f172a;
                    font-size: 26px;
                    font-weight: 800;
                }
                
                .title-area h3:first-of-type {
                    margin-top: 20px;
                }
                
                .title-area ul {
                    margin: 15px 0 20px 0;
                    padding-left: 0;
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
                .survey-right .about-img-1 {
                    width: 100%;
                }
                .survey-right .about-img-1 img {
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

