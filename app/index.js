import React from 'react';

import {createAppContainer} from 'react-navigation';
import EStylesSheet from 'react-native-extended-stylesheet';
import {Provider, connect} from 'react-redux';

// screens
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';

import store from './config/store';

import {AlertProvider} from './components/Alert';

import Navigator from './config/Routes';

EStylesSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
  // outline: 1,
});

const mapStateToProps = state => ({primaryColor: state.themes.primaryColor});

const App = connect(mapStateToProps)(createAppContainer(Navigator));

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <App />
    </AlertProvider>
  </Provider>
);
