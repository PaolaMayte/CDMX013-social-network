import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');


  button.textContent = 'LOG IN';
  title.textContent = 'LOG IN';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  })

  div.append(title, inputName, inputEmail, button, buttonBack);

  return div;
};