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

import Link from "next/link";

const consultancyServices = [
    { title: "Engineering Solutions", href: "/engineering-consultancy/engineering-solutions", icon: "ri-cpu-line" },
    { title: "Safety & Training", href: "/engineering-consultancy/safety-training", icon: "ri-shield-check-line" },
    { title: "Ship Operation, Environmental and Optimization Consultancy", href: "/engineering-consultancy/ship-operation", icon: "ri-ship-line" },
    { title: "Sale & Purchase Services", href: "/engineering-consultancy/sale-purchase", icon: "ri-exchange-line" },
];

export default function EngineeringConsultancyPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ENGINEERING & SHIP OPERATION CONSULTANCY SERVICES" bgImage="/main-assets/image/about-bg.jpg" />
            {/* Hizmet kutuları - Services sayfasındaki gibi */}
            <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
                <div className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                    <div className="row g-4 justify-content-center">
                        {consultancyServices.map((service) => (
                            <div key={service.title} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <Link href={service.href} className="service-icon-card consultancy-service-card">
                                    <div className="service-icon-wrapper">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h4 className="service-icon-title">{service.title}</h4>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                /* Consultancy service kutuları - services sayfası ile aynı stil */
                .consultancy-service-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 40px 20px;
                    background: #ffffff;
                    border-radius: 16px;
                    border: 2px solid #e5e7eb;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    height: 100%;
                    min-height: 220px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                }
                .consultancy-service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.6s;
                }
                .consultancy-service-card:hover::before {
                    left: 100%;
                }
                .consultancy-service-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--theme-color, #0066cc);
                    box-shadow: 0 12px 32px rgba(0, 102, 204, 0.15);
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                }
                .consultancy-service-card .service-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                    border-radius: 20px;
                    margin-bottom: 24px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .consultancy-service-card .service-icon-wrapper::after {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 20px;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--theme-color, #0066cc), #00a8ff);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s;
                }
                .consultancy-service-card:hover .service-icon-wrapper::after {
                    opacity: 1;
                }
                .consultancy-service-card .service-icon-wrapper i {
                    font-size: 40px;
                    color: var(--theme-color, #0066cc);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 1;
                }
                .consultancy-service-card:hover .service-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                }
                .consultancy-service-card:hover .service-icon-wrapper i {
                    transform: scale(1.15);
                    color: #0052a3;
                }
                .consultancy-service-card .service-icon-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1f2937;
                    text-align: center;
                    margin: 0;
                    line-height: 1.5;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 1;
                }
                .consultancy-service-card:hover .service-icon-title {
                    color: var(--theme-color, #0066cc);
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .consultancy-service-card {
                        min-height: 200px;
                        padding: 30px 15px;
                    }
                    .consultancy-service-card .service-icon-wrapper {
                        width: 70px;
                        height: 70px;
                        margin-bottom: 20px;
                    }
                    .consultancy-service-card .service-icon-wrapper i {
                        font-size: 36px;
                    }
                    .consultancy-service-card .service-icon-title {
                        font-size: 14px;
                    }
                }
                @media (max-width: 576px) {
                    .consultancy-service-card {
                        min-height: 180px;
                        padding: 25px 15px;
                    }
                }
            `}</style>
            <FooterThree />
            <Scroll />
        </div>
    );
}

