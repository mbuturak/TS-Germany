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
                                    We are a shipowner-oriented maritime engineering, technical services, and safety solutions company established by professionals with extensive experience at sea, in shipyards, and within naval architecture and design offices. Our team is composed of Ship Masters, Marine Engineers, and Naval Architects who have been directly involved in vessel operations, technical management, newbuildings, dry-dockings, repairs, and regulatory compliance throughout their careers.
                                </p>

                                <p>
                                    Our core strength is derived from Task-in Baltic Services, our Rotterdam-based operational company that has been actively serving the maritime sector for many years. This well-established in-service organization forms the backbone of our technical capability, operational know-how, and safety expertise. The experience gained through Task-in Baltic Services allows us to deliver solutions that are practical, proven, and fully aligned with real shipboard and shipyard conditions.
                                </p>

                                <p>
                                    Building on this strong operational foundation, we decided to expand our scope into comprehensive marine solutions by bringing together senior professionals with decades of hands-on experience.
                                </p>

                                <p>
                                    Alper Kabaca, who has served for many years at sea as a Marine Engineer and later held key roles as QHSE & Technical Manager and Designated Person Ashore (DPA), contributes extensive expertise in technical management systems, safety culture, and regulatory compliance.
                                </p>

                                <p>
                                    He is joined by Egemen Bal, who has sailed for many years as a Tanker Vessel Master and subsequently held senior managerial positions in an international company specializing in LSA and FFE services, adding deep operational and safety expertise, particularly within tanker operations and life-saving and firefighting systems.
                                </p>

                                <p>
                                    With operational branches in Rotterdam / Netherlands, Hamburg / Germany, and Hollola / Finland, we provide fast-response technical services across Europe and the Middle East. We act as a technical extension of shipowners' organizations, fully understanding their priorities: asset protection, safety, compliance, cost efficiency, and uninterrupted vessel operation.
                                </p>

                                <p>
                                    Our services are structured under three main pillars:
                                </p>

                                <h3><b>Engineering & Consultancy</b></h3>

                                <p>
                                    We provide independent engineering and technical consultancy services including vessel modifications, retrofits, feasibility studies, technical evaluations, and class and flag compliance support.
                                </p>

                                <p>
                                    In addition, we offer specialized FFE, LSA, and maritime safety consultancy services. Through our Rotterdam-based LSA training center, we deliver:
                                </p>

                                <ul>
                                    <li>Practical firefighting training on board vessels and at shore-based facilities</li>
                                    <li>LSA and FFE equipment operation and maintenance training</li>
                                    <li>Safety system consultancy, procedures development, and implementation support</li>
                                </ul>

                                <p>
                                    These services are designed to strengthen onboard safety culture while ensuring full compliance with SOLAS, class, and flag state requirements.
                                </p>

                                <h3><b>Survey, Audit & Shipowner Representation</b></h3>

                                <p>
                                    We act as the shipowner's technical representative during condition surveys, pre-purchase inspections, class and statutory audits, newbuilding supervision, conversions, and repair projects. Our role is to safeguard the shipowner's technical and commercial interests by ensuring quality control, technical accuracy, schedule adherence, and cost transparency.
                                </p>

                                <h3><b>Maintenance, Repair & Spare Parts Supply</b></h3>

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