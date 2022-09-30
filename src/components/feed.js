import { onNavigate } from '../main.js';

export const feed = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const buttonLogout = document.createElement('button');
    const inputPost = document.createElement('textarea');
    const buttonUp = document.createElement('button');

    title.textContent = 'FEED';
    buttonLogout.textContent = 'LOG OUT';
    buttonUp.textContent = 'UP';


    div.append(title, buttonLogout, inputPost, buttonUp);

    return div;
};