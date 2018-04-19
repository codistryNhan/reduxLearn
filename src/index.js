import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);

const unsubscribe = store.subscribe(() => {
  console.log('state changed:', store.getState());
})

store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('dan', 'hello world'));
store.dispatch(editPost(0, 'hello guys'));
