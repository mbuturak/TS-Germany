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
                                    We support shipowners with planned and corrective maintenance, dry-docking management, damage repairs, and technical troubleshooting. Our shipyard and seagoing background enables us to manage repair scopes efficiently, minimize off-hire time, and ensure compliance with class and flag requirements.
                                </p>

                                <p>
                                    As part of our maintenance and repair services, we also provide spare parts supply, including sourcing, technical verification, and timely delivery of critical components. This integrated approach allows shipowners to manage maintenance, repairs, and spare parts procurement through a single, reliable technical partner.
                                </p>

                                <p>
                                    By combining seagoing experience, engineering expertise, shipyard know-how, safety specialization, and the strong operational foundation of Task-in Baltic Services, we deliver technically sound, implementation-driven solutions. We position ourselves as a long-term technical and safety partner for shipowners focused on reliable, compliant, and sustainable vessel operations.
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