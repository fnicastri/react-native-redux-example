import { connect } from 'react-redux';

import * as actions from '../actions';
import createMain from '../components/main1';

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
    },
    onChangeToggled: (e, toggled) => {
      dispatch(actions.setToggled(toggled));
    }
  }
};

export default React => {

  const Main = createMain(React);

  return connect(mapStateToProps, mapDispatchToProps)(Main);
}