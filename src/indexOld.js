import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);
const root = document.getElementById('root');

const render = () => {
  root.innerHTML = '';
  const { posts } = store.getState();

  posts.forEach((post, index) => {
    const item = document.createElement('li');
    item.addEventListener('click', ()=> {
      store.dispatch(editPost(index, post.text + '!'))
    });
    const text = document.createTextNode(post.user + ' - ' + post.text);
    item.appendChild(text);
    root.appendChild(item);
  });
}

const stopRender = store.subscribe(render);
store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));
