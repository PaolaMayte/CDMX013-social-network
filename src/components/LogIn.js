import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'div-login');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title-login');

  const inputName = document.createElement('input');
  inputName.setAttribute('class', 'Name-login');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'Email-login');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin-login');

  const buttonBack = document.createElement('button');
  buttonBack.setAttribute('id', 'buttonBack-login');

  buttonBack.textContent = 'HolaAline';
  buttonLogin.textContent = 'LOG IN';
  title.textContent = 'LOG IN';
  // buttonBack.textContent = 'Back';
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputName, inputEmail, buttonLogin, buttonBack);

  return div;
};
