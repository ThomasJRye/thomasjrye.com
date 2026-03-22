import React from 'react';

const Services = () => (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Our Services</h1>
        <p>We offer tailored packages to deploy and manage your OpenClaw AI agent.</p>

        <h2>Agent Starter — NOK 15,000</h2>
        <ul>
            <li>Needs assessment consultation (2 hours)</li>
            <li>OpenClaw deployment on your infrastructure</li>
            <li>One messaging channel configured</li>
            <li>Core identity and 3-5 skills installed</li>
            <li>User training session (1 hour)</li>
        </ul>

        <h2>Professional — NOK 40,000</h2>
        <ul>
            <li>Everything in Starter</li>
            <li>Custom skill development for your workflow</li>
            <li>3 months maintenance included (4h/month)</li>
            <li>Priority support</li>
        </ul>

        <h2>Enterprise — from NOK 100,000</h2>
        <ul>
            <li>Deep workflow analysis and AI strategy workshop</li>
            <li>Multiple custom integrations</li>
            <li>Security hardening and compliance</li>
            <li>On-site team training</li>
            <li>Ongoing strategic advisory retainer</li>
        </ul>

        <h2>Ad-Hoc</h2>
        <p>Hourly consulting at NOK 1,500/hr. Full-day workshops at NOK 25,000.</p>
    </div>
);

export default Services;
