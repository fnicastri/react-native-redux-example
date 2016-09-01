import { SET_SUBJECT } from '../actions';

export function subject(state = 'Hello', action) {
  switch(action.type) {
    case SET_SUBJECT:
      return action.subject;
    default:
      return state;
  }
}