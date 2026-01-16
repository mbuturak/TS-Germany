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
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        {
            title: "ENGINEERING & SHIP OPERATION CONSULTANCY SERVICES",
            href: "/engineering-consultancy",
            icon: "ri-team-line",
        },
        {
            title: "SURVEY AUDIT & OWNER REPRESENTATION",
            href: "/survey-audit-owner-representation",
            icon: "ri-file-search-line",
        },
        {
            title: "MAINTENANCE, REPAIR & SPARE PARTS SUPPLY",
            href: "/maintenance-repair",
            icon: "ri-tools-line",
        },
        {
            title: "Services",
            href: "https://task-inservices.com",
            icon: "ri-service-line",
        },
    ];


    return (
        <>
            <HeaderFour />
            <Breadcumb title="OUR SERVICES" bgImage="/main-assets/image/services-bg.jpg" />
            <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="title-area text-center">
                                <p className="sec-text" style={{ lineHeight: '1.5', textAlign: 'center',marginTop:'50px'}}>
                                    We provide specialized marine engineering services focused on safety, performance, and regulatory compliance. By combining technical expertise with practical experience, we deliver precise and efficient solutions tailored to our clients’ operational needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '10px', marginBottom: '80px' }}>
                    <div className="row g-4 justify-content-center">
                        {services.map((service) => {
                            const isExternalLink = service.href.startsWith('http');
                            const LinkComponent = isExternalLink ? 'a' : Link;
                            const isServicesCard = service.title === 'Services';
                            const cardClassName = isServicesCard ? 'service-icon-card service-logo-card' : 'service-icon-card';
                            
                            const linkProps = isExternalLink 
                                ? { href: service.href, target: '_blank', rel: 'noopener noreferrer', className: cardClassName }
                                : { href: service.href, className: cardClassName };
                            
                            return (
                                <div key={service.title} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <LinkComponent {...linkProps}>
                                        <div className={`service-icon-wrapper ${isServicesCard ? 'service-logo-wrapper' : ''}`}>
                                            {isServicesCard ? (
                                                <Image 
                                                    src="/main-assets/image/taskin-services-logo.svg" 
                                                    alt="Task-in Services Logo" 
                                                    width={200} 
                                                    height={200}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            ) : (
                                                <i className={service.icon}></i>
                                            )}
                                        </div>
                                        {!isServicesCard && <h4 className="service-icon-title">{service.title}</h4>}
                                    </LinkComponent>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FooterThree />
            <Scroll />
            <style jsx global>{`

                .service-icon-card {
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

                .service-icon-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.6s;
                }

                .service-icon-card:hover::before {
                    left: 100%;
                }

                .service-icon-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--theme-color, #0066cc);
                    box-shadow: 0 12px 32px rgba(0, 102, 204, 0.15);
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                }

                .service-icon-wrapper {
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

                .service-icon-wrapper::after {
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

                .service-icon-card:hover .service-icon-wrapper::after {
                    opacity: 1;
                }

                .service-icon-wrapper i {
                    font-size: 40px;
                    color: var(--theme-color, #0066cc);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 1;
                }

                .service-icon-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 1;
                }

                .service-icon-card:hover .service-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                }

                .service-icon-card:hover .service-icon-wrapper i {
                    transform: scale(1.15);
                    color: #0052a3;
                }

                .service-icon-card:hover .service-icon-wrapper img {
                    transform: scale(1.15);
                }

                /* Services logo için özel stiller */
                .service-logo-wrapper {
                    background: transparent !important;
                    width: 200px !important;
                    height: 200px !important;
                }

                .service-logo-wrapper::after {
                    display: none !important;
                }

                /* Services logo için hover efektlerini kaldır */
                .service-logo-card:hover .service-logo-wrapper {
                    background: transparent !important;
                    transform: none !important;
                    rotate: 0deg !important;
                }

                .service-logo-card:hover .service-logo-wrapper img {
                    transform: none !important;
                }

                .service-logo-wrapper img {
                    width: 200px !important;
                    height: 200px !important;
                }

                @media (max-width: 768px) {
                    .service-logo-wrapper {
                        width: 160px !important;
                        height: 160px !important;
                    }

                    .service-logo-wrapper img {
                        width: 160px !important;
                        height: 160px !important;
                    }
                }

                @media (max-width: 576px) {
                    .service-logo-wrapper {
                        width: 140px !important;
                        height: 140px !important;
                    }

                    .service-logo-wrapper img {
                        width: 140px !important;
                        height: 140px !important;
                    }
                }

                .service-icon-title {
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

                .service-icon-card:hover .service-icon-title {
                    color: var(--theme-color, #0066cc);
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .service-icon-card {
                        min-height: 200px;
                        padding: 30px 15px;
                    }

                    .service-icon-wrapper {
                        width: 70px;
                        height: 70px;
                        margin-bottom: 20px;
                    }

                    .service-icon-wrapper i {
                        font-size: 36px;
                    }

                    .service-icon-title {
                        font-size: 14px;
                    }
                }

                @media (max-width: 576px) {
                    .service-icon-card {
                        min-height: 180px;
                        padding: 25px 15px;
                    }
                }
            `}</style>
        </>
    );
}
