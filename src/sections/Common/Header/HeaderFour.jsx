"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";
import Image from "next/image";

const HeaderFour = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0); // Track viewport width for responsive slogan
    const sidebarRef = useRef(null);
    const pathname = usePathname();
    
    // When header becomes sticky, center the logo vertically
    const headerLogoStyle = isSticky
        ? { position: 'absolute', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }
        : undefined;


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Keep viewport width in state to adjust slogan size responsively
    useEffect(() => {
        const updateWidth = () => setViewportWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Determine slogan image size per breakpoints; keep aspect ratio of original 385x50
    const computeSloganWidth = () => {
        if (viewportWidth < 576) return 330;
        if (viewportWidth < 768) return 250;
        if (viewportWidth < 992) return 320;
        return 385;
    };
    
    const sloganWidth = computeSloganWidth();
    const sloganHeight = Math.round(sloganWidth * 50 / 385);
    const sloganRight = viewportWidth < 576 ? 0 : 20;


    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }
   

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSideBarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    // Auto-close any open mobile panels when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsSideBarOpen(false);
    }, [pathname]);

    return (
        <div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <header className="nav-header header-layout2">
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`} style={{ paddingTop: '0', paddingBottom: '0' }}>
                    {/* Main Menu Area */}
                    <div className="menu-area" style={{ position: 'relative', padding: '15px 0' }}>
                        {/* Keep logo centered vertically in sticky state */}
                        <div className="header-navbar-logo d-none d-lg-block" style={headerLogoStyle}>
                            <Link href="/"> <Image src="/main-assets/image/logo.svg?v=marine" alt="logo" width={155} height={100} /></Link>
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-between home-two-header-justify-content-extra">
                                {/* Hide mobile logo entirely; desktop logo above remains visible */}
                                <div className="col-auto d-none">
                                    <div className="header-logo">
                                        <Link href="/"><Image src="/main-assets/img/logo.svg?v=marine" alt="logo" width={120} height={60} /> </Link>
                                    </div>
                                </div>
                                <div className="col-auto ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li>
                                                <Link href="/">HOME</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">COMPANY</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/team">Our Team</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/services">SERVICES</Link>
                                                <ul className="sub-menu mega-menu">
                                                    <li>
                                                        <div className="mega-menu-content">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mega-menu-column">
                                                                        <h6 className="mega-menu-title"><Link href="/engineering-consultancy">ENGINEERING & SHIP OPERATION CONSULTANCY SERVICES</Link></h6>
                                                                        <ul>
                                                                            <li><Link href="/services#remote-tanker">Remote Tanker Advisory Services</Link></li>
                                                                            <li><Link href="/services#crude-oil">Crude Oil & Product Tankers</Link></li>
                                                                            <li><Link href="/services#chemical">Chemical Tankers</Link></li>
                                                                            <li><Link href="/services#cement">Cement in Bulk</Link></li>
                                                                            <li><Link href="/services#coal">Coal in Bulk</Link></li>
                                                                            <li><Link href="/services#minerals">Minerals, Ores and Concentrates</Link></li>
                                                                            <li><Link href="/services#fertilizers">Fertilizers (All Grades)</Link></li>
                                                                            <li><Link href="/services#liquefaction">Liquefaction of Solid Bulk Cargoes</Link></li>
                                                                            <li><Link href="/services#grain">Grain Cargo</Link></li>
                                                                            <li><Link href="/services#steel">Steel Cargo</Link></li>
                                                                            <li><Link href="/services#containers">Containers</Link></li>
                                                                            <li><Link href="/services#roro">RORO and PCTC</Link></li>
                                                                            <li><Link href="/services#heavy-lift">Heavy Lift - Project Cargo</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mega-menu-column">
                                                                        <h6 className="mega-menu-title"><Link href="/survey-audit-owner-representation">SURVEY AUDIT & OWNER REPRESENTATION</Link></h6>
                                                                        <ul>
                                                                            <li><Link href="/services#condition-surveys">Condition Surveys</Link></li>
                                                                            <li><Link href="/services#pre-purchase">Pre-Purchase Inspection</Link></li>
                                                                            <li><Link href="/services#trip-tow">Trip & Tow Survey</Link></li>
                                                                            <li><Link href="/services#on-off-hire">On-Hire/Off-Hire Survey</Link></li>
                                                                            <li><Link href="/services#bunker">Bunker Quantity Survey</Link></li>
                                                                            <li><Link href="/services#draft">Draft Survey</Link></li>
                                                                            <li><Link href="/services#collision">Collision and Grounding</Link></li>
                                                                            <li><Link href="/services#marine-audits">Marine Audits</Link></li>
                                                                            <li><Link href="/services#navigation-audits">Navigation Audits</Link></li>
                                                                            <li><Link href="/services#mooring-audits">Mooring Audits</Link></li>
                                                                            <li><Link href="/services#marpol">MARPOL Investigation & Environmental Compliance</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mega-menu-column">
                                                                        <h6 className="mega-menu-title"><Link href="/maintenance-repair">MAINTENANCE, REPAIR & SPARE PARTS SUPPLY</Link></h6>
                                                                        <ul>
                                                                            {/* Maintenance & Repair services will be added here */}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="/locations">LOCATIONS</Link></li>
                                            <li><Link href="/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn">
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <style jsx global>{`
                /* Mega Menu Container - Kompakt ve Okunaklı */
                .main-menu ul.sub-menu.mega-menu {
                    width: auto !important;
                    min-width: 1000px !important;
                    max-width: 1200px !important;
                    left: 50vw !important;
                    transform: translateX(-50%) translateY(-10px) scaleY(0) !important;
                    transform-origin: top center !important;
                    padding: 0 !important;
                    background: #ffffff !important;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
                    border-radius: 0 0 8px 8px !important;
                    border-top: 2px solid var(--theme-color, #0066cc) !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    margin-top: 0 !important;
                    z-index: 9999 !important;
                }

                .main-menu ul li:hover > ul.sub-menu.mega-menu {
                    transform: translateX(-50%) translateY(0) scaleY(1) !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                }

                .main-menu ul.sub-menu.mega-menu li {
                    display: block !important;
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }

                /* Mega Menu Content - Daha Kompakt */
                .mega-menu-content {
                    width: 100% !important;
                    padding: 25px 20px 20px 20px !important;
                }

                .mega-menu-content .row {
                    margin: 0 -10px !important;
                }

                .mega-menu-content .row > div {
                    padding: 0 10px !important;
                }

                /* Mega Menu Column */
                .mega-menu-column {
                    padding: 0 !important;
                    margin-bottom: 0 !important;
                }

                /* Category Title - Daha Kompakt */
                .mega-menu-title {
                    font-size: 11px !important;
                    font-weight: 700 !important;
                    color: var(--theme-color, #0066cc) !important;
                    margin-bottom: 12px !important;
                    padding-bottom: 8px !important;
                    border-bottom: 1px solid #e5e7eb !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.3px !important;
                    line-height: 1.4 !important;
                }
                .mega-menu-title a {
                    color: inherit !important;
                    text-decoration: none !important;
                    display: inline-block !important;
                }
                .mega-menu-title a:hover {
                    color: var(--theme-color, #004a99) !important;
                }

                /* Service Links List */
                .mega-menu-column ul {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 0 15px 0 !important;
                }

                .mega-menu-column ul:last-child {
                    margin-bottom: 0 !important;
                }

                .mega-menu-column ul li {
                    display: block !important;
                    margin: 0 0 4px 0 !important;
                    padding: 0 !important;
                }

                /* Service Link - Daha Kompakt */
                .mega-menu-column ul li a {
                    display: block !important;
                    padding: 5px 8px !important;
                    font-size: 13px !important;
                    font-weight: 400 !important;
                    color: #4b5563 !important;
                    text-transform: none !important;
                    transition: all 0.2s ease !important;
                    position: relative !important;
                    border-radius: 4px !important;
                    background: transparent !important;
                    text-decoration: none !important;
                    line-height: 1.4 !important;
                }

                .mega-menu-column ul li a:hover {
                    color: var(--theme-color, #0066cc) !important;
                    background: #f0f9ff !important;
                    padding-left: 12px !important;
                }

                /* Remove default sub-menu styles for mega menu */
                .main-menu ul.sub-menu.mega-menu a:before {
                    display: none !important;
                }

                /* Responsive Design */
                @media (max-width: 1199px) {
                    .main-menu ul.sub-menu.mega-menu {
                        min-width: calc(100vw - 40px) !important;
                        max-width: calc(100vw - 20px) !important;
                        left: 50vw !important;
                        transform: translateX(-50%) translateY(-10px) scaleY(0) !important;
                    }

                    .main-menu ul li:hover > ul.sub-menu.mega-menu {
                        transform: translateX(-50%) translateY(0) scaleY(1) !important;
                    }

                    .mega-menu-content {
                        padding: 20px 15px 20px 15px !important;
                    }

                    .mega-menu-content .row > div {
                        padding: 0 8px !important;
                    }

                    .mega-menu-column ul {
                        margin: 0 0 12px 0 !important;
                    }

                    .mega-menu-column ul li a {
                        padding: 4px 8px !important;
                        font-size: 12.5px !important;
                    }
                }

                @media (max-width: 1024px) {
                    .main-menu ul.sub-menu.mega-menu {
                        min-width: calc(100vw - 30px) !important;
                        max-width: calc(100vw - 10px) !important;
                        left: 50vw !important;
                        transform: translateX(-50%) translateY(-10px) scaleY(0) !important;
                    }

                    .main-menu ul li:hover > ul.sub-menu.mega-menu {
                        transform: translateX(-50%) translateY(0) scaleY(1) !important;
                    }

                    .mega-menu-content {
                        padding: 18px 12px 18px 12px !important;
                    }

                    .mega-menu-content .row {
                        margin: 0 -5px !important;
                    }

                    .mega-menu-content .row > div {
                        padding: 0 5px !important;
                    }

                    .mega-menu-column ul {
                        margin: 0 0 10px 0 !important;
                    }

                    .mega-menu-column ul li a {
                        padding: 3px 6px !important;
                        font-size: 12px !important;
                    }
                }

                @media (max-width: 991px) {
                    .main-menu ul.sub-menu.mega-menu {
                        position: static !important;
                        transform: none !important;
                        width: 100% !important;
                        min-width: auto !important;
                        max-width: 100% !important;
                        left: auto !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                        border-radius: 0 !important;
                        border-top: none !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                    }

                    .mega-menu-content {
                        padding: 20px 15px !important;
                    }

                    .mega-menu-column {
                        margin-bottom: 25px !important;
                    }

                    .mega-menu-content .row > div {
                        padding: 0 !important;
                        margin-bottom: 20px !important;
                    }
                }

                @media (max-width: 767px) {
                    .mega-menu-title {
                        font-size: 12px !important;
                        margin-bottom: 10px !important;
                    }

                    .mega-menu-column ul li a {
                        font-size: 12px !important;
                        padding: 5px 6px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default HeaderFour;