import { initializeDarkMode } from './darkMode.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Detectar configuración del sistema operativo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Cargar el estado inicial desde localStorage o usar la configuración del sistema
    const savedDarkMode = localStorage.getItem('darkMode');
    const isDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : systemPrefersDark;

    body.classList.toggle('dark-mode', isDarkMode);
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙';

    // Guardar el estado al hacer clic en el botón
    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    });
});
