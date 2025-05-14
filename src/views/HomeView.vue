<template>
  <div>
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container text-center">
          <div class="hero-content">
            <h1 class="display-1 fw-bold">Ivan Linares</h1>
            <p class="fst-italic hero-subtitle">SEMPER PARATUS SERVIRE</p>
            <p class="lead hero-tagline">Scouting & Tech</p>
            <a href="#about" class="btn btn-primary mt-3">Learn More</a>
          </div>
          <img :src="ivnDraw" alt="Ivan Linares" class="hero-illustration mt-4" />
        </div>
      </section>
      <section id="welcome" class="text-center py-5">
        <div class="container">
          <h2 class="h1 mb-4">Que ondas vicho!</h2>
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
      <section id="about" class="py-5">
        <div class="container">
          <h2 class="h2 mb-4 text-center">About Me</h2>
          <p class="text-center">
            Hi, I'm Ivan, a Scout passionate about technology, music, and photography. I specialize in full-stack
            development focused on web development and enjoy creating content for social media.
          </p>
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
    </main>
  </div>
</template>

<script>
import ivnDraw from '../../assets/SVG/ivnDraw.svg'; // Ruta relativa directa

export default {
  data() {
    return {
      ivnDraw
    };
  }
};
</script>

<style>
/* Estilos específicos para HomeView */
</style>
