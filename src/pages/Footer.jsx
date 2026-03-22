import './Footer.css'

function Footer() {
  return (
    <footer className='Footer'>
      <div className="column" id="first">
        <a href="https://www.linkedin.com/in/thomas-rye-b08064121/" className="fa fa-linkedin" aria-label="LinkedIn"><span className="visually-hidden">LinkedIn</span></a>
        <a href="https://www.instagram.com/thomasjacobsenrye/" className="fa fa-instagram" aria-label="Instagram"><span className="visually-hidden">Instagram</span></a>
        <a href="https://twitter.com/JacobsenRye" className="fa-brands fa-x-twitter" aria-label="X"><span className="visually-hidden">X</span></a>
        <a href="https://github.com/ThomasJRye" className="fa fa-github" aria-label="GitHub"><span className="visually-hidden">GitHub</span></a>
        <a href="mailto:thomasjrye@gmail.com" className="fa fa-envelope" aria-label="Email"><span className="visually-hidden">Email</span></a>
      </div>
      
      <div className='Mail'>
        
      </div>
      
    </footer>
  );
}

export default Footer;
