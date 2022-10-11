import { createPost } from './Createpost.js';

export const feed = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');

  title.textContent = 'FEED';
  buttonLogout.textContent = 'LOG OUT';

  div.append(createPost(), title, buttonLogout);

  return div;
};
