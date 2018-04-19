import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);
const root = document.getElementById('root');

const render = () => {
  root.innerHTML = '';
  const { posts } = store.getState();

  posts.forEach((post) => {
    const item = document.createElement('li');
    const text = document.createTextNode(post.user + ' - ' + post.text);
    item.appendChild(text);
    root.appendChild(item);
  });
}

const stopRender = store.subscribe(render);
store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));
