import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-background" >
            <div className="resume-container">
                <div className="resume-text-container" >
                    <section className="personal-info">
                        <p>Software Developer with management experience. I enjoy taking on new challenges independently and in teams. Particular interest in algorithms, computer vision, and AI.</p>
                        <div className="column" id="info">
    
                            <p>Oslo, Norway</p>
                            <p>+47 41310683</p>
                            <p>Thomasjrye@gmail.com</p>
                        </div>
                    </section>

                    <section className="experience">
                        <h3>Experience</h3>
                        <div className="job">
                            <h4>SynPlan, Oslo— Senior Developer</h4>
                            <p>2024 - Today</p>
                            <p>Setting up a production environment in Microsoft Azure. Worked with Flexible MYSQL server, virtual machines, and Azure app engine. Developing in ReactJS and NodeJS. Worked to transfer to multitenant architecture and setup logging with Matomo.</p>
                        </div>

                        <div className="job">
                            <h4>Foocus AS, Oslo— Full-stack developer/Data scientist</h4>
                            <p>2022 - 2024</p>
                            <p>Developing an analytics platform for sponsorship valuation. Worked on a backend using PHP Laravel and frontend based on React JS. Did data analysis using a CNN deep learning model for logo detection completed training using AWS and Lambda Labs. Managed the entire cloud-based tech stack.</p>
                        </div>

                        <div className="job">
                            <h4>Laiout AS, Oslo— Computer Vision Intern</h4>
                            <p>2021 - 2022</p>
                            <p>Using Python to do computer vision on floor plans. Wrote software to extract features from floorplans. Backend implemented with FastAPI, frontend with React.</p>
                        </div>

                        <div className="job">
                            <h4>Portal Space, Oslo— Strategic Manager & Software Lead</h4>
                            <p>2020 - 2021</p>
                            <p>Led software development in Java, Python, and React Web development. Also handled general management and recruitment. Acquired 500,000 NOK in public grants and from private foundations.</p>
                        </div>

                        <div className="job">
                            <h4>Early Stage, Bergen — Attende</h4>
                            <p>2019</p>
                            <p>Early Stage is a 6-week long experiential entrepreneurship program for students, with a primary focus on rapid market validation of ideas.</p>
                        </div>
                    </section>

                    <section className="education">
                        <h3>Education</h3>
                        <div className="edu">
                            <h4>Oslomet/HVL, Bergen/Oslo— Dataingeniør/Computer Science</h4>
                            <p>2019 - 2022</p>
                        </div>
                        <div className="edu">
                            <h4>Skagerak International School, Sandefjord— IB Diploma</h4>
                            <p>2015 - 2018</p>
                            <p>Challenging high school curriculum in English, courses in Physics, Chemistry & Economics.</p>
                        </div>
                    </section>

                    <section className="skills">
                        <h3>Skills</h3>
                        <p><strong>Programming Languages:</strong> Python, JS, PHP, Java, Rust</p>
                        <p><strong>Development Frameworks:</strong> Laravel, FastAPI, React, Node, Express</p>
                        <p><strong>Cloud Frameworks:</strong> DigitalOcean, Azure, AWS, Lambda Labs</p>
                        <p><strong>Machine Learning:</strong> PyTorch</p>
                        <p><strong>Sales:</strong> Google Ads, Facebook Ads</p>
                    </section>

                    <section className="languages">
                        <h3>Languages</h3>
                        <p><strong>English:</strong> Fluent (6 years at international schools)</p>
                        <p><strong>Norwegian:</strong> Fluent</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;