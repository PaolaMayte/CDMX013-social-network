import { onNavigate } from '../main.js';
import { crearUsuaria } from '../lib/auth.js';

export const signup = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'password');


  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  button.textContent = 'SIGN UP';
  title.textContent = 'SIGN UP';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  button.addEventListener('click', () => {
    crearUsuaria(inputEmail.value, inputPassword.value).then((userCredential) => {
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

  div.append(title, inputEmail, inputPassword, button, buttonBack);

  return div;
};