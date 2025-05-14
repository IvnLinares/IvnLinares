<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <main>
      <section id="intro" class="intro-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start">
              <h1 class="intro-title">Ivan Linares</h1>
              <p class="intro-tagline">Semper Paratus Servire</p>
              <p class="intro-subtitle">Scouts & Tech</p>
            </div>
            <div class="col-md-6 text-center">
              <img :src="ivnDraw" alt="Ivan Linares Illustration" class="intro-illustration" />
            </div>
          </div>
        </div>
      </section>
      <section id="welcome" class="text-center py-5">
        <div class="container">
          <h2 class="h1 mb-4">¡Que ondas!</h2>
          <p class="lead">
            Hi Cipote, I'm Ivan Linares, a creative soul, Scout, designer, and developer. I love bringing ideas to
            life—whether it's through thoughtful design, meaningful digital projects, or community-driven Scout
            initiatives. My journey blends creativity and technology with a deep love for nature, music, and purposeful
            action.
          </p>
        </div>
      </section>
      <section id="contact" class="text-center py-5">
        <h2 class="h2 mb-4">Contact</h2>
        <p class="mb-4">You can reach me at:</p>
        <div class="contact-buttons d-flex justify-content-center flex-wrap gap-3">
          <a href="mailto:linaresivn@gmail.com" class="btn-email" target="_blank">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.instagram.com/ivn.linares" class="btn-instagram" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://github.com/IvnLinares" class="btn-github" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://open.spotify.com/user/ivn.linares" class="btn-spotify" target="_blank">
            <i class="fab fa-spotify"></i> Spotify
          </a>
          <a href="https://twitter.com/linares_ivn" class="btn-twitter" target="_blank">
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://buymeacoffee.com/ivnlinares" class="btn-coffee" target="_blank">
            <i class="fas fa-coffee"></i> Buy Me a Coffee
          </a>
        </div>
      </section>
      <section id="interests" class="py-5">
        <div class="container">
          <h2 class="h2 mb-4 text-center">Interests</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card interest-card text-center shadow-sm">
                <div class="card-body">
                  <i class="fas fa-paint-brush fa-3x mb-3 text-primary"></i>
                  <h5 class="card-title">UI/UX</h5>
                  <p class="card-text">Designing user experiences for web and mobile development.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card interest-card text-center shadow-sm">
                <div class="card-body">
                  <i class="fas fa-laptop-code fa-3x mb-3 text-success"></i>
                  <h5 class="card-title">Web Design</h5>
                  <p class="card-text">Creating websites and web applications using various technologies.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card interest-card text-center shadow-sm">
                <div class="card-body">
                  <i class="fas fa-users fa-3x mb-3 text-info"></i>
                  <h5 class="card-title">Leadership</h5>
                  <p class="card-text">Participant and organizer of youth development events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="py-5">
        <div class="container">
          <h2 class="h2 mb-4 text-center">Featured Projects</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card project-card shadow-sm text-center">
                <div class="card-icon my-4">
                  <i class="fas fa-code fa-4x text-primary"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Project 1</h5>
                  <p class="card-text">Description of the project.</p>
                  <a href="#" class="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <!-- Repeat for more projects -->
          </div>
        </div>
      </section>
      <section id="skills" class="py-5">
        <div class="container">
          <h2 class="h2 mb-4 text-center">Skills & Tools</h2>
          <div class="row text-center">
            <div class="col-md-3 skill-card">
              <i class="fab fa-html5 fa-3x text-danger"></i>
              <p class="mt-2">HTML5</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fab fa-css3-alt fa-3x text-primary"></i>
              <p class="mt-2">CSS3</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fab fa-js fa-3x text-warning"></i>
              <p class="mt-2">JavaScript</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fab fa-vuejs fa-3x text-success"></i>
              <p class="mt-2">Vue.js</p>
            </div>
          </div>
          <div class="row text-center mt-4">
            <div class="col-md-3 skill-card">
              <i class="fas fa-database fa-3x text-info"></i>
              <p class="mt-2">SQL & NoSQL Databases</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fab fa-node-js fa-3x text-success"></i>
              <p class="mt-2">Node.js</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-code fa-3x text-secondary"></i>
              <p class="mt-2">MERN Stack</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-laptop-code fa-3x text-dark"></i>
              <p class="mt-2">Django</p>
            </div>
          </div>
          <div class="row text-center mt-4">
            <div class="col-md-3 skill-card">
              <i class="fab fa-git-alt fa-3x text-danger"></i>
              <p class="mt-2">GIT/GitHub</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-paint-brush fa-3x text-primary"></i>
              <p class="mt-2">Graphic Design</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-tools fa-3x text-warning"></i>
              <p class="mt-2">Troubleshooting</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-users fa-3x text-info"></i>
              <p class="mt-2">Leadership & Teamwork</p>
            </div>
          </div>
          <div class="row text-center mt-4">
            <div class="col-md-3 skill-card">
              <i class="fas fa-cogs fa-3x text-secondary"></i>
              <p class="mt-2">Office 365 Administration</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-brain fa-3x text-success"></i>
              <p class="mt-2">Creativity</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-clock fa-3x text-danger"></i>
              <p class="mt-2">Organization & Time Management</p>
            </div>
            <div class="col-md-3 skill-card">
              <i class="fas fa-code-branch fa-3x text-dark"></i>
              <p class="mt-2">C++, C#, JAVA</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="py-5">
        <div class="container">
          <h2 class="h2 mb-4 text-center">About Me</h2>
          <p class="text-center">
            Hi, I'm Ivan, a Scout passionate about technology, music, and photography. I specialize in full-stack
            development focused on web development and enjoy creating content for social media.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ivnDraw from '../../assets/SVG/ivnDraw.svg'; // Ruta relativa directa

