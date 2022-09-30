import { onNavigate } from '../main.js';

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
    })

    div.append(title, inputName, inputEmail, inputPassword, button, buttonBack);

    return div;
};