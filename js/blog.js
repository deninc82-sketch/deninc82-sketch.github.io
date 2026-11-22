'use strict';

const container = document.querySelector('#blog-container');

fetch('https://dummyjson.com')
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження даних');
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = '';
        data.posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post';

            const h2 = document.createElement('h2');
            h2.textContent = post.title;

            const p = document.createElement('p');
            p.textContent = post.body;

            article.appendChild(h2);
            article.appendChild(p);
            container.appendChild(article);
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
        container.innerHTML = '<p>Не вдалося завантажити дописи.</p>';
    });