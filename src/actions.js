import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';

export const createPost = (user, text) => {
  return {
    type: CREATE_POST,
    user,
    text
  }
}

export const editPost = (user, text) => {
  return {
    type: EDIT_POST,
    user,
    text
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}
