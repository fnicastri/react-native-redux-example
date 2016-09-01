import { SET_MODE } from '../actions';

export function mode(state = 'display', action) {
  switch(action.type) {
    case SET_MODE:
      return action.mode;
    default:
      return state;
  }
}