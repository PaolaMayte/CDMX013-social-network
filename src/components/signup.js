import { onNavigate } from '../main.js';
import { crearUsuaria } from '../lib/auth.js';

export const signup = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  button.textContent = 'SIGN UP';
  title.textContent = 'SIGN UP';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  button.addEventListener('click', () => {
    crearUsuaria('carlos@carlos.com', '123456').then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('ya se registro', user);
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('Nel no se registro', errorMessage);
      });
  });

  div.append(title, inputName, inputEmail, inputPassword, button, buttonBack);

  return div;
};
