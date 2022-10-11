import { savePost } from '../lib/post.js';

export const createPost = () => {
  const div = document.createElement('div');
  const inputPost = document.createElement('textarea');
  const buttonUp = document.createElement('button');

  buttonUp.textContent = 'UP';
  buttonUp.addEventListener('click', () => {
    savePost(inputPost.value);
  });
  div.append(inputPost, buttonUp);

  return div;
};
