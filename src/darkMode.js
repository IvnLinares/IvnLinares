import { initializeDarkMode } from './darkMode.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load initial mode from localStorage
    initializeDarkMode();

    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    });

    // Set initial button text
    const darkMode = localStorage.getItem('darkMode') === 'true';
    toggleButton.textContent = darkMode ? '☀️' : '🌙';
});
