<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <!-- Pasar isDarkMode como prop al NavBar -->
    <NavBar :isDarkMode="isDarkMode" />
    <router-view />
    <Footer />
    <button id="dark-mode-toggle" class="btn btn-dark position-fixed" @click="toggleDarkMode">
      {{ isDarkMode ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      isDarkMode: false, // Estado inicial
    };
  },
  created() {
    // Cargar el estado inicial desde localStorage
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode);
    },
  },
};
</script>

<style>
/* Estilos globales */
</style>
