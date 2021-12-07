'use strict';

const form = document.querySelector('.js-form');

// const submitBtn = document.querySelector('.js-submit');

const firstName = document.querySelector('.js-first-name');
const email = document.querySelector('.js-email');
const password = document.querySelector('.js-password');
const firstNameErr = document.querySelector('.js-first-name-err');
const emailErr = document.querySelector('.js-email-err');
const passErr = document.querySelector('.js-pass-err');

function fillData() {
  console.log('pasa x aqui');
  if (firstName === '') {
    console.log('pasa x aqui');
    return (firstNameErr.innerHTML = "First name can't be empty");
  } else {
    return;
  }
}

const validateName = () => {
  const nameValue = firstName.value.trim();

  if (nameValue === '') {
    return (firstNameErr.innerHTML = "First name can't be empty");
  } else {
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    return (emailErr.innerHTML = "Email can't be empty");
  }
};

const validatePassword = () => {
  const passValue = password.value.trim();

  if (passValue === '') {
    return (passErr.innerHTML = "Password can't be empty");
  }
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  validateName();
  validateEmail();
  validatePassword();
});

firstName.addEventListener('focusout', () => {
  validateName();
});

email.addEventListener('focusout', () => {
  validateEmail();
});
