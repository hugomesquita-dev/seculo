/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {LogBox, AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

import {name as appName} from './app.json';
import store from './src/redux/store';
//import messaging from '@react-native-firebase/messaging';

LogBox.ignoreAllLogs();

// Navigation
import Navigation from './src/navigation';

const App = () => {

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