export default {
  data() {
    return {
      ivnDraw,
      isDarkMode: false, // Cambiar dinámicamente según el modo
    };
  },
  mounted() {
    // Detectar el modo oscuro del sistema
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
};
</script>

<style>
/* Intro Section Styles */
.intro-section {
  background: linear-gradient(135deg, #c84141, #e6dcf3);
  animation: gradientAnimation 10s ease infinite;
  color: #ffffff;
}

.dark-mode .intro-section {
  background: linear-gradient(135deg, #230b58, #c870cb);
}

.intro-title {
  font-family: 'Dancing Script', cursive;
  margin-top: 15px;
  font-size: 5rem;
  font-weight: bold;
}

.intro-tagline {
  font-size: 1.5rem;
  font-weight: 600;
}

.intro-subtitle {
  font-size: 1.25rem;
  font-style: italic;
  color: #f3e5f5;
}

.intro-illustration {
  max-width: 40%;
  bottom: 0;
  margin-top: 50px;
  height: auto;
}

.intro-illustration:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.project-card {
  border: none;
}

.project-card .card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #f8f9fa;
  border-radius: 10px;
}

.project-card .card-icon i {
  font-size: 4rem;
}

@media (min-width: 768px) {
  .intro-title {
    font-size: 4rem;
  }

  .intro-tagline {
    font-size: 1.75rem;
  }

  .intro-subtitle {
    font-size: 1.5rem;
  }
}

/* Gradient Animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Footer Styles */
.footer {
  background: #333;
  color: #fff;
}

.footer .social-icons a {
  margin: 0 10px;
  color: #fff;
  font-size: 1.5rem;
}

/* Skills Section Styles */
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
}

/* Animations for other elements */
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-card .card-icon i {
  transition: color 0.3s ease, transform 0.3s ease;
}

.project-card:hover .card-icon i {
  color: #007bff;
  transform: scale(1.1);
}

/* Email Button Styles */
.btn-email {
  color: #ffffff;
  background-color: #d44638; /* Fondo claro para modo claro */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-email:hover {
  color: #ffffff;
  background-color: #a8322a; /* Fondo más oscuro al pasar el mouse */
}

/* Ajuste para modo oscuro */
.dark-mode .btn-email {
  background-color: #333; /* Fondo oscuro para modo oscuro */
  color: #d44638;
}

.dark-mode .btn-email:hover {
  background-color: #a8322a;
  color: #ffffff;
}

/* Contact Section Styles */
.contact-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  justify-content: center;
}

.contact-buttons a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.contact-buttons a:hover {
  transform: scale(1.05);
}

/* Specific button styles */
.btn-email {
  background-color: #d44638;
  color: #ffffff;
}

.btn-instagram {
  background-color: #e1306c;
  color: #ffffff;
}

.btn-github {
  background-color: #333333;
  color: #ffffff;
}

.btn-spotify {
  background-color: #1db954;
  color: #ffffff;
}

.btn-twitter {
  background-color: #1da1f2;
  color: #ffffff;
}

.btn-coffee {
  background-color: #ffdd00;
  color: #000000;
}

/* Adjustments for hover effects */
.btn-email:hover {
  background-color: #a8322a;
}

.btn-instagram:hover {
  background-color: #c32f6b;
}

.btn-github:hover {
  background-color: #24292e;
}

.btn-spotify:hover {
  background-color: #1aa34a;
}

.btn-twitter:hover {
  background-color: #1991da;
}

.btn-coffee:hover {
  background-color: #e6c200;
}
</style>
