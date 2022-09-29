import { onNavigate } from './main.js';

export const Welcome = () => {
    const div = document.createElement('div');
    const title = document.createElement ('h2');
    const buttonLogin = document.createElement('button');
    const buttonSingup = document.createElement('button');

    buttonLogin.textContent = 'LOG IN';
    buttonSingup.textContent = 'SING UP'
    title.textContent = 'ENIGMA';

    div.append (title, buttonLogin, buttonSingup);

    return div;
};