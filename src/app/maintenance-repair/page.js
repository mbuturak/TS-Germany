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

export default function MaintenanceRepairPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="MAINTENANCE & REPAIR" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-start flex-row-reverse">
                        <div className="col-xl-12">
                            <div className="title-area" style={{ paddingTop: '0' }}>
                                <p>
                                    We provide comprehensive maintenance and repair services designed to ensure vessel reliability, operational continuity, and compliance with class and flag requirements. Our team, with extensive seagoing and shipyard experience, supports shipowners in all aspects of vessel upkeep, including planned maintenance, corrective repairs, dry-docking supervision, and technical troubleshooting.
                                </p>

                                <p>
                                    By acting as the shipowner's technical representative, we manage repair scopes efficiently, monitor quality control, ensure adherence to schedules, and minimize off-hire time. We coordinate with shipyards, suppliers, and classification societies to guarantee that all works meet regulatory and operational standards.
                                </p>

                                <p>
                                    In addition, we offer spare parts supply services to support uninterrupted vessel operation. Our services include sourcing, technical verification, and timely delivery of critical components. By integrating spare parts management with maintenance and repair planning, we provide shipowners with a single reliable partner to handle all technical and operational needs.
                                </p>

                                <p>
                                    With this combined approach, shipowners benefit from optimized maintenance, reduced downtime, cost control, and increased asset longevity, ensuring vessels remain safe, efficient, and commercially competitive.
                                </p>
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
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}