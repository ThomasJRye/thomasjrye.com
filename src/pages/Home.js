import React from 'react';
import './Home.css';
import headshot from './images/HeadShot.jpg';

const Home = () => {
    return (
        <div className="home-background">
            <div className="home-container">
                <div className="home-text-container">
                    {/* Personal Information Section */}
                    <section className="personal-info">
                        <img src={headshot} alt="Thomas J. Rye" className="headshot" />
                        <h1 className="headline">Thomas J. Rye</h1>
                        <p className="sub-headline">Full-Stack Developer | Oslo, Norway</p>
                        <div className="skills-location">
                            <div className="column" id="skills">
                                <h3>Technologies I specialize in:</h3>
                                <p>
                                    Python, JavaScript, PHP, Rust | React, Laravel, FastAPI, Node | Azure Certified, AWS
                                </p>
                            </div>
                            <div className="column" id="location-contact">
                                <h3>Location:</h3>
                                <p>Oslo, Norway</p>
                                <h3>Contact:</h3>
                                <p>thomasjrye@gmail.com, github.com/ThomasJRye, thomasjrye.com, LinkedIn</p>
                            </div>
                        </div>
                    </section>

                    <hr />

                    {/* Certifications Section */}
                    <section className="certifications">
                        <h2>Certifications</h2>
                        <div className="certification-item">
                            <img src="https://img.shields.io/badge/Azure%20Fundamentals-AZ--900-blue" alt="Azure Fundamentals Badge" className="certification-badge" />
                            <p>Microsoft Certified: Azure Fundamentals</p>
                            <a href="https://www.credly.com/badges/2ECC98640B0D66B7" target="_blank" rel="noopener noreferrer">View Certification</a>
                        </div>
                    </section>

                    <hr />

                    {/* Call to Action Section */}
                    <section className="cta">
                        <h2>Let's Work Together!</h2>
                        <p>
                            Looking for a reliable and skilled developer for your next project? Feel free to reach out!
                            I'm available for freelance, contract, and full-time work. Let's build something great together.
                        </p>
                        <button 
                            onClick={() => window.location.href='https://calendly.com/thomasjrye/zoom-call'} 
                            className="schedule-button">
                            Schedule a Meeting
                        </button>                    
                    </section>

                    <hr />
                    
                    {/* About Me Section */}
                    <section className="about-me">
                        <h2>About Me</h2>
                        <p>
                            Experienced software developer with over 3 years of full-stack hands-on experience. I've created production cloud infrastructure in Microsoft Azure and managed development teams.
                        </p>
                        <p>
                            Adept at working independently and in collaborative environments to tackle new challenges. Currently at Iterate, Oslo's leading product development consultancy.
                        </p>
                    </section>

                    <hr />
                    
                    {/* Services Section */}
                    <section className="services">
                        <h2>Services I Offer</h2>
                        <div className="service-list">
                            <div className="service-item">
                                <h3>Web Development</h3>
                                <p>Full-stack web applications using modern technologies and frameworks.</p>
                            </div>
                            <div className="service-item">
                                <h3>API Development</h3>
                                <p>Building robust, scalable APIs for mobile and web applications.</p>
                            </div>
                            <div className="service-item">
                                <h3>Cloud Solutions</h3>
                                <p>Designing and deploying cloud-based solutions on AWS, Azure, and more.</p>
                            </div>
                            <div className="service-item">
                                <h3>DevOps & CI/CD</h3>
                                <p>Automating deployments, monitoring, and scaling for seamless development workflows.</p>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;