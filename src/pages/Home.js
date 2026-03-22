import './Home.css';

const Home = () => {
    return (
        <div className="home-background">
            <div className="home-container">
                <div className="home-text-container">

                    {/* SetupClaw Style Offering Section */}
                    <section className="setup-offering">
                        <div className="setup-header">
                            <h2>OpenClaw Oppsett</h2>
                            <p className="setup-tagline">Jeg ruller ut og vedlikeholder teamets AI-assistent — sikkert, profesjonelt og nøkkelferdig.</p>
                        </div>

                        <p>
                            Nøkkelferdig OpenClaw-utrulling for gründere og ledergrupper. Ingen teknisk kunnskap kreves — jeghåndterer installasjon, sikkerhet, integrasjoner og løpende vedlikehold slik at du kan fokusere på å drive virksomheten din. Bygget for team med 4–50+ ansatte der ledelsen trenger mer handlekraft uten å skape nye sikkerhetsrisikoer.
                        </p>

                        <div className="quote-box">
                            <p>“Genuinely the most incredible sci-fi takeoff-adjacent thing I have seen recently.”</p>
                            <span className="quote-author">— Andrej Karpathy, tidl. direktør for AI hos Tesla</span>
                        </div>

                        <h3>Integreres med</h3>
                        <div className="integrations-grid">
                            <div className="integration-item">Gmail</div>
                            <div className="integration-item">Google Calendar</div>
                            <div className="integration-item">Outlook</div>
                            <div className="integration-item">Slack</div>
                            <div className="integration-item">iMessage</div>
                            <div className="integration-item">WhatsApp</div>
                            <div className="integration-item">Notion</div>
                            <div className="integration-item">HubSpot</div>
                            <div className="integration-item">Salesforce</div>
                            <div className="integration-item">Zoom</div>
                            <div className="integration-item">GitHub</div>
                            <div className="integration-item">+ 10 000 fler</div>
                        </div>

                        <button 
                            onClick={() => window.location.href='https://calendly.com/thomasjrye/zoom-call'} 
                            className="schedule-button"
                            style={{display: 'block', margin: '30px auto'}}>
                            Book et møte!
                        </button>

                        <div className="feature-grid">
                            <div className="feature-card">
                                <h3>Alltid på, alltid i arbeid</h3>
                                <p>I motsetning til ChatGPT, kjører din OpenClaw-agent 24/7 på dedikert infrastruktur. Den våkner hvert 30. minutt, sjekker e-post, kalender og verktøy — og tar handling uten at du trenger å spørre.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Sikkerhet først</h3>
                                <p>Din bot ser aldri rå legitimasjon. Jeg bruker Composio som et sikkerhetslag — alle tilganger administreres separat med full revisjonslogg og umiddelbar tilbakekalling av tilgang.</p>
                            </div>
                        </div>

                        <h3>Slik fungerer det</h3>
                        <div className="steps-container">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div>
                                    <h4>Oppstartsmøte</h4>
                                    <p>Jeg diskuterer dine mål, kartlegger integrasjoner og planlegger agentens arbeidsflyt. Du forteller oss hva som skal automatiseres — jegfikser resten.</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <div>
                                    <h4>Utrulling & Sikring</h4>
                                    <p>Jeg setter opp infrastruktur, installerer OpenClaw, konfigurerer sikkerhet og kobler til dine verktøy. Du er i gang samme dag.</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <div>
                                    <h4>14-dagers Hypercare</h4>
                                    <p>Jeg finjusterer arbeidsflyter, utvider rettigheter etter hvert som du bygger tillit, og sørger for at alt ruller sømløst.</p>
                                </div>
                            </div>
                        </div>

                        <h3>Pakker</h3>
                        <div className="pricing-grid">
                            <div className="pricing-card recommended">
                                <h4>Hosted Setup</h4>
                                <p>Full service — jeg drifter og sikrer.</p>
                            </div>
                            <div className="pricing-card recommended">
                                <h4>Mac Mini Setup</h4>
                                <p>Lokal maskinvare for iMessage-integrasjon eller full kontroll.</p>
                            </div>
                           
                        </div>

                    
                        <div className="faq-container">
                            <h3>Ofte stilte spørsmål</h3>
                            <div className="faq-item">
                                <h4>Hva er OpenClaw?</h4>
                                <p>En open-source AI-assistent som kjører 24/7. Den kan sortere e-post, booke møter, skrive utkast og automatisere arbeidsflyter proaktivt.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Må jeg være teknisk?</h4>
                                <p>Overhodet ikke. Jeg håndterer alt det tekniske. Du snakker med din bot via Telegram eller Slack, akkurat som å sende tekstmelding til en assistent.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Er det trygt?</h4>
                                <p>Sikkerhet kan være en utfordring med OpenClaw. Sammen vil vi gå gjennom fallgroper og risikoer. Jeg bruker sandboxing, brannmurer og sikkerhets-middleware som sørger for at boten aldri ser dine rå passord og at du har full kontroll over tilganger.</p>
                            </div>
                        </div>

                        <p style={{textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                            100% fornøydgaranti. Hvis du ikke er fornøyd med oppsettet, refunderer jeg hele beløpet — uten spørsmål.
                        </p>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;