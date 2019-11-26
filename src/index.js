import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import App from './App';

export default function Index() {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="#fff"
        translucent={false}
        barStyle="dark-content"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
