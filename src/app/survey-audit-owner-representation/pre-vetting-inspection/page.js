"use client";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/remixicon.css";

import Link from "next/link";

const POINTS = [
    "SMS implementation review",
    "Deck, engine room & accommodation condition assessment",
    "Crew familiarity verification",
    "Documentation & record cross-check",
    "High-risk observation identification",
    "Immediate corrective action guidance",
];

export default function PreVettingInspectionPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <HeaderFour />
            <Breadcumb title="PRE-VETTING INSPECTION (GENERAL)" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area survey-detail-left">
                                <h2 className="survey-detail-title">Pre-Vetting Inspection (General)</h2>
                                <p className="survey-detail-desc">
                                    Comprehensive onboard readiness assessment tailored to upcoming third-party inspections.
                                </p>
                                <ul className="survey-detail-list">
                                    {POINTS.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p className="survey-detail-tagline">
                                    We eliminate surprises and strengthen inspection confidence.
                                </p>
                                <p className="survey-detail-back">
                                    <Link href="/survey-audit-owner-representation" className="btn btn3">
                                        ← Back to Survey Audit & Owner Representation
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .survey-detail-left { padding: 40px 0 60px; text-align: left; }
                .survey-detail-title { font-size: 26px; font-weight: 800; color: var(--theme-color, #0066cc); margin-bottom: 16px; }
                .survey-detail-desc { color: #4b5563; line-height: 1.7; margin-bottom: 24px; }
                .survey-detail-list { list-style: none; padding-left: 20px; margin: 0 0 20px 0; }
                .survey-detail-list li { position: relative; padding-left: 24px; margin-bottom: 10px; color: #4b5563; line-height: 1.6; }
                .survey-detail-list li:before { content: "•"; position: absolute; left: 0; color: var(--theme-color, #0066cc); font-weight: bold; }
                .survey-detail-tagline { font-style: italic; color: #374151; margin-bottom: 32px; }
                .survey-detail-back { margin: 0; }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}
