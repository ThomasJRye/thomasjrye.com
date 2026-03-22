import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='main-container'>
                <div className='text-container'>
                    <h1 className="title">Build Your Personal AI Agent</h1>
                    <h2 className='under-title'>We build, deploy, and manage custom OpenClaw AI assistants for businesses and professionals in Oslo.</h2>
                    <p className='description-text'>
                        Imagine an AI that understands your workflows, manages your tasks, and integrates seamlessly with your tools.
                        We turn that vision into reality. From automating daily routines to developing complex, bespoke skills,
                        we provide end-to-end solutions that put a powerful, private AI agent to work for you.
                    </p>
                    <div className='contact-container'>
                        <a href="/contact" className='contact-button'>Book a Free Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
