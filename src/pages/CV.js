import { Link } from 'react-router-dom';
import './site.css';
import headshot from './images/HeadShot.jpg';

const projects = [
    {
        meta: 'Aug 2026 – present · BoldBooks · via Iterate',
        title: 'Internationalisation and invoice workflow automation',
        role: 'Developer',
        text: [
            'BoldBooks is a digital book publishing platform that connects authors with service providers. I\'m automating manual processes in a small organisation: the invoicing flow into PowerOffice, and the expansion to the Swedish market with localised content, email templates and currency handling. The stack is a Nuxt/Vue frontend, Strapi as headless CMS and a Node.js/Express service.',
            'In Strapi I configured content types, localisation and email templates for Sweden, adding custom code where the defaults fell short. In the frontend I built language selection and localised pages. For PowerOffice I improved customer and invoice address handling for business customers, fixed incorrect VAT status and improved error handling.',
            'I work AI-natively: agents with context files for the whole codebase (AGENTS.md, CLAUDE.md) and MCP integrations triage the backlog by effort and risk, find root causes and draft pull requests, while I own verification, review and deployment. That got about a dozen backlog items to production in one week. Along the way I found and fixed an access-control issue where providers could read each other\'s approval data.',
        ],
        tags: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express', 'Strapi', 'i18n', 'PowerOffice', 'Invoice automation', 'MCP', 'Claude Code'],
    },
    {
        meta: '2026 · BK-Anlegg · via Iterate',
        title: 'Project management and mobile reporting',
        role: 'Full-stack Developer',
        text: [
            'BK-Anlegg is an asphalt and civil engineering contractor where planning, work orders and reporting ran on paper, Excel, phone calls and text messages. Information from site reached the office late, and invoicing data was pieced together by hand.',
            'We mapped the workflow with office staff and crews and replaced it with one system. The office plans the week in a kanban planner. Crews get jobs on their phones, check in and out, document work with photos and weighbridge tickets, and file daily reports with volumes, asphalt types, milling, materials and hours. Finished jobs produce a summary as PDF or email to the customer.',
            'A colleague and I built it from scratch, from requirements to production. I owned reporting and summaries, PDF generation and email delivery, the mobile camera flow with signed uploads to Backblaze B2, and materials management. It is an installable PWA in SvelteKit with SQLite/Drizzle, Auth0 and Litestream, deployed from GitHub Actions, in production since June 2026. With context files, task decomposition and automated tests, two developers made more than 500 commits in under five months.',
        ],
        tags: ['SvelteKit', 'Svelte', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Auth0', 'PWA', 'Backblaze B2', 'Litestream', 'Sentry', 'Vitest', 'GitHub Actions'],
    },
    {
        meta: 'Aug 2024 – Jun 2026 · Vy · via Iterate',
        title: 'DROPS User Interfaces team',
        role: 'Frontend Developer',
        text: [
            'The team builds the main tool for Vy\'s operations centre. It gives operators one view of train operations and supports disruption management and coordination between roles. As critical infrastructure it has demanding requirements for availability, data integrity, security and incident handling.',
            'I worked mainly in React and TypeScript, and in the Kotlin/Micronaut backend when needed. I built the vehicle receipt list with editing, deletion and change history, and the status and measures page that gives traffic planners an overview of disruptions. I worked in Vy\'s design system with a focus on WCAG, usability and consistency, together with designers, traffic planners and the teams supplying data.',
            'I set up frontend Datadog monitoring through Terraform, took part in on-call rotations and handled production incidents. I also helped introduce GitHub Copilot for AI-assisted code review within Vy\'s rules for data handling, privacy and security.',
        ],
        tags: ['React', 'TypeScript', 'Kotlin', 'Micronaut', 'Terraform', 'Datadog', 'AWS', 'TanStack Query', 'WCAG', 'GitHub Copilot', 'On-call'],
    },
    {
        meta: 'Sep 2026 · Personal project',
        title: 'Skylines3: multi-agent development with automated evals',
        role: 'Architect and agent orchestrator',
        text: [
            'A browser city builder in Three.js, built as an experiment in having several AI agents develop a large codebase in parallel. Each builder agent owns one of 15 modules and talks only through defined APIs, while an integrator owns the core. I wrote the role briefs, ownership rules, checkpoint commits and a shared STATUS.json as resume point between sessions.',
            'Quality was measured with evals the agents couldn\'t influence: a critic agent scoring each module against a rubric and reference images, and a blind A/B harness. Headless Chrome logged fps, draw calls and errors per module against performance budgets, with API fuzzing, determinism checks and seeded regression tests. The clearest lesson: agents report improvements that don\'t hold up when measured.',
        ],
        tags: ['Claude Code', 'OpenAI Codex', 'Multi-agent systems', 'LLM-as-judge', 'Observability', 'Puppeteer', 'Three.js'],
    },
    {
        meta: 'Jul – Aug 2026 · Personal project',
        title: 'Endeavour: physics-based sailing simulator with a local LLM',
        role: 'Developer',
        text: [
            'A browser sailing game where boat forces are computed from physics (apparent wind, the sail as a foil, keel and hull) instead of read from a polar diagram. A whole-globe campaign set in 1715 on Natural Earth and ETOPO data, with trade, weather, combat and nine historical vessels.',
            'A local model (Ollama, qwen2.5:7b) writes dialogue and crew remarks grounded only in the ship\'s actual state. Generated text never touches game state and falls back to authored text on failure. Because silent fallback hides failures, I built an eval tool that runs six scenarios through the real code path, classifies failure types and exits non-zero as a smoke test. The physics is validated against measured polars and covered by 50+ Vitest suites.',
        ],
        tags: ['TypeScript', 'Vite', 'Ollama', 'Local LLM', 'LLM evals', 'Guardrails', 'Vitest'],
    },
    {
        meta: 'Jul 2026 · Personal project',
        title: 'Stocker: RAG-based stock search and screening',
        role: 'Full-stack and AI developer',
        text: [
            'Search and natural-language questions over about 2,100 Nordic and US stocks, with cited answers. An idempotent Python pipeline pulls data from EODHD, Yahoo Finance and SEC EDGAR, has Claude rewrite company descriptions, and embeds them with Voyage AI into Postgres/pgvector, re-embedding only what changed.',
            'Search is hybrid (pg_trgm plus vectors, Reciprocal Rank Fusion). Claude answers only from retrieved context. FastAPI backend, React frontend, twelve scoring strategies and a point-in-time walk-forward backtest on real filing dates, tested with pytest including LLM outages.',
        ],
        tags: ['RAG', 'pgvector', 'Voyage AI', 'Anthropic API', 'Python', 'FastAPI', 'PostgreSQL', 'React', 'pytest'],
    },
    {
        meta: 'Apr – Jul 2024 · Chiron Predictive Technologies (Synplan)',
        title: 'Secure Azure production environment',
        role: 'Full-stack Developer',
        text: [
            'Synplan built an AI-based shift planning tool for nurses, and public-sector customers came with strict security requirements. I set up a new Azure production environment with flexible MySQL, VMs and App Service, behind virtual networks, a firewall and Azure Bastion, and worked on the planning tool in React, TypeScript and Node.js.',
        ],
        tags: ['Azure', 'Node.js', 'React', 'MySQL', 'Information security'],
    },
    {
        meta: 'Jul 2022 – Mar 2024 · Foocus AS',
        title: 'Sponsorship analytics platform',
        role: 'Full-stack Developer',
        text: [
            'Foocus lets brands track exposure and value in their sponsorships. Growth had brought slow performance, high cloud costs and data errors. I was the sole developer while the company onboarded customers like Rosenborg, Coop and the Norwegian Ski Federation, owning development, operations and all infrastructure: servers, load balancers, databases, buckets and the logo detection pipeline.',
            'I built Highcharts visualisations, a map of fan density and location, and a mobile-friendly version of the platform. I optimised MySQL schemas and indexes, added caching, halved cloud costs by migrating hosting, and integrated an LLM chatbot into the product.',
        ],
        tags: ['React', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'Highcharts', 'AWS', 'DigitalOcean', 'Cost optimisation', 'LLM integration'],
    },
    {
        meta: 'Aug 2021 – Jun 2022 · Laiout AS',
        title: 'Interpreting floor plans with computer vision',
        role: 'Software Developer',
        text: [
            'Laiout needed to read floor plans automatically instead of entering them by hand. I led a cross-functional team, wrote the Python algorithms that extract walls as structured data, and built a FastAPI server and React interface around them.',
        ],
        tags: ['Python', 'FastAPI', 'React', 'Computer vision', 'Machine learning'],
    },
];

const focusAreas = [
    {
        title: 'AI adoption, data handling and compliance',
        text: 'At Vy I helped introduce GitHub Copilot for AI-assisted code review before deployment. That meant finding a setup that met the customer\'s requirements for internal code and data, use of code for model training, privacy, information security and supplier agreements.',
    },
    {
        title: 'Augmented coding and context management',
        text: 'I use Claude Code, GitHub Copilot and OpenAI Codex daily, with Markdown context files for coding agents at Vy, BK-Anlegg and BoldBooks. I scope work with task decomposition and clear acceptance criteria, and back it with architectural principles, coding standards, critical code review and automated tests. I have used MCP integrations and agent tools, and configured a Figma integration myself.',
    },
    {
        title: 'Frontend, low-code and accessibility',
        text: 'I have worked with React and TypeScript since 2021, turning UX/UI design and functional requirements into responsive, accessible interfaces: critical operational tools, mobile field apps, data visualisation and maps. I chose universal design and WCAG as an elective, and I configure and extend low-code platforms like Strapi where the standard features fall short.',
    },
];

const experience = [
    { meta: 'Aug 2024 – present', title: <>Solutions Engineer, <a href="https://www.iterate.no/">Iterate</a></>, text: 'Client work on critical operational systems, workflow digitalisation and internationalisation: discovery, architecture, development, testing, operations and AI-assisted development.' },
    { meta: 'Apr 2024 – Jul 2024', title: 'Developer, Chiron Predictive Technologies', text: 'Secure Azure production environment and full-stack work in React and Node.js.' },
    { meta: 'Jul 2022 – Mar 2024', title: <>Full-stack Developer (in-house), <a href="https://foocus.ai/">Foocus</a></>, text: 'Sole in-house developer with full ownership of the platform and its operations, coordinating external consultants.' },
    { meta: 'Aug 2021 – Jun 2022', title: 'Computer Vision Intern, Laiout', text: 'Led the project team building automatic floor plan interpretation.' },
];

const skills = [
    { title: 'AI and development practice', text: 'Claude Code, GitHub Copilot, OpenAI Codex, LLM integration, RAG, embeddings, vector search, pgvector, Voyage AI, MCP, AI-assisted code review, augmented coding, context management, computer vision' },
    { title: 'Languages', text: 'TypeScript, JavaScript, Python, SQL, Kotlin, Java, PHP, Rust, HTML, CSS' },
    { title: 'Frameworks', text: 'React, SvelteKit, Vue/Nuxt, Node.js, Express, FastAPI, Laravel, Micronaut, TanStack Query, React Hook Form, Highcharts, Strapi, PWA' },
    { title: 'Cloud and operations', text: 'AWS, Azure, DigitalOcean, Terraform, Docker, GitHub Actions, CircleCI, Datadog, Sentry, observability, on-call, incident management, cost optimisation' },
    { title: 'Data', text: 'PostgreSQL, MySQL, SQLite, Drizzle ORM, data modelling, SQL optimisation, data handling, information security' },
    { title: 'Tools', text: 'Git, GitHub, Jira, Confluence, IntelliJ, Gradle, Vite, Vitest, design systems' },
];

const education = [
    { meta: '2021 – 2022', title: 'Bachelor\'s in Computer Engineering, OsloMet', text: 'Electives in machine learning, user interaction, universal design and accessibility (WCAG). Graduated with 190 of the required 180 ECTS.' },
    { meta: '2019 – 2021', title: 'Computer Engineering, Western Norway University of Applied Sciences (HVL)', text: 'Started the bachelor\'s here and transferred to OsloMet in 2021.' },
];

const also = [
    { meta: 'Certification · Aug 2024', title: <a href="https://www.credly.com/badges/2ECC98640B0D66B7">Microsoft Certified: Azure Fundamentals</a> },
    { meta: 'Talk · Dec 2024', title: 'Teaching computers to think', text: 'A short introduction to how language models represent and process language: word vectors, defining loss by comparing them, the N-gram model and a quick tour of transformers.' },
    { meta: 'Course · 2019', title: 'Early Stage, Braver', text: 'Six-week entrepreneurship programme for students, focused on fast market validation of ideas.' },
    { meta: 'Volunteer · 2020 – 2021', title: 'Deputy lead and head of software', text: 'Led software development and general organisation.' },
    { meta: 'Languages', text: 'Norwegian (native), English (fluent)' },
];

const CompactItem = ({ meta, title, text }) => (
    <div className="item compact">
        <span className="item-meta">{meta}</span>
        {title && <h3 className="item-title small">{title}</h3>}
        {text && <p>{text}</p>}
    </div>
);

const CV = () => (
    <div className="cv">
        <header className="cv-header">
            <nav className="nav" aria-label="Main">
                <Link to="/" className="nav-name">Thomas J. Rye</Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                </div>
            </nav>

            <div className="cv-intro">
                <img src={headshot} alt="Portrait of Thomas J. Rye" className="headshot" />
                <div className="cv-intro-text">
                    <h1>Thomas J. Rye</h1>
                    <p className="cv-title">AI Engineer and Solutions Engineer</p>
                    <p className="cv-contact">
                        Oslo, Norway · <a href="mailto:thomasjrye@gmail.com">thomasjrye@gmail.com</a> · <a href="https://www.linkedin.com/in/thomas-rye-b08064121/">LinkedIn</a> · <a href="https://github.com/ThomasJRye">GitHub</a>
                    </p>
                </div>
            </div>
        </header>
        <div className="disk" aria-hidden="true" />

        <main className="page-main">
            <section className="sec" aria-labelledby="summary-h">
                <h2 id="summary-h" className="sec-label">Summary</h2>
                <div className="sec-body prose">
                    <p className="first">I go into traditional businesses, find the workflows that run on paper, Excel and phone calls, and replace them with solutions in production.</p>
                    <p>I combine full-stack development with hands-on experience in LLM integration, RAG, AI agents and evals, and I work closely with domain experts, from asphalt crews to traffic operators, to understand where the technology actually makes a difference.</p>
                    <p>At BK-Anlegg, a colleague and I replaced paper, Excel, phone calls and text messages with a single digital workflow from project planning to invoicing data, in daily use since June 2026. At BoldBooks I use AI-assisted triage and development, and shipped around a dozen backlog items to production in one week alongside the launch for the Swedish market. At Foocus I was the sole developer, integrated a language model as a chatbot in the product and halved cloud costs.</p>
                    <p>I build AI systems with the same discipline as any other production code. In my own projects I have orchestrated parallel AI agents with independent evals and observability, built RAG with hybrid search and citations over around 2,100 companies, and integrated local language models with guardrails and automated failure checks. From Vy I bring experience with critical public infrastructure, on-call duty, observability and strict requirements for data handling and information security.</p>
                </div>
            </section>

            <section className="sec" aria-labelledby="focus-h">
                <h2 id="focus-h" className="sec-label">Focus areas</h2>
                <div className="sec-body tight">
                    {focusAreas.map((f) => (
                        <div className="item" key={f.title}>
                            <h3 className="item-title small">{f.title}</h3>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className="sec" aria-labelledby="projects-h">
                <h2 id="projects-h" className="sec-label">Projects</h2>
                <div className="sec-body">
                    {projects.map((p) => (
                        <article className="item" key={p.title}>
                            <span className="item-meta">{p.meta}</span>
                            <h3 className="item-title">{p.title}</h3>
                            <span className="item-role">{p.role}</span>
                            {p.text.map((t, i) => <p key={i}>{t}</p>)}
                            <ul className="tags" aria-label="Technologies">
                                {p.tags.map((t) => <li key={t}>{t}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section id="experience" className="sec" aria-labelledby="experience-h">
                <h2 id="experience-h" className="sec-label">Experience</h2>
                <div className="sec-body tight">
                    {experience.map((e) => <CompactItem key={e.meta} {...e} />)}
                </div>
            </section>

            <section id="skills" className="sec" aria-labelledby="skills-h">
                <h2 id="skills-h" className="sec-label">Skills</h2>
                <div className="sec-body">
                    <div className="skills">
                        {skills.map((s) => (
                            <div key={s.title}>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sec" aria-labelledby="edu-h">
                <h2 id="edu-h" className="sec-label">Education</h2>
                <div className="sec-body tight">
                    {education.map((e) => <CompactItem key={e.meta} {...e} />)}
                </div>
            </section>

            <section className="sec" aria-labelledby="also-h">
                <h2 id="also-h" className="sec-label">Also</h2>
                <div className="sec-body tight">
                    {also.map((a) => <CompactItem key={a.meta} {...a} />)}
                </div>
            </section>
        </main>

        <footer className="footer">© {new Date().getFullYear()} Thomas J. Rye · Oslo</footer>
    </div>
);

export default CV;
