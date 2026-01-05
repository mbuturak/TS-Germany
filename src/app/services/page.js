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
import Slider from "react-slick";

export default function ServicesPage() {
    const services = [
        // MARINE SURVEY alt başlıkları
        {
            title: "Condition Surveys",
            href: "#",
            icon: "ri-file-search-line",
        },
        {
            title: "Pre-Purchase Inspection",
            href: "#",
            icon: "ri-eye-line",
        },
        {
            title: "Trip & Tow Survey",
            href: "#",
            icon: "ri-globe-line",
        },
        {
            title: "On-Hire/Off-Hire Survey",
            href: "#",
            icon: "ri-calendar-check-line",
        },
        {
            title: "Bunker Quantity Survey",
            href: "#",
            icon: "ri-gas-station-line",
        },
        {
            title: "Draft Survey",
            href: "#",
            icon: "ri-ruler-line",
        },
        {
            title: "Collision and Grounding",
            href: "#",
            icon: "ri-alert-line",
        },
        // COMPLIANCE AUDITS alt başlıkları
        {
            title: "Marine Audits",
            href: "#",
            icon: "ri-file-list-3-line",
        },
        {
            title: "Navigation Audits",
            href: "#",
            icon: "ri-compass-3-line",
        },
        {
            title: "Mooring Audits",
            href: "#",
            icon: "ri-anchor-line",
        },
        {
            title: "MARPOL Investigation & Environmental Compliance",
            href: "#",
            icon: "ri-leaf-line",
        },
        // LIQUID/GAS CARGO EXPERTS alt başlıkları
        {
            title: "Crude Oil & Product Tankers",
            href: "#",
            icon: "ri-oil-line",
        },
        {
            title: "Chemical Tankers",
            href: "#",
            icon: "ri-flask-line",
        },
        {
            title: "Gas Tankers - LNG & LPG",
            href: "#",
            icon: "ri-fire-line",
        },
        {
            title: "Cargo Contamination and Claims Investigation",
            href: "#",
            icon: "ri-file-warning-line",
        },
        {
            title: "Remote Tanker Advisory Services",
            href: "#",
            icon: "ri-wifi-line",
        },
        // CARGO EXPERTISE alt başlıkları
        {
            title: "Cement in Bulk",
            href: "#",
            icon: "ri-building-line",
        },
        {
            title: "Coal in Bulk",
            href: "#",
            icon: "ri-stack-line",
        },
        {
            title: "Minerals, Ores and Concentrates",
            href: "#",
            icon: "ri-flask-line",
        },
        {
            title: "Fertilizers (All Grades)",
            href: "#",
            icon: "ri-plant-line",
        },
        {
            title: "Liquefaction of Solid Bulk Cargoes",
            href: "#",
            icon: "ri-water-percent-line",
        },
        {
            title: "Grain Cargo",
            href: "#",
            icon: "ri-seedling-line",
        },
        {
            title: "Steel Cargo",
            href: "#",
            icon: "ri-hammer-line",
        },
        {
            title: "Containers",
            href: "#",
            icon: "ri-safe-line",
        },
        {
            title: "RORO and PCTC",
            href: "#",
            icon: "ri-truck-line",
        },
        {
            title: "Heavy Lift - Project Cargo",
            href: "#",
            icon: "ri-weight-fill",
        },
    ];

    // Servisleri 8'li gruplara ayır (4 kolon x 2 sıra)
    const servicesPerSlide = 8;
    const serviceSlides = [];
    for (let i = 0; i < services.length; i += servicesPerSlide) {
        serviceSlides.push(services.slice(i, i + servicesPerSlide));
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                type="button"
                className={`${className} services-next-arrow`}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#ffffff",
                    color: "var(--theme-color, #0066cc)",
                    position: "absolute",
                    right: -28,
                    top: "50%",
                    marginTop: 0,
                    transform: "translateY(-50%)",
                    boxShadow: "0 4px 20px rgba(0, 102, 204, 0.2)",
                    zIndex: 10,
                    border: "2px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    outline: "none",
                }}
                onClick={onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(0, 102, 204, 0.35)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                    e.currentTarget.style.top = "50%";
                    e.currentTarget.style.marginTop = "0";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 102, 204, 0.2)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                    e.currentTarget.style.top = "50%";
                    e.currentTarget.style.marginTop = "0";
                }}
            >
                <i className="ri-arrow-right-line" style={{ fontSize: "20px", fontWeight: "bold" }}></i>
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                type="button"
                className={`${className} services-prev-arrow`}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#ffffff",
                    color: "var(--theme-color, #0066cc)",
                    position: "absolute",
                    left: -28,
                    top: "50%",
                    marginTop: 0,
                    transform: "translateY(-50%)",
                    boxShadow: "0 4px 20px rgba(0, 102, 204, 0.2)",
                    zIndex: 10,
                    border: "2px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    outline: "none",
                }}
                onClick={onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(0, 102, 204, 0.35)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                    e.currentTarget.style.top = "50%";
                    e.currentTarget.style.marginTop = "0";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "var(--theme-color, #0066cc)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 102, 204, 0.2)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                    e.currentTarget.style.top = "50%";
                    e.currentTarget.style.marginTop = "0";
                }}
            >
                <i className="ri-arrow-left-line" style={{ fontSize: "20px", fontWeight: "bold" }}></i>
            </button>
        );
    }

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
                    <div className="services-slider-wrapper" style={{ position: "relative" }}>
                        <Slider {...sliderSettings} className="services-carousel">
                            {serviceSlides.map((slideServices, slideIndex) => (
                                <div key={slideIndex} className="service-slide">
                                    <div className="row g-4">
                                        {slideServices.map((service, index) => (
                                            <div key={service.title} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                                <Link href={service.href} className="service-icon-card">
                                                    <div className="service-icon-wrapper">
                                                        <i className={service.icon}></i>
                                                    </div>
                                                    <h4 className="service-icon-title">{service.title}</h4>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <FooterThree />
            <Scroll />
            <style jsx global>{`
                .services-slider-wrapper {
                    padding: 0 80px;
                    position: relative;
                }

                .services-slider-wrapper .slick-list {
                    position: relative;
                }

                .services-slider-wrapper .slick-track {
                    display: flex;
                    align-items: stretch;
                }

                .services-carousel .services-next-arrow,
                .services-carousel .services-prev-arrow {
                    opacity: 1 !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    margin-top: 0 !important;
                }

                .services-carousel .services-next-arrow:hover,
                .services-carousel .services-prev-arrow:hover {
                    transform: translateY(-50%) scale(1.1) !important;
                }

                .services-carousel .services-next-arrow.slick-disabled,
                .services-carousel .services-prev-arrow.slick-disabled {
                    opacity: 0.4 !important;
                    cursor: not-allowed;
                }

                @media (max-width: 1200px) {
                    .services-slider-wrapper {
                        padding: 0 70px;
                    }
                    
                    .services-carousel .services-next-arrow {
                        right: -20px;
                    }
                    
                    .services-carousel .services-prev-arrow {
                        left: -20px;
                    }
                }

                @media (max-width: 768px) {
                    .services-slider-wrapper {
                        padding: 0 60px;
                    }
                    
                    .services-carousel .services-next-arrow,
                    .services-carousel .services-prev-arrow {
                        width: 48px;
                        height: 48px;
                    }
                    
                    .services-carousel .services-next-arrow {
                        right: -15px;
                    }
                    
                    .services-carousel .services-prev-arrow {
                        left: -15px;
                    }
                }

                @media (max-width: 576px) {
                    .services-slider-wrapper {
                        padding: 0 50px;
                    }
                    
                    .services-carousel .services-next-arrow,
                    .services-carousel .services-prev-arrow {
                        width: 44px;
                        height: 44px;
                    }
                    
                    .services-carousel .services-next-arrow i,
                    .services-carousel .services-prev-arrow i {
                        font-size: 18px;
                    }
                }

                .services-carousel .slick-dots {
                    bottom: -50px;
                }

                .services-carousel .slick-dots li button:before {
                    font-size: 12px;
                    color: var(--theme-color, #0066cc);
                    opacity: 0.3;
                }

                .services-carousel .slick-dots li.slick-active button:before {
                    opacity: 1;
                    color: var(--theme-color, #0066cc);
                }

                .service-slide {
                    padding: 0 10px;
                }

                @media (max-width: 768px) {
                    .services-slider-wrapper {
                        padding: 0 50px;
                    }
                }

                @media (max-width: 576px) {
                    .services-slider-wrapper {
                        padding: 0 40px;
                    }
                }

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

                .service-icon-card:hover .service-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                }

                .service-icon-card:hover .service-icon-wrapper i {
                    transform: scale(1.15);
                    color: #0052a3;
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
