import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonSignup = document.createElement('button');

  buttonLogin.textContent = 'LOG IN';
  buttonSignup.textContent = 'SIGN UP';
  title.textContent = 'ENIGMA';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/signup');
  });

  div.append(title, buttonLogin, buttonSignup);

  return div;
};
