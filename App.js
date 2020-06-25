import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux/store/store';
import AppContainer from './src/components/AppContainer';
import './src/utils/localization/i18n';


class App extends Component {

  render() {

    return (
      <Provider store={Store} >
        <AppContainer />
      </Provider >



    );
  }
}


export default App;

