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

import Link from "next/link";

const SECTIONS = [
    {
        id: 1,
        title: "Onboard Pre-Inspection Boarding",
        points: [
            "Attend vessel prior to scheduled inspection",
            "Sail with vessel if required",
            "Review SMS implementation in practice",
            "Verify documentation, maintenance status, and crew readiness",
        ],
    },
    {
        id: 2,
        title: "Full Mock RISQ Inspection",
        points: [
            "Simulated RightShip Inspection Ship Questionnaire (RISQ)",
            "Identification of high-risk observations",
            "Photographic evidence & structured reporting",
            "Immediate corrective action guidance",
        ],
        note: "We focus on eliminating \"surprise findings\" before the official inspector steps onboard.",
    },
    {
        id: 3,
        title: "High-Risk Observation Closure",
        points: [
            "Practical rectification support onboard",
            "Crew coaching & familiarization sessions",
            "SMS effectiveness verification",
            "Alignment with industry best practices",
        ],
    },
    {
        id: 4,
        title: "Continuous Rating Management",
        points: [
            "For vessels under long-term engagement:",
            "Trend analysis of recurring observations",
            "Preventive action planning",
            "Management summary reports",
            "Structured pathway toward sustainable 4/5 rating performance",
        ],
    },
];

const WHY_US = [
    "Master Mariner–led expertise",
    "Strong operational & tanker background",
    "Practical—not theoretical—SMS implementation",
    "Risk-based approach aligned with charterer expectations",
    "Onboard presence until the vessel is inspection-ready",
];

export default function RightShipPreInspectionPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <HeaderFour />
            <Breadcumb
                title="RIGHTSHIP PRE-INSPECTION READINESS"
                bgImage="/main-assets/image/services/rightship/2.jpeg"
            />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar rightship-page-wrap">
                <div className="container">
                    <div className="rightship-content-inner">
                        {/* Intro */}
                        <div className="rightship-intro-block">
                            <h2 className="rightship-hero-title">
                                Be Inspection-Ready. Be Charter-Ready.
                            </h2>
                            <p className="rightship-intro-text">
                                We prepare your vessel to achieve and maintain a 4–5 RightShip
                                rating. Through onboard attendance, mock inspections, and
                                structured gap closure, we ensure your ship is fully ready
                                before the official inspection takes place.
                            </p>
                            <p className="rightship-tagline">
                                Operational experience meets practical inspection strategy —
                                delivered onboard.
                            </p>
                        </div>

                        {/* Four sections: 2x2 grid (col-6 each) */}
                        <div className="row g-4 rightship-grid justify-content-center">
                            {SECTIONS.map((section) => (
                                <div key={section.id} className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
                                    <div className="rightship-section-card">
                                        <div className="title-area rightship-section">
                                            <h3>
                                                <span className="rightship-num">{section.id}.</span>{" "}
                                                {section.title}
                                            </h3>
                                            <ul>
                                                {section.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                            {section.note && (
                                                <p className="rightship-note">{section.note}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Why Work With Us */}
                        <div className="rightship-why-block">
                            <h3 className="rightship-why-title">Why Work With Us?</h3>
                            <ul className="rightship-why-list">
                                {WHY_US.map((item, i) => (
                                    <li key={i}>
                                        <span className="rightship-check">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Closing tagline */}
                        <div className="rightship-closing-block">
                            <p className="rightship-closing"><strong>Stay Ahead of Inspection.</strong></p>
                            <p className="rightship-closing"><strong>Protect Your Commercial Reputation.</strong></p>
                            <p className="rightship-closing"><strong>Secure Your Rating.</strong></p>
                        </div>

                        {/* Back link */}
                        <div className="rightship-back-block">
                            <Link href="/survey-audit-owner-representation" className="btn btn3">
                                ← Back to Survey Audit & Owner Representation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .rightship-page-wrap .container {
                    max-width: 1140px;
                }
                .rightship-content-inner {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 40px 15px 60px;
                }
                .rightship-intro-block {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .rightship-hero-title {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--theme-color, #0066cc);
                    margin-bottom: 20px;
                    line-height: 1.3;
                }
                .rightship-intro-text {
                    max-width: 720px;
                    margin: 0 auto 16px;
                    color: #4b5563;
                    line-height: 1.7;
                }
                .rightship-tagline {
                    margin: 0;
                    font-style: italic;
                    color: #374151;
                }
                .rightship-grid {
                    margin-bottom: 48px;
                }
                .rightship-section-card {
                    height: 100%;
                    background: #fff;
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
                }
                .rightship-section-card .title-area {
                    padding: 24px;
                }
                .rightship-section h3 {
                    margin-top: 0;
                    margin-bottom: 12px;
                    color: var(--theme-color, #0066cc);
                    font-size: 18px;
                    font-weight: 700;
                }
                .rightship-num {
                    color: var(--theme-color, #0066cc);
                }
                .rightship-section ul {
                    margin: 0 0 12px 0;
                    padding-left: 20px;
                    list-style: none;
                }
                .rightship-section ul li {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 8px;
                    color: #4b5563;
                    line-height: 1.6;
                }
                .rightship-section ul li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--theme-color, #0066cc);
                    font-weight: bold;
                    font-size: 18px;
                }
                .rightship-section p,
                .rightship-note {
                    margin: 12px 0 0;
                    color: #4b5563;
                    line-height: 1.6;
                }
                .rightship-note {
                    font-style: italic;
                }
                .rightship-why-block {
                    text-align: center;
                    margin-bottom: 48px;
                }
                .rightship-why-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: var(--theme-color, #0066cc);
                    margin-bottom: 20px;
                }
                .rightship-why-list {
                    list-style: none;
                    padding-left: 0;
                    margin: 0 auto;
                    max-width: 480px;
                    text-align: left;
                }
                .rightship-why-list li {
                    position: relative;
                    padding-left: 28px;
                    margin-bottom: 10px;
                    color: #4b5563;
                    line-height: 1.6;
                }
                .rightship-check {
                    position: absolute;
                    left: 0;
                    color: #059669;
                    font-weight: bold;
                }
                .rightship-closing-block {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .rightship-closing-block .rightship-closing {
                    font-size: 18px;
                    color: #1f2937;
                    margin-bottom: 8px;
                }
                .rightship-closing-block .rightship-closing:last-child {
                    margin-bottom: 0;
                }
                .rightship-back-block {
                    text-align: center;
                }
                @media (max-width: 991px) {
                    .rightship-content-inner {
                        padding: 32px 15px 48px;
                    }
                    .rightship-intro-block {
                        margin-bottom: 36px;
                    }
                    .rightship-grid {
                        margin-bottom: 36px;
                    }
                    .rightship-section-card .title-area {
                        padding: 20px;
                    }
                    .rightship-why-block {
                        margin-bottom: 36px;
                    }
                }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}
