export const SingUp = () => {
    const div = document.createElement('div');
    const title = document.createElement ('h2');
    
    const button = document.createElement('button');
    const buttonBack = document.createElement('button');

    
    button.textContent = 'SING UP';
    title.textContent = 'SING UP';

    div.append (title, button, buttonBack);

    return div;
};