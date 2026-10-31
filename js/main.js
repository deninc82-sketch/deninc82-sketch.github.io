'use strict';

const alertBlock = document.querySelector('#alert');

const btnPrimary = document.querySelector('.btn-primary');
btnPrimary.onclick = function() {
    alertBlock.className = 'alert alert-primary';
    alertBlock.textContent = 'A simple primary alert—check it out!';
};

const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
    alertBlock.className = 'alert alert-secondary';
    alertBlock.textContent = 'A simple secondary alert—check it out!';
});

const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', () => {
    alertBlock.className = 'alert alert-success';
    alertBlock.textContent = 'A simple success alert—check it out!';
});
btnSuccess.addEventListener('mouseout', () => {
    alertBlock.className = '';
    alertBlock.textContent = '';
});

const btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener('focus', () => {
    alertBlock.className = 'alert alert-danger';
    alertBlock.textContent = 'A simple danger alert—check it out!';
});
btnDanger.addEventListener('focusout', () => {
    alertBlock.className = '';
    alertBlock.textContent = '';
});

const btnLight = document.querySelector('.btn-light');
const btnDark = document.querySelector('.btn-dark');

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnLight.classList.remove('hide');
        btnDark.classList.add('hide');
    } else {
        btnDark.classList.remove('hide');
        btnLight.classList.add('hide');
    }
}

btnLight.addEventListener('click', toggleMode);
btnDark.addEventListener('click', toggleMode);

const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        alertBlock.className = 'alert alert-info';
        alertBlock.textContent = 'A simple info alert—check it out!';
    }
});

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}

for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector('.card-title');
    const addToCartBtn = cards[i].querySelector('.add-to-cart');
    
    addToCartBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(cardTitle.textContent);
    });
}
