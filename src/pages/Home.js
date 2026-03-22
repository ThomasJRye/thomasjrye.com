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
                        <p className="sub-headline">Fullstack-utvikler | Oslo, Norge</p>
                        <div className="skills-location">
                            <div className="column" id="skills">
                                <h3>Teknologier jeg spesialiserer meg i:</h3>
                                <p>
                                    Python, JavaScript, PHP, Rust | React, Laravel, FastAPI, Node | Azure-sertifisert, AWS
                                </p>
                            </div>
                            <div className="column" id="location-contact">
                                <h3>Lokasjon:</h3>
                                <p>Oslo, Norge</p>
                                <h3>Kontakt:</h3>
                                <p>thomasjrye@gmail.com, github.com/ThomasJRye, thomasjrye.com, LinkedIn</p>
                            </div>
                        </div>
                    </section>

                    <hr />

                    {/* Certifications Section */}
                    <section className="certifications">
                        <h2>Sertifiseringer</h2>
                        <div className="certification-item">
                            <img src="https://img.shields.io/badge/Azure%20Fundamentals-AZ--900-blue" alt="Azure Fundamentals Badge" className="certification-badge" />
                            <p>Microsoft-sertifisert: Azure Fundamentals</p>
                            <a href="https://www.credly.com/badges/2ECC98640B0D66B7" target="_blank" rel="noopener noreferrer">Se Sertifisering</a>
                        </div>
                    </section>

                    <hr />

                    {/* Call to Action Section */}
                    <section className="cta">
                        <h2>La oss jobbe sammen!</h2>
                        <p>
                            Ser du etter en pålitelig og dyktig utvikler for ditt neste prosjekt? Ta gjerne kontakt!
                            Jeg er tilgjengelig for frilans, kontrakt og fulltidsarbeid. La oss bygge noe fantastisk sammen.
                        </p>
                        <button 
                            onClick={() => window.location.href='https://calendly.com/thomasjrye/zoom-call'} 
                            className="schedule-button">
                            Avtal et møte
                        </button>                    
                    </section>

                    <hr />
                    
                    {/* About Me Section */}
                    <section className="about-me">
                        <h2>Om meg</h2>
                        <p>
                            Erfaren programvareutvikler med over 3 års fullstack-erfaring. Jeg har bygget produksjonsinfrastruktur i Microsoft Azure og ledet utviklingsteam. Vant til å jobbe selvstendig og i samarbeidsmiljøer for å løse nye utfordringer. Jobber for tiden hos Iterate, Oslos ledende produktutviklingskonsulentselskap.
                        </p>
                        <p>
                            Jeg jobber med en rekke moderne teknologier inkludert React, Node.js, Python og skytjenester som AWS og Azure. Enten du trenger en fullstack-applikasjon, API-integrasjon eller skyarkitektur, er jeg her for å hjelpe deg med å gjøre ideene dine til virkelighet.
                        </p>
                    </section>

                    <hr />
                    
                    {/* Services Section */}
                    <section className="services">
                        <h2>Tjenester jeg tilbyr</h2>
                        <div className="service-list">
                            <div className="service-item">
                                <h3>Webutvikling</h3>
                                <p>Fullstack webapplikasjoner med moderne teknologier og rammeverk.</p>
                            </div>
                            <div className="service-item">
                                <h3>API-utvikling</h3>
                                <p>Bygging av robuste, skalerbare API-er for mobil- og webapplikasjoner.</p>
                            </div>
                            <div className="service-item">
                                <h3>Skyløsninger</h3>
                                <p>Design og distribusjon av skybaserte løsninger på AWS, Azure og mer.</p>
                            </div>
                            <div className="service-item">
                                <h3>DevOps & CI/CD</h3>
                                <p>Automatisering av distribusjoner, overvåking og skalering for sømløse utviklingsarbeidsflyter.</p>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;