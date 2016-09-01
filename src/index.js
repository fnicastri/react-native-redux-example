import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducers from './reducers';
import createMainContainer from './containers/main';

const store = createStore(reducers);

export default React => {

  const app = ({ ...props }) => {

    const Main = createMainContainer(React);

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  };

  return app;
};