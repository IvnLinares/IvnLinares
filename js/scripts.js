document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web cargado correctamente.');

    // Cargar publicaciones del blog
    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = ''; // Limpiar contenido inicial
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p><em>${post.date}</em></p>
                    <p>${post.content}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error al cargar las publicaciones:', error);
            document.getElementById('posts-container').innerHTML = '<p>Error al cargar las publicaciones.</p>';
        });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');

        // Actualiza el ícono del botón
        themeToggleBtn.innerHTML = isDarkMode
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        // Guarda la preferencia del tema en localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
