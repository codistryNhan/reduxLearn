import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer);

console.log(store.getState());
