import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let state = appReducer(undefined, { type: 'INIT_ACTION'});
console.log('initial state:', state);
