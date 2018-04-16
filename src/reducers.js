import { CREATE_POST, EDIT_POST, SET_FILTER} from './actionTypes';

export function postReducer (state = [], action) {

  switch (action.type) {
    case CREATE_POST: {
      const { type, ...post } = action

      return [ ...state, post]
    }

    case EDIT_POST: {
      return
    }

    default: {
      return state
    }

  }

}
