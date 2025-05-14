<template>
  <header>
    <nav :class="['navbar navbar-expand-lg', isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light']">
      <div class="container">
        <a
          class="navbar-brand fw-bold text-uppercase"
          href="#"
          :style="{ color: isDarkMode ? '#ffffff' : '#000000' }"
        >
          <i class="fas fa-compass"></i> IvnLinares
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/' }"
                to="/"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/development' }"
                to="/development"
              >
                Development
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/portfolio' }"
                to="/portfolio"
              >
                Portfolio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: $route.path === '/scouts' }"
                to="/scouts"
              >
                Scouts
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
/* Estilos específicos para NavBar */
.navbar {
  background: linear-gradient(90deg, #f9f9fb, #ffffff);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 1rem 0;
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: #d1d5db;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0.5rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  color: #d1d5db;
  transform: scale(1.1);
}

.nav-link.active {
  font-size: 1.2rem;
  font-weight: bold;
  color: #facc15;
  text-decoration: underline;
}

.navbar-toggler {
  border: none;
  background-color: #ffffff;
  color: #4f46e5;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-toggler:hover {
  background-color: #facc15;
  color: #ffffff;
}

/* Light mode navbar styles */
.navbar-light {
  background-color: #ffffff !important;
  transition: background-color 0.3s ease;
}

.navbar-light .navbar-brand {
  color: #000000 !important;
  transition: color 0.3s ease;
}

.navbar-light .nav-link {
  color: #000000 !important;
}

.navbar-light .nav-link:hover {
  color: #555555 !important;
}

/* Dark mode navbar styles */
.navbar-dark {
  background-color: #1e1e1e !important;
  transition: background-color 0.3s ease;
}

.navbar-dark .navbar-brand {
  color: #ffffff !important;
  transition: color 0.3s ease;
}

.navbar-dark .nav-link {
  color: #e0e0e0 !important;
}

.navbar-dark .nav-link:hover {
  color: #ffffff !important;
}
</style>
