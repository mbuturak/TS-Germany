'use client';
import Link from "next/link";
import CountUp from "react-countup";
const About = () => {
    return (
        <div className="about-area-2 space overflow-hidden shape-mockup-wrap no-anim-bar" id="about-sec">
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-img-1">
                                <img src="/main-assets/image/about_img.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <h3 className="sec-title">Marine Engineering, Survey & Advisory Services</h3>
                            <p className="sec-text">Our engineering company committed to delivering reliable, accurate, and innovative solutions to the maritime and offshore industries. With a strong technical foundation and a client-focused approach, we support shipowners, operators, and shipyards through every stage of a vessel’s lifecycle. Our work is based on internationally recognized standards and class society requirements, delivering precise analytical solutions for vessel design, modification, and operational performance.</p>
                        </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Mission</h4>
                                <p className="text">To provide consistent, accurate, and independent marine engineering and survey services that enhance safety, quality, environmental responsibility, and regulatory compliance, in line with ISO 9001, ISO 14001, and ISO 45001 principles.</p>
                            </div>
                        </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Vision</h4>
                                <p className="text">To be a trusted global marine partner, recognized for quality-driven performance, safe operations, and sustainable maritime solutions, contributing to safer seas and responsible shipping worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;