import { combineReducers } from 'redux';

import { mode } from './mode';
import { subject } from './subject';
import { toggled } from './toggled';

export default combineReducers({
  mode,
  subject,
  toggled
});