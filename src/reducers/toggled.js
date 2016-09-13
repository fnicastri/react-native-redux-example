import { SET_TOGGLED } from '../actions';

export function toggled(state = false, action) {
  switch(action.type) {
    case SET_TOGGLED:
      return action.toggled;
    default:
      return state;
  }
}