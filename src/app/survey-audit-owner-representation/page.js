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
                                <p>
                                    We provide independent survey, audit, and shipowner representation services designed to protect shipowners' technical and commercial interests. Our experienced surveyors and auditors operate on behalf of owners, managers, and charterers, delivering accurate assessments, regulatory compliance, and practical recommendations based on real operational conditions.
                                </p>

                                <h3><b>Condition Surveys</b></h3>

                                <p>
                                    We conduct detailed condition surveys to assess the overall technical and structural condition of vessels. Our surveys provide shipowners with a clear understanding of asset condition, maintenance status, and potential risks, supporting informed technical and commercial decision-making.
                                </p>

                                <h3><b>Pre-Purchase Inspection</b></h3>

                                <p>
                                    Our pre-purchase inspections offer an independent and comprehensive evaluation of vessels prior to acquisition. We identify technical deficiencies, compliance gaps, and operational risks, enabling shipowners and investors to accurately assess vessel value and future liabilities.
                                </p>

                                <h3><b>On-Hire / Off-Hire Survey</b></h3>

                                <p>
                                    We perform on-hire and off-hire surveys to document vessel condition at the commencement or completion of charter periods. Our objective assessments protect the interests of shipowners and charterers by clearly identifying damages, deficiencies, and responsibilities.
                                </p>

                                <h3><b>Bunker Quantity Survey</b></h3>

                                <p>
                                    Our bunker quantity surveys ensure accurate measurement of fuel quantities during bunkering operations. We protect shipowners and charterers by verifying delivered quantities, identifying discrepancies, and providing transparent, verifiable documentation.
                                </p>

                                <h3><b>Draft Survey</b></h3>

                                <p>
                                    We conduct draft surveys to determine cargo quantities with precision and reliability. Our experienced surveyors apply recognized methodologies to deliver accurate results, supporting commercial settlements and minimizing disputes.
                                </p>

                                <h3><b>Collision and Grounding</b></h3>

                                <p>
                                    We provide technical surveys and damage assessments following collision and grounding incidents. Our team supports shipowners with damage evaluation, repair recommendations, and liaison with class societies, insurers, and other stakeholders.
                                </p>

                                <h3><b>Marine Audits</b></h3>

                                <p>
                                    Our marine audits assess vessel operations, management systems, and onboard practices against industry standards and regulatory requirements. We help shipowners identify gaps, improve operational performance, and maintain compliance.
                                </p>

                                <h3><b>Navigation Audits</b></h3>

                                <p>
                                    We perform navigation audits focusing on bridge procedures, navigational equipment, passage planning, and compliance with international regulations. Our audits support safe navigation practices and risk reduction.
                                </p>

                                <h3><b>Mooring Audits</b></h3>

                                <p>
                                    Our mooring audits evaluate mooring arrangements, equipment condition, procedures, and crew competence. We help shipowners enhance mooring safety, reduce incidents, and comply with best industry practices.
                                </p>

                                <h3><b>MARPOL Investigation &amp; Environmental Compliance</b></h3>

                                <p>
                                    We provide support for MARPOL-related investigations and environmental compliance assessments. Our services include incident analysis, documentation review, corrective action development, and consultancy to ensure compliance with international environmental regulations.
                                </p>

                                <h3><b>Maintenance &amp; Repair</b></h3>

                                <p>
                                    We support shipowners with maintenance and repair services covering planned maintenance, damage repairs, dry-docking support, and technical troubleshooting. Acting as the shipowner's representative, we ensure repair works are executed efficiently, in compliance with class and flag requirements, while minimizing off-hire time and controlling costs.
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

