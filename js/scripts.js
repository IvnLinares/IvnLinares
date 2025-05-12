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
});
