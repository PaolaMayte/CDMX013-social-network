import { createPost } from './Createpost.js';
import { getPost } from '../lib/post.js';

export const feed = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');

  title.textContent = 'FEED';
  buttonLogout.textContent = 'LOG OUT';

  getPost((document) => {
console.log('data', document._snapshot.docs);
  });

  div.append(createPost(), title, buttonLogout);

  return div;
};
