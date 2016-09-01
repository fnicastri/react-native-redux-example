import { connect } from 'react-redux';

import * as actions from '../actions';
import createMain from '../components/main';

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeMode: (e) => {
      dispatch(actions.setMode('hidden')); 
    },
    onChangeSubject: (e) => {
    	dispatch(actions.setSubject('Aloha!'));
    }
  }
};

export default React => {

  const Main = createMain(React);

  return connect(mapStateToProps, mapDispatchToProps)(Main);
}