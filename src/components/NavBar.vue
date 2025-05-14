<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand fw-bold text-uppercase" href="#">
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
              <router-link class="nav-link text-uppercase" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/development">Development</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/scouts">Scouts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
/* Estilos específicos para NavBar */
</style>
