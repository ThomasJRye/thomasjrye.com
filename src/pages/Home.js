import { Link } from 'react-router-dom';
import './site.css';
import headshot from './images/HeadShot.jpg';

const CALENDLY = 'https://calendly.com/thomasjrye/zoom-call';
const EMAIL = 'thomasjrye@gmail.com';

const Home = () => (
    <div>
        <header className="hero">
            <nav className="nav" aria-label="Main">
                <Link to="/" className="nav-name">Thomas J. Rye</Link>
                <div className="nav-links">
                    <a href="#work">Work</a>
                    <a href="#projects">Projects</a>
                    <a href="#writing">Writing</a>
                    <a href="#contact">Contact</a>
                    <Link to="/cv">CV</Link>
                </div>
            </nav>

            <div className="hero-inner">
                <img src={headshot} alt="Portrait of Thomas J. Rye" className="headshot" />
                <h1>Hi, I'm Thomas.</h1>
                <p className="lede">I am an agentic engineer building user centric projects</p>
                <div className="actions">
                    <a href={CALENDLY} className="btn btn-primary">Book a call</a>
                    <a href={`mailto:${EMAIL}`} className="btn btn-ghost">{EMAIL}</a>
                </div>
            </div>
        </header>
        <div className="disk" aria-hidden="true" />

        <main className="page-main">
            <section className="sec" aria-labelledby="about-h">
                <h2 id="about-h" className="sec-label">About</h2>
                <div className="sec-body">
                    <p>I'm a full-stack developer. By day I work at Iterate, building products and helping teams become AI-native.</p>
                    <p>On the side I build my own projects, mostly with AI agents, evals and good old infrastructure. They all run on my own server.</p>
                    <p className="note">TypeScript · React · Node.js · Python · Postgres · Google Cloud · Azure · Docker · Claude API</p>
                </div>
            </section>

            <section id="work" className="sec" aria-labelledby="work-h">
                <h2 id="work-h" className="sec-label">Work</h2>
                <div className="sec-body">
                    <div className="list">
                        <a className="row" href="https://www.vy.no/">
                            <span className="row-head">
                                <span className="row-title">Vy</span>
                                <span className="row-meta">Frontend developer · 2024–2026 · via Iterate</span>
                            </span>
                            <span className="row-text">Two years in Team Brukerflater DROPS, building the tool Vy's operations centre uses to follow train traffic in real time. React and TypeScript, WCAG, on-call duty for critical infrastructure.</span>
                        </a>
                        <a className="row" href="https://foocus.ai/">
                            <span className="row-head">
                                <span className="row-title">Foocus</span>
                                <span className="row-meta">Full-stack developer · 2022–2024 · foocus.ai</span>
                            </span>
                            <span className="row-text">Sole developer on a sponsorship analytics platform. Built the charts, a map of where fans are, and the mobile version. Added an LLM chatbot to the product and cut cloud costs in half.</span>
                        </a>
                    </div>
                    <p className="note">Since 2024 I've been a Solutions Engineer at <a href="https://www.iterate.no/">Iterate</a>, also working with BK-Anlegg and BoldBooks. The full story is in my <Link to="/cv">CV</Link>.</p>
                </div>
            </section>

            <section id="projects" className="sec" aria-labelledby="projects-h">
                <h2 id="projects-h" className="sec-label">Projects</h2>
                <div className="sec-body">
                    <div className="list">
                        <a className="row" href="https://kivondo.com">
                            <span className="row-head">
                                <span className="row-title">Kivondo</span>
                                <span className="row-meta accent">In progress · kivondo.com</span>
                            </span>
                            <span className="row-text">A kitchen planner that goes from floor plan to shopping list, with prices from IKEA, Epoq and Kvik. Plus an agent that does your grocery shopping.</span>
                        </a>
                        <div className="row">
                            <span className="row-title">Stocker</span>
                            <span className="row-text">Search and ask questions across 650+ Nordic stocks on Nordnet. Company financials indexed with pgvector, answers written by Claude, plus backtesting of strategies.</span>
                        </div>
                        <div className="row">
                            <span className="row-title">Endeavour</span>
                            <span className="row-text">A sailing game where the physics are computed, not looked up. Wind, sail and keel forces decide everything, so tacking, stalling and getting stuck in irons just happen. A local LLM voices the crew.</span>
                        </div>
                    </div>
                    <p className="note">More code on <a href="https://github.com/ThomasJRye">GitHub</a>.</p>
                </div>
            </section>

            <section id="writing" className="sec" aria-labelledby="writing-h">
                <h2 id="writing-h" className="sec-label">Writing</h2>
                <div className="sec-body">
                    <p>I write now and then about technology, mental models and life philosophy.</p>
                    <div className="list">
                        <a className="row" href="https://thomasjrye.substack.com/">
                            <span className="row-title">Consensus vs. anti-consensus games</span>
                            <span className="row-text">On how often we think we're thinking for ourselves, when we're really just copying.</span>
                            <span className="row-meta">June 2022 · Substack</span>
                        </a>
                    </div>
                    <p className="note"><a href="https://thomasjrye.substack.com/">All posts on Substack</a></p>
                </div>
            </section>

            <section id="contact" className="sec" aria-labelledby="contact-h">
                <h2 id="contact-h" className="sec-label">Contact</h2>
                <div className="sec-body">
                    <p className="big">Got a project, or just want to chat? Send me an email.</p>
                    <div className="links">
                        <a href={`mailto:${EMAIL}`}>Email</a>
                        <a href={CALENDLY}>Book 30 min</a>
                        <a href="https://www.linkedin.com/in/thomas-rye-b08064121/">LinkedIn</a>
                        <a href="https://github.com/ThomasJRye">GitHub</a>
                        <a href="https://twitter.com/JacobsenRye">X</a>
                        <a href="https://www.instagram.com/thomasjacobsenrye/">Instagram</a>
                    </div>
                </div>
            </section>
        </main>

        <footer className="footer">© {new Date().getFullYear()} Thomas J. Rye · Oslo</footer>
    </div>
);

export default Home;
