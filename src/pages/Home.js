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
                        <img src={headshot} alt="Oslo AI Agents" className="headshot" />
                        <h1 className="headline">Build Your Personal AI Agent</h1>
                        <p className="sub-headline">Custom OpenClaw AI assistants for businesses and professionals in Oslo.</p>
                        <div className="skills-location">
                            <div className="column" id="skills">
                                <h3>Technologies we use:</h3>
                                <p>
                                    OpenClaw, LLMs, RAG, Node.js, Python, Azure
                                </p>
                            </div>
                            <div className="column" id="location-contact">
                                <h3>Location:</h3>
                                <p>Oslo, Norway</p>
                                <h3 id="contact">Contact:</h3>
                                <p>Email: thomasjrye@gmail.com</p>
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
                        <h2>Let's Build Your AI Agent!</h2>
                        <p>
                            Ready to automate your workflows with a custom AI agent? We design and deploy
                            OpenClaw-powered assistants tailored to your business needs — from scheduling and
                            email triage to complex multi-step automations. Book a free discovery call today.
                        </p>
                        <button 
                            onClick={() => window.location.href='https://calendly.com/thomasjrye/zoom-call'} 
                            className="schedule-button">
                            Schedule a Meeting
                        </button>                    
                    </section>

                    <hr />
                    
                    {/* About Me Section */}
                    <section className="about-me" id="about-me">
                        <h2>About Us</h2>
                        <p>
                            Oslo AI Agents is a boutique AI consultancy specialising in OpenClaw-powered personal
                            and business AI assistants. We help teams and professionals in Oslo reclaim their time
                            by putting intelligent automation to work — handling emails, calendars, research, and
                            much more.
                        </p>
                        <p>
                            Our founder brings over 3 years of full-stack development experience across React,
                            Node.js, Python, and Azure cloud services. We pair that engineering rigour with the
                            latest large language model tooling to deliver agents that are reliable, secure, and
                            genuinely useful from day one.
                        </p>
                    </section>

                    <hr />
                    
                    {/* Services Section */}
                    <section className="services" id="services">
                        <h2>Services We Offer</h2>
                        <div className="service-list">
                            <div className="service-item">
                                <h3>Personal AI Agent</h3>
                                <p>A custom OpenClaw assistant that manages your inbox, calendar, and daily tasks — so you can focus on what matters.</p>
                            </div>
                            <div className="service-item">
                                <h3>Business Automation</h3>
                                <p>End-to-end workflow automation powered by LLMs, integrated directly into your existing tools and data sources.</p>
                            </div>
                            <div className="service-item">
                                <h3>RAG & Knowledge Agents</h3>
                                <p>Retrieval-augmented generation systems that let your team query internal documents and databases in plain language.</p>
                            </div>
                            <div className="service-item">
                                <h3>AI Strategy & Consulting</h3>
                                <p>Hands-on guidance to identify the highest-value AI opportunities in your organisation and build a clear roadmap.</p>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
