'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const isAuthorized = false;

  if (isAuthorized) {
    console.log('Користувач вже авторизований.');
    const modal = document.querySelector('#loginModal');
    if (modal) {
      modal.style.display = 'none';
    }
  } else {
    console.log('Користувач не авторизований. Відображається модальне вікно входу.');
  }

  const modal = document.querySelector('#loginModal');
  const closeModalBtn = document.querySelector('#closeModalBtn');
  const cancelBtn = document.querySelector('#cancelBtn');

  const hideModal = () => {
    if (modal) {
      modal.style.display = 'none';
    }
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', hideModal);
  }
});
