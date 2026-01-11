"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    // Company dropdown menu state
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
    // Services dropdown menu state
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const router = useRouter();

    // Close mobile menu
    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    }

    // Navigate reliably on mobile then close the menu
    const handleNavigate = (path) => {
        router.push(path);
        setIsMenuOpen(false);
    }

    // Hard redirect helper for stubborn cases (full reload)
    const handleHardNavigate = (path) => {
        if (typeof window !== 'undefined') {
            window.location.href = path;
        }
        setIsMenuOpen(false);
    }

    // Menu styles for company submenu
    const [companyMenuStyle, setCompanyMenuStyle] = useState({
        opacity: 0,
        transition: 'opacity 0.5s ease',
        display: 'none',
    });

    // Menu styles for services submenu
    const [servicesMenuStyle, setServicesMenuStyle] = useState({
        opacity: 0,
        transition: 'opacity 0.5s ease',
        display: 'none',
    });

    // Company submenu toggle
    useEffect(() => {
        if (isCompanyMenuOpen) {
            setCompanyMenuStyle((prevStyle) => ({
                ...prevStyle,
                display: 'block',
            }));
            setTimeout(() => {
                setCompanyMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    opacity: 1,
                }));
            }, 100);
        } else {
            setCompanyMenuStyle((prevStyle) => ({
                ...prevStyle,
                opacity: 0,
            }));
            setTimeout(() => {
                setCompanyMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    display: 'none',
                }));
            }, 300);
        }
    }, [isCompanyMenuOpen]);

    // Services submenu toggle
    useEffect(() => {
        if (isServicesMenuOpen) {
            setServicesMenuStyle((prevStyle) => ({
                ...prevStyle,
                display: 'block',
            }));
            setTimeout(() => {
                setServicesMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    opacity: 1,
                }));
            }, 100);
        } else {
            setServicesMenuStyle((prevStyle) => ({
                ...prevStyle,
                opacity: 0,
            }));
            setTimeout(() => {
                setServicesMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    display: 'none',
                }));
            }, 300);
        }
    }, [isServicesMenuOpen]);
    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'body-visible' : ''}`}>
                <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/">
                        <Image src="/main-assets/image/logo.svg?v=marine" alt="Task-in Marine" width={120} height={60} />
                    </Link>
                    <button onClick={handleMobileMenuClose} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><Link href="/" onClick={() => handleNavigate("/")}>HOME</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isCompanyMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={(e) => { e.preventDefault(); setIsCompanyMenuOpen(!isCompanyMenuOpen); }} href="#">COMPANY <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isCompanyMenuOpen ? 'menu-open' : ''}`} style={companyMenuStyle}>
                                <li><Link href="/about" onClick={() => handleNavigate("/about")}>About Us</Link></li>
                                <li><Link href="/team" onClick={() => handleNavigate("/team")}>Our Team</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isServicesMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={(e) => { e.preventDefault(); setIsServicesMenuOpen(!isServicesMenuOpen); }} href="#">SERVICES <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class mobile-mega-menu ${isServicesMenuOpen ? 'menu-open' : ''}`} style={servicesMenuStyle}>
                                <li>
                                    <div className="mobile-mega-menu-content">
                                        <div className="mobile-mega-menu-column">
                                            <h6 className="mobile-mega-menu-title"><Link href="/engineering-consultancy" onClick={() => handleNavigate("/engineering-consultancy")}>ENGINEERING & SHIP OPERATION CONSULTANCY SERVICES</Link></h6>
                                            <ul>
                                                <li><Link href="/services#remote-tanker" onClick={() => handleNavigate("/services#remote-tanker")}>Remote Tanker Advisory Services</Link></li>
                                                <li><Link href="/services#crude-oil" onClick={() => handleNavigate("/services#crude-oil")}>Crude Oil & Product Tankers</Link></li>
                                                <li><Link href="/services#chemical" onClick={() => handleNavigate("/services#chemical")}>Chemical Tankers</Link></li>
                                                <li><Link href="/services#cement" onClick={() => handleNavigate("/services#cement")}>Cement in Bulk</Link></li>
                                                <li><Link href="/services#coal" onClick={() => handleNavigate("/services#coal")}>Coal in Bulk</Link></li>
                                                <li><Link href="/services#minerals" onClick={() => handleNavigate("/services#minerals")}>Minerals, Ores and Concentrates</Link></li>
                                                <li><Link href="/services#fertilizers" onClick={() => handleNavigate("/services#fertilizers")}>Fertilizers (All Grades)</Link></li>
                                                <li><Link href="/services#liquefaction" onClick={() => handleNavigate("/services#liquefaction")}>Liquefaction of Solid Bulk Cargoes</Link></li>
                                                <li><Link href="/services#grain" onClick={() => handleNavigate("/services#grain")}>Grain Cargo</Link></li>
                                                <li><Link href="/services#steel" onClick={() => handleNavigate("/services#steel")}>Steel Cargo</Link></li>
                                                <li><Link href="/services#containers" onClick={() => handleNavigate("/services#containers")}>Containers</Link></li>
                                                <li><Link href="/services#roro" onClick={() => handleNavigate("/services#roro")}>RORO and PCTC</Link></li>
                                                <li><Link href="/services#heavy-lift" onClick={() => handleNavigate("/services#heavy-lift")}>Heavy Lift - Project Cargo</Link></li>
                                            </ul>
                                        </div>
                                        <div className="mobile-mega-menu-column">
                                            <h6 className="mobile-mega-menu-title"><Link href="/survey-audit-owner-representation" onClick={() => handleNavigate("/survey-audit-owner-representation")}>SURVEY AUDIT & OWNER REPRESENTATION</Link></h6>
                                            <ul>
                                                <li><Link href="/services#condition-surveys" onClick={() => handleNavigate("/services#condition-surveys")}>Condition Surveys</Link></li>
                                                <li><Link href="/services#pre-purchase" onClick={() => handleNavigate("/services#pre-purchase")}>Pre-Purchase Inspection</Link></li>
                                                <li><Link href="/services#trip-tow" onClick={() => handleNavigate("/services#trip-tow")}>Trip & Tow Survey</Link></li>
                                                <li><Link href="/services#on-off-hire" onClick={() => handleNavigate("/services#on-off-hire")}>On-Hire/Off-Hire Survey</Link></li>
                                                <li><Link href="/services#bunker" onClick={() => handleNavigate("/services#bunker")}>Bunker Quantity Survey</Link></li>
                                                <li><Link href="/services#draft" onClick={() => handleNavigate("/services#draft")}>Draft Survey</Link></li>
                                                <li><Link href="/services#collision" onClick={() => handleNavigate("/services#collision")}>Collision and Grounding</Link></li>
                                                <li><Link href="/services#marine-audits" onClick={() => handleNavigate("/services#marine-audits")}>Marine Audits</Link></li>
                                                <li><Link href="/services#navigation-audits" onClick={() => handleNavigate("/services#navigation-audits")}>Navigation Audits</Link></li>
                                                <li><Link href="/services#mooring-audits" onClick={() => handleNavigate("/services#mooring-audits")}>Mooring Audits</Link></li>
                                                <li><Link href="/services#marpol" onClick={() => handleNavigate("/services#marpol")}>MARPOL Investigation & Environmental Compliance</Link></li>
                                            </ul>
                                        </div>
                                        <div className="mobile-mega-menu-column">
                                            <h6 className="mobile-mega-menu-title"><Link href="/maintenance-repair" onClick={() => handleNavigate("/maintenance-repair")}>MAINTENANCE, REPAIR & SPARE PARTS SUPPLY</Link></h6>
                                            <ul>
                                                {/* Maintenance & Repair services will be added here */}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/locations" onClick={() => handleNavigate("/locations")}>LOCATIONS</Link></li>
                        <li><Link href="/contact" onClick={() => handleNavigate("/contact")}>CONTACT</Link></li>
                    </ul>
                    <style jsx>{`
                        .mobile-mega-menu-content {
                            padding: 15px 0;
                        }
                        .mobile-mega-menu-column {
                            margin-bottom: 25px;
                        }
                        .mobile-mega-menu-column:last-child {
                            margin-bottom: 0;
                        }
                        .mobile-mega-menu-title {
                            font-size: 11px;
                            font-weight: 700;
                            color: var(--theme-color, #0066cc);
                            margin-bottom: 12px;
                            padding-bottom: 8px;
                            border-bottom: 1px solid #e5e7eb;
                            text-transform: uppercase;
                            letter-spacing: 0.3px;
                            line-height: 1.4;
                        }
                        .mobile-mega-menu-title a {
                            color: inherit;
                            text-decoration: none;
                            display: inline-block;
                        }
                        .mobile-mega-menu-title a:hover {
                            color: var(--theme-color, #004a99);
                        }
                        .mobile-mega-menu-column ul {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                        }
                        .mobile-mega-menu-column ul li {
                            margin-bottom: 8px;
                        }
                        .mobile-mega-menu-column ul li a {
                            display: block;
                            padding: 5px 8px;
                            font-size: 13px;
                            font-weight: 400;
                            color: #4b5563;
                            text-decoration: none;
                            line-height: 1.5;
                            border-radius: 4px;
                            transition: all 0.2s ease;
                        }
                        .mobile-mega-menu-column ul li a:hover {
                            color: var(--theme-color, #0066cc);
                            background: #f0f9ff;
                            padding-left: 12px;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;