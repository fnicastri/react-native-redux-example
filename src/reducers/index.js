import { combineReducers } from 'redux';

import { mode } from './mode';
import { subject } from './subject';

export default combineReducers({
  mode,
  subject
});