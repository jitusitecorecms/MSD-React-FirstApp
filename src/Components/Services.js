import React from "react";
import suppImg from '../Images/360.png'
import academyImg from '../Images/Academy.png'
import assistImg from '../Images/Assist.png'

const Services = () => {
  return (
            <section className="services-section" id="services">
                <h2>Our Services</h2>
                <div className="services-section-content">
                    <div className="service-item">
                        <h3>Sitecore 360 Support</h3>
                        <div className="service-block">
                            <img src={suppImg} alt="Sitecore 360 Support"></img>
                            <div>
                                <p>A fully managed Sitecore solution covering the entire development lifecycle—from presales and PoCs to production deployment and continuous optimization. Ensuring best practices, scalability, and ongoing enhancements, making your Sitecore platform future-ready.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                </div>
                <div className="service-item">
                        <h3>Sitecore Academy & Practice Setup</h3>
                        <div className="service-block">
                            <img src={academyImg} alt="Sitecore Academy & Practice Setup"></img>
                            <div>
                                <p>A full-service offering designed to help organizations train, recruit, and establish a Sitecore practice. We provide structured training programs, interview frameworks, and strategic guidance to build a strong Sitecore team from the ground up.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                </div>
                <div className="service-item">
                        <h3>Sitecore Expert Assist</h3>
                        <div className="service-block">
                            <img src={assistImg} alt="Sitecore Expert Assist"></img>
                            <div>
                                <p>From simple troubleshooting to resolving complex Sitecore challenges, provide on-demand support and guidance. Also mentor your team, ensuring they gain the skills needed to tackle Sitecore issues independently over time.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                </div>
                </div>
        </section>

  );
};

export default Services;
