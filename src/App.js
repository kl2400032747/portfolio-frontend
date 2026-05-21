import { useEffect, useState } from 'react';
import './App.css';
import { fetchJSON } from './services/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      try {
        const projectsData = await fetchJSON('/api/projects');
        setProjects(projectsData);
      } catch (err) {
        setError(err.message || 'Unable to load data.');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-title">Portfolio</h1>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        {/* Home Section */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <h2>Hi, I'm <span className="highlight">Sravanthi</span></h2>
            <p className="hero-subtitle">Full-Stack Developer building modern web applications with React, Node.js, and MongoDB.</p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects">
          <h2>My Projects</h2>
          <p className="section-subtitle">Here are some of my best projects</p>

          {loading && <p className="section-subtitle">Loading projects...</p>}
          {error && <p className="section-subtitle">{error}</p>}

          {!loading && !error && (
            <div className="projects-grid">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project._id || project.id || project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-tags">
                      {(project.techStack || []).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.repoLink && (
                        <a href={project.repoLink} target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                      )}
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="social-link">Live Demo</a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="section-subtitle">No projects available yet.</p>
              )}
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <h2>About Me</h2>
          <p className="section-subtitle">Learn more about my skills and expertise</p>
          <p className="about-text">
            I am a Computer Science Engineering (CSE) student with a passion for full-stack development and creating impactful digital solutions. I have hands-on experience in building web applications using technologies like HTML, CSS, JavaScript, React, and Node.js. I am always eager to learn new technologies and enhance my problem-solving skills.
          </p>

          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Database</h4>
              <ul>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Let's Connect</h2>
          <p className="section-subtitle">Get in touch for opportunities or collaboration</p>
          <p className="contact-text">Feel free to reach out through any platform below.</p>
          <div className="social-links">
            <a href="mailto:2400032747@kluniversity.in" className="social-link">Email</a>
            <a href="https://github.com/kl2400032747" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/lakshmi-sravanthi-77889a366?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sravanthi | Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
